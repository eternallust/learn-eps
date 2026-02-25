import { Text } from "@components/ui";
import { LinearGradient } from "expo-linear-gradient";
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
  title = "Aptitude Test",
  timePerQuestion = 120,
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

  // Format timer sebagai mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

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

  // Tampilan hasil akhir
  if (quizFinished) {
    return (
      <LinearGradient
        colors={["#FDF2F8", "#EDE9FE", "#DBEAFE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
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
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#EFF6FF", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBackground}
    >
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backIcon}>{"<"}</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>{title}</Text>
        
        <View style={styles.timerContainer}>
          <Text style={styles.timerIcon}>⏱</Text>
          <Text
            style={[
              styles.timerText,
              timeLeft <= 30 && styles.timerWarning,
            ]}
          >
            {formatTime(timeLeft)}
          </Text>
        </View>
      </View> */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            {/* <BackButton /> */}
          </View>
          <View style={styles.headerCenter}>
            <Text variant="bold" size="xl" style={{ color: "white" }}>
              Kosakata
            </Text>
          </View>
          <View style={styles.headerRight}>
           
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.headerContent}>
          <Text style={styles.questionCounter}>
            Questions {currentQuestionIndex + 1} of {quizData.length}
          </Text>
          <View style={styles.timerContainer}>
              <Text style={styles.timerIcon}>⏱</Text>
              <Text
                style={[
                  styles.timerText,
                  timeLeft <= 30 && styles.timerWarning,
                ]}
              >
                {formatTime(timeLeft)}
              </Text>
            </View>
          </View>
          
          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <LinearGradient
              colors={["#00458e","#000328",]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                styles.progressBarFill,
                { width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }
              ]}
            />
          </View>
        </View>


      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {/* Question Counter */}
       
        {/* Question Text */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>

          {/* Gambar jika tipe soal adalah gambar */}
          {currentQuestion.type === "image" && currentQuestion.imageSource && (
            <Image
              source={currentQuestion.imageSource}
              style={styles.questionImage}
              resizeMode="contain"
            />
          )}
        </View>
       

        {/* Pilihan Jawaban */}
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === index && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(index)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === index && styles.selectedOptionText,
                ]}
              >
                {option}
              </Text>
              {selectedOption === index ? (
                <View style={styles.checkIcon}>
                  <Text style={styles.checkIconText}>✓</Text>
                </View>
              ) : (
                <View style={styles.radioCircle} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Tombol Next */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedOption === null && styles.disabledButton,
          ]}
          onPress={handleNextQuestion}
          disabled={selectedOption === null}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex === quizData.length - 1 ? "Finish" : "Next"}
          </Text>
          <Text style={styles.nextButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
