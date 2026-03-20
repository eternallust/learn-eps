import { vocabularies } from "@/data/vocabulary";
import { capitalize } from "@/utils/helpers";
import { Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, {
  useCallback,
  useMemo,
  useState,
} from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";

const LONG_TEXT_THRESHOLD = 12;

function visualLength(text: string): number {
  let len = 0;
  for (const char of text) {
    const code = char.charCodeAt(0);
    const isKorean =
      (code >= 0xac00 && code <= 0xd7a3) ||
      (code >= 0x1100 && code <= 0x11ff) ||
      (code >= 0x3130 && code <= 0x318f);
    len += isKorean ? 2 : 1;
  }
  return len;
}

function questionFontSize(text: string): number {
  const len = text.length;
  if (len <= 2) return 56;
  if (len <= 4) return 48;
  if (len <= 6) return 40;
  if (len <= 9) return 34;
  return 28;
}

const LABELS = ["A", "B", "C", "D"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface QuizOption { label: string; text: string }
interface QuizQuestion { questionText: string; options: QuizOption[]; correctLabel: string }

function buildQuestions(korean: string[], indonesian: string[]): QuizQuestion[] {
  return shuffle([...Array(korean.length).keys()]).map((idx) => {
    const showKorean = Math.random() > 0.5;
    const questionText = showKorean ? korean[idx] : indonesian[idx];
    const correctAnswer = showKorean ? indonesian[idx] : korean[idx];
    const pool = showKorean ? indonesian : korean;
    const wrongs = shuffle(pool.filter((_, i) => i !== idx)).slice(0, 3);
    const shuffledOptions = shuffle([correctAnswer, ...wrongs]);
    let correctLabel = LABELS[0];
    const options: QuizOption[] = shuffledOptions.map((text, i) => {
      if (text === correctAnswer) correctLabel = LABELS[i];
      return { label: LABELS[i], text };
    });
    return { questionText, options, correctLabel };
  });
}

// ── Sub-components (memo agar tidak re-render jika props tidak berubah) ──────

interface OptionBtnProps {
  opt: QuizOption;
  isSelected: boolean;
  showCorrect: boolean;
  showWrong: boolean;
  answered: boolean;
  isLong: boolean;
  onPress: (label: string) => void;
}

const OptionBtn = React.memo(function OptionBtn({ opt, isSelected, showCorrect, showWrong, answered, isLong, onPress }: OptionBtnProps) {
  const labelActive = (!answered && isSelected) || showCorrect || showWrong;
  return (
    <TouchableOpacity
      style={[
        styles.optionBtn,
        isLong && styles.optionBtnFull,
        !answered && isSelected && styles.optionBtnSelected,
        showCorrect && styles.optionBtnCorrect,
        showWrong && styles.optionBtnWrong,
      ]}
      activeOpacity={0.75}
      onPress={() => onPress(opt.label)}
      disabled={answered}
    >
      <View style={[
        styles.optionLabelWrap,
        !answered && isSelected && styles.optionLabelWrapSelected,
        showCorrect && styles.optionLabelWrapCorrect,
        showWrong && styles.optionLabelWrapWrong,
      ]}>
        <Text variant="bold" size="sm" style={[
          styles.optionLabel,
          labelActive && styles.optionLabelSelected,
        ]}>
          {opt.label}
        </Text>
      </View>
      <Text
        variant="medium"
        size="sm"
        style={[
          styles.optionText,
          !answered && isSelected && styles.optionTextSelected,
          showCorrect && styles.optionTextCorrect,
          showWrong && styles.optionTextWrong,
        ]}
        numberOfLines={2}
      >
        {capitalize(opt.text)}
      </Text>
    </TouchableOpacity>
  );
});

interface FeedbackProps {
  isCorrect: boolean;
  correctLabel: string;
  correctText: string;
}

const FeedbackBanner = React.memo(function FeedbackBanner({ isCorrect, correctLabel, correctText }: FeedbackProps) {
  return (
    <View style={[styles.feedbackBanner, isCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
      <View style={styles.feedbackTitleRow}>
        <View style={[styles.feedbackIconWrap, isCorrect ? styles.feedbackIconCorrect : styles.feedbackIconWrong]}>
          <Ionicons name={isCorrect ? "checkmark" : "close"} size={14} color="#FFFFFF" />
        </View>
        <Text variant="bold" size="md" style={[styles.feedbackTitle, isCorrect ? styles.feedbackTitleCorrect : styles.feedbackTitleWrong]}>
          {isCorrect ? "Jawaban Benar!" : "Jawaban Salah"}
        </Text>
      </View>
      {!isCorrect && (
        <View style={styles.feedbackHintRow}>
          <Ionicons name="warning-outline" size={14} color="#B45309" />
          <Text variant="regular" size="sm" style={styles.feedbackHint}>
            Jawaban yang benar adalah{" "}
            <Text variant="bold" size="sm" style={styles.feedbackHint}>
              {correctLabel}: {correctText}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
});

// ── Main screen ───────────────────────────────────────────────────────────────

export const VocabularyQuizScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const chapter = parseInt(params.chapter as string) || 0;
  const vocabularyIndex = parseInt(params.vocabularyIndex as string) || 0;

  const vocabularyData = useMemo(() =>
    vocabularies[chapter]?.vocabulary[vocabularyIndex] ?? {
      koreanTitle: "", englishTitle: "", korean: [] as string[], indonesian: [] as string[],
    },
    [chapter, vocabularyIndex]
  );

  const questions = useMemo(
    () => buildQuestions(vocabularyData.korean, vocabularyData.indonesian),
    [vocabularyData.korean, vocabularyData.indonesian]
  );

  const total = questions.length;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const current = questions[currentIdx];

  const isLongLayout = useMemo(
    () => current?.options.some((o) => visualLength(o.text) > LONG_TEXT_THRESHOLD) ?? false,
    [current]
  );

  const fontSize = useMemo(
    () => questionFontSize(current?.questionText ?? ""),
    [current?.questionText]
  );

  const isCorrect = answered && selected === current?.correctLabel;
  const correctOpt = useMemo(
    () => current?.options.find((o) => o.label === current.correctLabel),
    [current]
  );

  // Animasi progress bar
  const progressWidth = useSharedValue(total > 0 ? (1 / total) * 100 : 0);
  const progressStyle = useAnimatedStyle(() => ({
    width: `${progressWidth.value}%` as `${number}%`,
  }));

  // Animasi slide
  const translateX = useSharedValue(0);
  const slideStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const applyNextQuestion = useCallback(() => {
    setCurrentIdx((prev) => {
      const next = prev + 1;
      progressWidth.value = withTiming(((next + 1) / total) * 100, { duration: 400 });
      return next;
    });
    setSelected(null);
    setAnswered(false);
    translateX.value = 350;
    translateX.value = withTiming(0, { duration: 300 });
  }, [translateX, progressWidth, total]);

  const handleNext = useCallback(() => {
    if (currentIdx < total - 1) {
      translateX.value = withTiming(-350, { duration: 250 }, (done) => {
        if (done) runOnJS(applyNextQuestion)();
      });
    } else {
      router.back();
    }
  }, [currentIdx, total, translateX, applyNextQuestion, router]);

  const handleConfirm = useCallback(() => {
    if (!selected) return;
    setAnswered(true);
  }, [selected]);

  const handleOptionPress = useCallback((label: string) => {
    if (!answered) setSelected(label);
  }, [answered]);


  if (!current) {
    return (
      <View style={styles.container}>
        <Text variant="bold" size="lg" style={{ textAlign: "center", marginTop: 40 }}>
          Data kosakata tidak ditemukan.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.customHeader}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color="#1A1941" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text variant="bold" size="xl" style={styles.headerTitle}>
              {(params.vocabularyTitle as string) || "Quiz Kosakata"}
            </Text>
            <Text variant="regular" size="md" style={styles.headerSubtitle}>
              {(params.vocabularyEnglishTitle as string) || "Tes Hafalan"}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerAvatarButton} onPress={() => null} activeOpacity={0.8}>
          <Image source={require("../../assets/images/avatar.jpg")} style={styles.headerAvatar} resizeMode="cover" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 16 }}>
        {/* Counter */}
        <View style={styles.questionCounterRow}>
          <Text variant="regular" size="sm" style={styles.questionCounter}>
            Pertanyaan{" "}
            <Text variant="bold" size="sm" style={styles.questionCounterHighlight}>{currentIdx + 1}</Text>
            {" "}dari{" "}
            <Text variant="bold" size="sm" style={styles.questionCounterHighlight}>{total}</Text>
          </Text>
        </View>

        {/* Progress bar */}
        <View style={styles.progressTrack}>
          <Animated.View style={[styles.progressFill, progressStyle]} />
        </View>

        {/* Card + Options dengan animasi slide */}
        <View style={styles.slideClip}>
          <Animated.View style={slideStyle}>
            <View style={styles.card}>
              <View style={styles.cardHeader} />
              <View style={styles.cardContent}>
                <Text variant="bold" style={[styles.koreanText, { fontSize }]}>
                  {capitalize(current.questionText)}
                </Text>
              </View>
              <View style={styles.cardBottom}>
                <View style={{ width: 60, height: 8, backgroundColor: "#b71540", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                <View style={{ width: 60, height: 8, backgroundColor: "#0a3d62", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} />
              </View>
            </View>

            <View style={styles.optionsGrid}>
              {current.options.map((opt) => (
                <OptionBtn
                  key={opt.label}
                  opt={opt}
                  isSelected={selected === opt.label}
                  showCorrect={answered && opt.label === current.correctLabel}
                  showWrong={answered && selected === opt.label && opt.label !== current.correctLabel}
                  answered={answered}
                  isLong={isLongLayout}
                  onPress={handleOptionPress}
                />
              ))}
            </View>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Feedback + Tombol */}
      <View style={styles.submitWrapper}>
        {answered && (
          <FeedbackBanner
            isCorrect={isCorrect}
            correctLabel={correctOpt?.label ?? ""}
            correctText={correctOpt?.text ?? ""}
          />
        )}
        {!answered ? (
          <TouchableOpacity
            style={[styles.submitBtn, !selected && styles.submitBtnDisabled]}
            activeOpacity={0.85}
            disabled={!selected}
            onPress={handleConfirm}
          >
            <Text variant="bold" size="md" style={styles.submitBtnText}>Konfirmasi Jawaban</Text>
            <Ionicons name="checkmark-circle-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.85} onPress={handleNext}>
            <Text variant="bold" size="md" style={styles.submitBtnText}>
              {currentIdx < total - 1 ? "Lanjut" : "Selesai"}
            </Text>
            <Ionicons
              name={currentIdx < total - 1 ? "arrow-forward-circle" : "checkmark-circle"}
              size={20}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
