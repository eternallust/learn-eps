import { Text } from "@components/ui";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const VocabularyFinishLearn: React.FC = () => {
  const router = useRouter();
  const confettiRef = useRef<LottieView>(null);

  useEffect(() => {
    confettiRef.current?.play();
    const interval = setInterval(() => {
      confettiRef.current?.play();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleRepeat = () => {
    router.back();
  };

  const handleTestMemory = () => {
    router.push("/quiz" as any);
  };

  return (
    <View style={styles.container}>

      {/* Confetti overlay */}
      <View style={styles.confettiOverlay} pointerEvents="none">
        <LottieView
          ref={confettiRef}
          source={require("@assets/images/confeti.json")}
          loop={false}
          style={styles.confettiAnimation}
        />
      </View>

      <View style={styles.content}>

        {/* Character circle */}

        <LottieView
          source={require("@assets/images/rocket.json")}
          autoPlay
          loop
          style={styles.characterAnimation}
        />


        {/* Title */}
        <Text variant="bold" size="xl" style={styles.title}>
          Hebat! Kamu sudah selesai.
        </Text>

        {/* Subtitle */}
        <Text variant="regular" size="md" style={styles.subtitle}>
          Apakah ingin aku{" "}
          <Text variant="bold" size="md" style={styles.subtitleHighlight}>
            tes hafalanmu?
          </Text>
        </Text>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleTestMemory}
            activeOpacity={0.85}
          >
            <Ionicons name="checkmark-circle" size={22} color="#FFFFFF" />
            <Text variant="bold" size="md" style={styles.primaryButtonText}>
              Tes Hafalan Saya!
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleRepeat}
            activeOpacity={0.85}
          >
            <Ionicons name="refresh" size={20} color="#4A4A6A" />
            <Text variant="medium" size="md" style={styles.secondaryButtonText}>
              Ulangi Menghafal
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Ad Banner */}
      <View style={styles.adBanner}>
        <View style={styles.adContent}>
          <Text variant="bold" size="lg" style={styles.adTitle}>
            YOUR AD HERE
          </Text>
          <TouchableOpacity style={styles.adButton} activeOpacity={0.8}>
            <Text variant="bold" size="sm" style={styles.adButtonText}>
              Click Here
            </Text>
            <Ionicons name="arrow-forward-circle" size={20} color="#1A1941" />
          </TouchableOpacity>
        </View>
        <Text variant="regular" size="xs" style={styles.adLabel}>
          Google AdSense
        </Text>
      </View>

    </View>
  );
};
