import { Text } from "@components/ui";
import Slider from "@react-native-community/slider";
import { Audio, AVPlaybackStatus } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
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
  audioSource?: any;
  listeningText?: string;
}

interface QuizScreenProps {
  quizData: QuizItem[];
  title?: string;
  timePerQuestion?: number;
}

export default function QuizScreen({
  quizData,
  title = "Aptitude Test",
  timePerQuestion = 1200,
}: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [quizFinished, setQuizFinished] = useState(false);

  // Audio player
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  // Format waktu mm:ss
  const formatAudioTime = (millis: number) => {
    const totalSeconds = Math.floor(millis / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Callback untuk update status audio
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

  // Default audio dari assets
  const defaultAudio = require("@assets/sound/file_example_MP3_700KB.mp3");

  // Load audio saat soal listening muncul
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

  // Play/Pause audio
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

  // Seek audio
  const onSliderValueChange = async (value: number) => {
    if (soundRef.current) {
      await soundRef.current.setPositionAsync(value);
    }
  };

  // Timer untuk soal
  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizFinished) {
      handleNextQuestion();
    }
  }, [timeLeft, quizFinished]);

  // Format timer sebagai mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = async () => {
    // Stop dan unload audio jika ada
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
      setIsPlaying(false);
      setPosition(0);
      setDuration(0);
    }

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

  const handleRestartQuiz = async () => {
    // Stop dan unload audio jika ada
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
      setIsPlaying(false);
      setPosition(0);
      setDuration(0);
    }

    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setTimeLeft(timePerQuestion);
    setQuizFinished(false);
  };

  const lottieRef = useRef<LottieView>(null);
  const confettiRef = useRef<LottieView>(null);
  const earnedPoints = score * 10;

  useEffect(() => {
    if (quizFinished && confettiRef.current) {
      confettiRef.current.play();

      const interval = setInterval(() => {
        confettiRef.current?.play();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [quizFinished]);

  // Tampilan hasil akhir
  if (quizFinished) {
    return (
      <View style={styles.resultBackground}>
        <View style={styles.confettiOverlay} pointerEvents="none">
          <LottieView
            ref={confettiRef}
            source={require("@assets/images/confeti.json")}
            loop={false}
            style={styles.confettiAnimation}
          />
        </View>

        <View style={styles.resultContainer}>
          <View style={styles.lottieContainer}>
            <LottieView
              ref={lottieRef}
              source={require("@assets/images/pass.json")}
              autoPlay
              loop={false}
              style={styles.lottieAnimation}
            />
          </View>

          <Text variant="bold" style={styles.pointsText}>
            +{earnedPoints} Points
          </Text>

          <Text variant="bold" size="lg" style={styles.congratsTitle}>
            Congratulations, collect more
          </Text>

          <Text variant="regular" size="md" style={styles.congratsSubtitle}>
            To get more points, immediately exchange{"\n"}your trash with us. and get abundant points
          </Text>

          <TouchableOpacity
            style={styles.seePointsButton}
            onPress={() => router.push("/")}
          >
            <Text variant="medium" size="md" style={styles.seePointsButtonText}>
              See my points
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={handleRestartQuiz}
          >
            <Text variant="medium" size="md" style={styles.tryAgainButtonText}>
              Coba Lagi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
            <Text variant="bold" size="xl">
              Simulasi CBT
            </Text>
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
                    minimumTrackTintColor="#4338CA"
                    maximumTrackTintColor="#E5E7EB"
                    thumbTintColor="#4338CA"
                    disabled={!soundRef.current}
                  />
                  <View style={styles.audioTimeContainer}>
                    <Text style={styles.audioTimeText}>
                      {formatAudioTime(position)}
                    </Text>
                    <Text style={styles.audioTimeText}>
                      {formatAudioTime(duration)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
