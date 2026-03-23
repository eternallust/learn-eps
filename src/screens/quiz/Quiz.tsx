import { Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio, AVPlaybackStatus } from "expo-av";
import { router } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

interface QuizItem {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  type: string;
  imageSource?: ImageSourcePropType;
  audioSource?: any;
  listeningText?: string;
}

interface QuizScreenProps {
  quizData: QuizItem[];
  title?: string;
  timePerQuestion?: number;
}

const OPTION_LABELS = ["A", "B", "C", "D"];

export default function QuizScreen({
  quizData,
  title = "Simulasi CBT",
  timePerQuestion = 3600,
}: QuizScreenProps) {
  const insets = useSafeAreaInsets();
  /** Hanya untuk area kartu (body): padding kiri/kanan simetris */
  const bodyHorizontalInset = Math.max(insets.left, insets.right);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [quizFinished, setQuizFinished] = useState(false);

  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  // ── Animasi fade + scale ringan ───────────────────────────────────
  const FADE_MS = 220;
  const SCALE_SHRINK = 0.97;
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const animatedBodyStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const navigateWithSlide = (_goNext: boolean, action: () => void) => {
    const easeOut = Easing.out(Easing.ease);
    const easeIn = Easing.in(Easing.ease);
    opacity.value = withTiming(0, { duration: FADE_MS, easing: easeOut });
    scale.value = withTiming(SCALE_SHRINK, { duration: FADE_MS, easing: easeOut }, (done) => {
      if (done) {
        runOnJS(action)();
        opacity.value = withTiming(1, { duration: FADE_MS, easing: easeIn });
        scale.value = withTiming(1, { duration: FADE_MS, easing: easeIn });
      }
    });
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  const formatAudioTime = (millis: number) => {
    const totalSeconds = Math.floor(millis / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
      setIsPlaying(status.isPlaying);
      if (status.didJustFinish) {
        setIsPlaying(false);
        setPosition(0);
      }
    }
  };

  const defaultAudio = require("@assets/sound/file_example_MP3_700KB.mp3");

  useEffect(() => {
    const loadAudio = async () => {
      if (currentQuestion.type === "listening") {
        setIsLoading(true);
        try {
          const audioSource = currentQuestion.audioSource || defaultAudio;
          const { sound } = await Audio.Sound.createAsync(
            audioSource,
            { shouldPlay: false },
            onPlaybackStatusUpdate
          );
          soundRef.current = sound;
        } catch (error) {
          console.error("Error loading audio:", error);
        }
        setIsLoading(false);
      }
    };
    loadAudio();
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
        setIsPlaying(false);
        setPosition(0);
        setDuration(0);
      }
    };
  }, [currentQuestionIndex, currentQuestion.audioSource, currentQuestion.type]);

  const togglePlayPause = async () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      await soundRef.current.pauseAsync();
    } else {
      if (position >= duration && duration > 0) {
        await soundRef.current.setPositionAsync(0);
      }
      await soundRef.current.playAsync();
    }
  };

  const onSliderValueChange = async (value: number) => {
    if (soundRef.current) {
      await soundRef.current.setPositionAsync(value);
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const stopAndUnloadAudio = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
      setIsPlaying(false);
      setPosition(0);
      setDuration(0);
    }
  };

  const handleNextQuestion = async () => {
    await stopAndUnloadAudio();
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    navigateWithSlide(true, () => {
      if (isCorrect) setScore((s) => s + 1);
      setSelectedOption(null);
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex((i) => i + 1);
      } else {
        setQuizFinished(true);
      }
    });
  };

  const handlePrevQuestion = async () => {
    if (currentQuestionIndex === 0) {
      router.back();
      return;
    }
    await stopAndUnloadAudio();
    navigateWithSlide(false, () => {
      setSelectedOption(null);
      setCurrentQuestionIndex((i) => i - 1);
    });
  };


  return (
    <View style={styles.root}>
      <StatusBar hidden />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text variant="bold" style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
          <Ionicons name="information-circle-outline" size={16} color="#A78BFA" style={{ marginLeft: 6 }} />
        </View>

        <View style={[styles.timerBadge, timeLeft <= 300 && styles.timerBadgeWarning]}>
          <Text variant="bold" style={[styles.timerText, timeLeft <= 300 && styles.timerWarning]}>
            {formatTime(timeLeft)}
          </Text>
          <Ionicons
            name="eye-outline"
            size={15}
            color={timeLeft <= 300 ? "#DC2626" : "#7C3AED"}
            style={{ marginLeft: 6 }}
          />
        </View>


      </View>

      {/* ── Body: satu-satunya area dengan inset horizontal (header/footer full lebar) ── */}
      <View style={[styles.bodySafeHorizontal, { paddingHorizontal: bodyHorizontalInset }]}>
        <View style={styles.landscapeBody}>

          {/* Panel Kiri — Soal */}
          <View style={styles.leftPanel}>
            {/* Kartu soal: bingkai statis, hanya isi yang animasi */}
            <View style={styles.questionCard}>
              <Animated.View style={[styles.cardInnerAnimated, animatedBodyStyle]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.questionCardBody}
                >
                  <Text variant="bold" style={styles.questionText}>
                    {currentQuestion.question}
                  </Text>

                  {currentQuestion.type === "image" && currentQuestion.imageSource && (
                    <Image
                      source={currentQuestion.imageSource}
                      style={styles.questionImage}
                      resizeMode="contain"
                    />
                  )}

                  {currentQuestion.type === "listening" && (
                    <View style={styles.listeningContainer}>
                      {currentQuestion.listeningText && (
                        <Text style={styles.listeningText}>{currentQuestion.listeningText}</Text>
                      )}
                      <View style={styles.audioPlayerContainer}>
                        <TouchableOpacity
                          style={styles.playPauseButton}
                          onPress={togglePlayPause}
                          disabled={isLoading || !soundRef.current}
                        >
                          <Text style={styles.playPauseIcon}>
                            {isLoading ? "⏳" : isPlaying ? "⏸" : "▶"}
                          </Text>
                        </TouchableOpacity>
                        <View style={styles.audioSliderContainer}>
                          <Slider
                            style={styles.audioSlider}
                            minimumValue={0}
                            maximumValue={duration}
                            value={position}
                            onSlidingComplete={onSliderValueChange}
                            minimumTrackTintColor="#7C3AED"
                            maximumTrackTintColor="#DDD6FE"
                            thumbTintColor="#7C3AED"
                            disabled={!soundRef.current}
                          />
                          <View style={styles.audioTimeContainer}>
                            <Text style={styles.audioTimeText}>{formatAudioTime(position)}</Text>
                            <Text style={styles.audioTimeText}>{formatAudioTime(duration)}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                </ScrollView>
              </Animated.View>

              {/* Bar progress di bawah kartu — tetap statis */}
              <View style={styles.twoToneBar}>
                <View style={[styles.toneAnswered, { flex: 1 }]} />
                <View style={[styles.toneRemaining, { flex: 1 }]} />
              </View>
            </View>
          </View>

          {/* Panel Kanan — Opsi: bingkai statis */}
          <View style={styles.leftPanel}>
            <View style={[styles.questionCard, { padding: 16 }]}>
              <Text variant="bold" style={styles.selectOptionTitle}>Pilih jawaban yang tepat</Text>
              <Animated.View style={[styles.cardInnerAnimated, animatedBodyStyle]}>


                <View style={styles.optionsGrid}>
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.optionButton,
                          isSelected && styles.optionButtonSelected,
                        ]}
                        onPress={() => setSelectedOption(index)}
                        activeOpacity={0.7}
                      >
                        <View style={[styles.optionBadge, isSelected && styles.optionBadgeSelected]}>
                          <Text variant="bold" style={[styles.optionBadgeText, isSelected && styles.optionBadgeTextSelected]}>
                            {OPTION_LABELS[index]}
                          </Text>
                        </View>
                        <Text
                          variant="regular"
                          style={[styles.optionText, isSelected && styles.optionTextSelected]}
                          numberOfLines={2}
                        >
                          {option}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

              </Animated.View>
            </View>
          </View>

        </View>
      </View>

      {/* ── Footer ── */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.helpButton} activeOpacity={0.7}>
          <Ionicons name="help" size={13} color="#7C3AED" />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.questionCounter} activeOpacity={0.7}>
          <Text variant="medium" style={styles.questionCounterText}>
            Soal {currentQuestionIndex + 1} dari {quizData.length}
          </Text>
          <Ionicons name="chevron-down" size={12} color="#5B21B6" style={{ marginLeft: 4 }} />
        </TouchableOpacity> */}

        <View style={styles.footerActions}>
          <TouchableOpacity style={styles.backButton} onPress={handlePrevQuestion} activeOpacity={0.8}>
            <Text variant="medium" style={styles.backButtonText}>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.nextButton, selectedOption === null && styles.nextButtonDisabled]}
            onPress={handleNextQuestion}
            disabled={selectedOption === null}
            activeOpacity={0.8}
          >
            <Text variant="bold" style={styles.nextButtonText}>
              {currentQuestionIndex === quizData.length - 1 ? "Selesai" : "Lanjut"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
