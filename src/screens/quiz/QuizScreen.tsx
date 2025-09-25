import { Header, Text } from "@components/ui";
import { COLORS } from "@constants/theme";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

interface QuizItem {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  type: string;
  imageSource?: ImageSourcePropType;
}

interface QuizScreenProps {
  quizData: QuizItem[];
  title?: string;
  timePerQuestion?: number;
}

export default function QuizScreen({
  quizData,
  title = "Simulasi Quiz",
  timePerQuestion = 30,
}: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [quizFinished, setQuizFinished] = useState(false);

  // Timer untuk soal
  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizFinished) {
      handleNextQuestion();
    }
  }, [timeLeft, quizFinished]);

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    // Periksa jawaban dan tambahkan skor jika benar
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Reset pilihan
    setSelectedOption(null);

    // Pindah ke soal berikutnya atau selesai
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(timePerQuestion); // Reset timer
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setTimeLeft(timePerQuestion);
    setQuizFinished(false);
  };

  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg" style={{ color: "#FFFFFF" }}>
        ← Kembali
      </Text>
    </TouchableOpacity>
  );

  // Tampilan hasil akhir
  if (quizFinished) {
    return (
      <View style={styles.container}>
        <View style={styles.gradientHeader}>
          <Header title="Hasil Simulasi" />
        </View>
        <View style={styles.resultContainer}>
          <Text variant="bold" size="xxl" style={styles.resultTitle}>
            Simulasi Selesai!
          </Text>
          <Text variant="medium" size="xl" style={styles.resultScore}>
            Skor Anda: {score} / {quizData.length}
          </Text>
          <Text variant="regular" size="md" style={styles.resultText}>
            {score === quizData.length
              ? "Sempurna! Anda menguasai semua materi dengan baik."
              : score >= quizData.length / 2
              ? "Bagus! Teruslah berlatih untuk meningkatkan pemahaman Anda."
              : "Teruslah belajar dan berlatih. Anda pasti bisa!"}
          </Text>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={handleRestartQuiz}
          >
            <Text variant="medium" size="md" style={styles.restartButtonText}>
              Coba Lagi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => router.push("/")}
          >
            <Text variant="medium" size="md" style={styles.homeButtonText}>
              Kembali ke Beranda
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.gradientHeader}>
        <Header title={title} leftComponent={<BackButton />} />

        {/* Header dengan Progress Bar dan Timer */}
        <View style={styles.quizHeaderContainer}>
          <Text variant="medium" size="md" style={styles.questionCounter}>
            Question {currentQuestionIndex + 1} of {quizData.length}
          </Text>

          <View style={styles.timerContainer}>
            <Text
              variant="medium"
              size="md"
              style={[
                styles.timerText,
                { color: timeLeft <= 10 ? COLORS.error : "#FFFFFF" },
              ]}
            >
              {timeLeft}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>

      <ScrollView>
        {/* Pertanyaan */}
        <View style={styles.questionContainer}>
          <Text variant="bold" size="lg" style={styles.questionText}>
            {currentQuestion.question}
          </Text>

          {/* Gambar jika tipe soal adalah gambar */}
          {currentQuestion.type === "image" && (
            <View>
              <Image
                source={currentQuestion.imageSource}
                style={styles.questionImage}
                resizeMode="contain"
              />
            </View>
          )}
        </View>

        {/* Pilihan Jawaban dalam grid 2x2 */}
        <View>
          <Text variant="medium" size="md">
            Pilihan Jawaban:
          </Text>
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedOption === index && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect(index)}
              >
                <Text
                  variant="medium"
                  size="md"
                  style={[
                    styles.optionText,
                    selectedOption === index && styles.selectedOptionText,
                  ]}
                >
                  {option}
                </Text>
                {selectedOption === index && (
                  <View style={styles.checkIcon}>
                    <Text style={{ color: "#4CAF50", fontWeight: "bold" }}>
                      ✓
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Tombol Selanjutnya */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedOption === null && styles.disabledButton,
          ]}
          onPress={handleNextQuestion}
          disabled={selectedOption === null}
        >
          <Text variant="medium" size="md" style={styles.nextButtonText}>
            {currentQuestionIndex === quizData.length - 1
              ? "Selesai"
              : "Selanjutnya"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
