import { COLORS } from "@/constants/theme";
import { vocabularies } from "@/data/vocabulary";
import { Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { Canvas, Group, RoundedRect } from "@shopify/react-native-skia";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width - 40;
const CARD_HEIGHT = height * 0.55;
const SWIPE_THRESHOLD = width * 0.3;
const STACK_PAD = 20;

const CANVAS_W = CARD_WIDTH + STACK_PAD * 2;
const CANVAS_H = CARD_HEIGHT + STACK_PAD * 2;
const CANVAS_CX = CANVAS_W / 2;
const CANVAS_CY = CANVAS_H / 2;

const VocabularyFlashCardScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const chapter = parseInt(params.chapter as string) || 0;
  const vocabularyIndex = parseInt(params.vocabularyIndex as string) || 0;

  const vocabularyData = vocabularies[chapter]?.vocabulary[vocabularyIndex] || {
    koreanTitle: "",
    englishTitle: "",
    korean: [],
    indonesian: [],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Shared value untuk dicek dari dalam worklet gesture
  const canAdvanceSV = useSharedValue(true);

  const totalCards = vocabularyData.korean.length;

  // Hitung sisa card di belakang card aktif
  const remainingCards = totalCards - currentIndex - 1;
  const isFirst = currentIndex === 0;
  const isLast = remainingCards === 0;

  // Sync ke shared value setiap kali index berubah
  useEffect(() => {
    canAdvanceSV.value = currentIndex < totalCards - 1;
  }, [currentIndex, totalCards, canAdvanceSV]);

  const advance = useCallback(() => {
    translateX.value = 0;
    translateY.value = 0;
    setCurrentIndex((prev) => Math.min(prev + 1, totalCards - 1));
  }, [totalCards, translateX, translateY]);

  const goBack = useCallback(() => {
    translateX.value = 0;
    translateY.value = 0;
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, [translateX, translateY]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      const swipedEnough = Math.abs(event.translationX) > SWIPE_THRESHOLD;

      if (swipedEnough && canAdvanceSV.value) {
        // Arah terbang sesuai arah geseran, tapi tetap maju ke card berikutnya
        const direction = event.translationX > 0 ? 1 : -1;
        translateX.value = withTiming(
          direction * width * 1.5,
          { duration: 350 },
          (finished) => {
            if (finished) runOnJS(advance)();
          }
        );
      } else {
        // Kembali ke posisi semula jika belum cukup jauh atau sudah card terakhir
        translateX.value = withSpring(0, { damping: 20, stiffness: 200 });
        translateY.value = withSpring(0, { damping: 20, stiffness: 200 });
      }
    });

  const animatedCardStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [-width / 2, 0, width / 2],
      [-12, 0, 12],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      Math.abs(translateX.value),
      [0, width * 0.6, width],
      [1, 0.85, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate}deg` },
      ],
    };
  });

  const currentItem = vocabularyData.korean[currentIndex] || "";
  const indonesianTranslation = vocabularyData.indonesian[currentIndex] || "";

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Header */}
      <View style={styles.customHeader}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={20} color="#1A1941" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text variant="bold" size="xl" style={styles.headerTitle}>
              Modul Kosakata EPS TOPIK
            </Text>
            <Text variant="regular" size="md" style={styles.headerSubtitle}>
              {params.vocabularyEnglishTitle}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.headerAvatarButton}
          onPress={() => null}
          activeOpacity={0.8}
        >
          <Image
            source={require("../../assets/images/avatar.jpg")}
            style={styles.headerAvatar}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      {/* Card Area */}
      <View style={styles.cardContainer}>
        <View style={{ width: CANVAS_W, height: CANVAS_H }}>
          {/* Skia Canvas — menggambar tumpukan card di belakang */}
          <Canvas style={StyleSheet.absoluteFill}>
            {/* Card paling belakang: tampil jika masih ada 2+ card tersisa */}
            <Group
              origin={{ x: CANVAS_CX, y: CANVAS_CY }}
              transform={[{ rotate: 0.065 }]}
              opacity={remainingCards >= 2 ? 1 : 0}
            >
              <RoundedRect
                x={STACK_PAD + 8}
                y={STACK_PAD + 22}
                width={CARD_WIDTH - 16}
                height={CARD_HEIGHT}
                r={16}
                color="#B4B9D4"
              />
            </Group>

            {/* Card tengah: tampil jika masih ada 1+ card tersisa */}
            <Group
              origin={{ x: CANVAS_CX, y: CANVAS_CY }}
              transform={[{ rotate: 0.03 }]}
              opacity={remainingCards >= 1 ? 1 : 0}
            >
              <RoundedRect
                x={STACK_PAD + 4}
                y={STACK_PAD + 11}
                width={CARD_WIDTH - 8}
                height={CARD_HEIGHT}
                r={16}
                color="#CDD1E8"
              />
            </Group>
          </Canvas>

          {/* Front Card — bisa di-swipe */}
          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[
                styles.card,
                {
                  position: "absolute",
                  left: STACK_PAD,
                  top: STACK_PAD,
                },
                animatedCardStyle,
              ]}
            >
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="bookmark-outline" size={24} color="#666" />
                </TouchableOpacity>
                <Text variant="regular" size="sm" style={styles.cardCounter}>
                  {currentIndex + 1}/{totalCards}
                </Text>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="volume-high-outline" size={24} color="#666" />
                </TouchableOpacity>
              </View>

              {/* Card Body */}
              <View style={styles.cardMainContent}>
                <Text variant="bold" style={styles.koreanText}>
                  {currentItem}
                </Text>
                <Text
                  variant="regular"
                  size="lg"
                  style={styles.translationText}
                >
                  {indonesianTranslation}
                </Text>
                <View style={styles.exampleContainer}>
                  <Ionicons
                    name="create-outline"
                    size={16}
                    color="#999"
                    style={styles.exampleIcon}
                  />
                  <Text variant="regular" size="sm" style={styles.exampleText}>
                    Contoh penggunaan kata
                  </Text>
                </View>
              </View>

              {/* Footer hint */}
              {isLast ? (
                <View style={styles.swipeHint}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={16}
                    color="#4CAF50"
                  />
                  <Text
                    variant="regular"
                    size="sm"
                    style={[styles.swipeHintText, { color: "#4CAF50" }]}
                  >
                    Card terakhir
                  </Text>
                </View>
              ) : (
                <View style={styles.swipeHint}>
                  <Ionicons
                    name="swap-horizontal-outline"
                    size={16}
                    color="#bbb"
                  />
                  <Text variant="regular" size="sm" style={styles.swipeHintText}>
                    Geser untuk lanjut
                  </Text>
                </View>
              )}
            </Animated.View>
          </GestureDetector>
        </View>

        {/* Progress dots */}
        <View style={styles.progressContainer}>
          {vocabularyData.korean
            .slice(0, Math.min(totalCards, 10))
            .map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.progressDot,
                  idx === currentIndex % 10 && styles.progressDotActive,
                ]}
              />
            ))}
        </View>

        {/* Tombol navigasi */}
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[styles.navBtn, isFirst && styles.navBtnDisabled]}
            onPress={goBack}
            activeOpacity={0.7}
            disabled={isFirst}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color={isFirst ? "#B0B8D4" : COLORS.primarydark}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navBtn,
              styles.navBtnPrimary,
              isLast && styles.navBtnDisabled,
            ]}
            onPress={advance}
            activeOpacity={0.7}
            disabled={isLast}
          >
            <Ionicons
              name="arrow-forward"
              size={20}
              color={isLast ? "#B0B8D4" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F7FF",
  },
  customHeader: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#ECEEFF",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    marginBottom: 2,
  },
  headerSubtitle: {
    marginTop: -8,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: COLORS.primarydark,
  },
  headerAvatarButton: {
    borderRadius: 21,
    backgroundColor: "white",
    padding: 1,
  },
  headerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 10,
    padding: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  iconButton: {
    padding: 4,
  },
  cardCounter: {
    color: "#999",
  },
  cardMainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  koreanText: {
    fontSize: 52,
    color: COLORS.primarydark,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  translationText: {
    color: COLORS.primarydark,
    textAlign: "center",
    marginBottom: 28,
    fontSize: 18,
  },
  exampleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
  },
  exampleIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  exampleText: {
    color: "#666",
    flex: 1,
    lineHeight: 20,
  },
  swipeHint: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingBottom: 4,
  },
  swipeHintText: {
    color: "#bbb",
    fontSize: 12,
  },

  progressContainer: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D0D5E8",
  },
  progressDotActive: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primarydark,
  },

  navigationButtons: {
    flexDirection: "row",
    gap: 16,
  },
  navBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#ECEEFF",
    alignItems: "center",
    justifyContent: "center",
  },
  navBtnPrimary: {
    backgroundColor: COLORS.primarydark,
  },
  navBtnDisabled: {
    opacity: 0.4,
  },
});

export default VocabularyFlashCardScreen;
