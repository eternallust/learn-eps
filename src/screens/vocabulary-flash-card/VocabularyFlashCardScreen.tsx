import { COLORS } from "@/constants/theme";
import { vocabularies } from "@/data/vocabulary";
import { Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
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
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width - 40;
const CARD_HEIGHT = height * 0.55;
const SWIPE_THRESHOLD = width * 0.3;
const STACK_PAD = 20;

const CANVAS_W = CARD_WIDTH + STACK_PAD * 2;

const getKoreanFontSize = (text: string): number => {
  const len = text.length;
  if (len <= 2) return 56;
  if (len <= 4) return 48;
  if (len <= 6) return 40;
  if (len <= 9) return 34;
  return 28;
};

const getTranslationFontSize = (text: string): number => {
  const len = text.length;
  if (len <= 6) return 20;
  if (len <= 12) return 18;
  if (len <= 20) return 16;
  return 14;
};

const ProgressBar: React.FC<{ current: number; total: number; width?: number }> = ({
  current,
  total,
  width = CANVAS_W,
}) => {
  const progress = useSharedValue(current / total);

  useEffect(() => {
    progress.value = withTiming(current / total, { duration: 350 });
  }, [current, total, progress]);

  const barStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <View style={[progressBarStyles.track, { width }]}>
      <Animated.View style={[progressBarStyles.fill, barStyle]} />
    </View>
  );
};

const progressBarStyles = StyleSheet.create({
  track: {
    height: 6,
    backgroundColor: "#DDE0EF",
    borderRadius: 3,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: COLORS.primarydark,
    borderRadius: 3,
  },
});
const CANVAS_H = CARD_HEIGHT + STACK_PAD * 2;
const SCREEN_WIDTH = Dimensions.get("window").width;

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
  const canAdvanceSV = useSharedValue(true);

  // bgProgress (0=tumpuk, 1=maju) dipakai background card — independen dari translateX
  const bgProgress = useSharedValue(0);

  // Opacity konten card (Korean + terjemahan) — dikontrol manual setiap skenario
  const contentOpacity = useSharedValue(1);

  // Opacity masing-masing background card (untuk animasi muncul/hilang)
  const card2Opacity = useSharedValue(vocabularyData.korean.length > 1 ? 1 : 0);
  const card3Opacity = useSharedValue(vocabularyData.korean.length > 2 ? 1 : 0);

  const totalCards = vocabularyData.korean.length;
  const remainingCards = totalCards - currentIndex - 1;
  const isFirst = currentIndex === 0;
  const isLast = remainingCards === 0;

  useEffect(() => {
    canAdvanceSV.value = currentIndex < totalCards - 1;
  }, [currentIndex, totalCards, canAdvanceSV]);

  // Fade-in/out card2 dan card3 berdasarkan sisa card
  useEffect(() => {
    card2Opacity.value = withTiming(remainingCards >= 1 ? 1 : 0, { duration: 250 });
    card3Opacity.value = withTiming(remainingCards >= 2 ? 1 : 0, { duration: 300 });
  }, [remainingCards, card2Opacity, card3Opacity]);

  const advance = useCallback(() => {
    bgProgress.value = withTiming(0, { duration: 220 });
    translateX.value = 0;
    translateY.value = 0;
    setCurrentIndex((prev) => Math.min(prev + 1, totalCards - 1));
    // Konten baru fade-in setelah card tiba di tengah
    contentOpacity.value = withTiming(1, { duration: 250 });
  }, [totalCards, translateX, translateY, bgProgress, contentOpacity]);

  const advanceWithAnimation = useCallback(() => {
    // Fade-out konten bersamaan dengan card geser ke kiri
    contentOpacity.value = withTiming(0, { duration: 200 });
    bgProgress.value = withTiming(1, { duration: 350 });
    translateX.value = withTiming(-width * 1.5, { duration: 350 }, (finished) => {
      if (finished) runOnJS(advance)();
    });
  }, [advance, translateX, bgProgress, contentOpacity]);

  const goBackWithAnimation = useCallback(() => {
    // Sembunyikan konten lama seketika, lalu fade-in konten baru saat card tiba
    contentOpacity.value = withSequence(
      withTiming(0, { duration: 0 }),   // langsung sembunyi
      withTiming(0, { duration: 220 }), // tahan sementara card meluncur masuk
      withTiming(1, { duration: 280 })  // fade-in konten baru
    );
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    translateY.value = 0;
    translateX.value = withSequence(
      withTiming(-width * 1.5, { duration: 0 }),
      withTiming(0, { duration: 480 })
    );
  }, [translateX, translateY, contentOpacity]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
      bgProgress.value = interpolate(
        Math.abs(event.translationX),
        [0, SWIPE_THRESHOLD],
        [0, 1],
        Extrapolation.CLAMP
      );
      // Fade konten seiring card digeser
      contentOpacity.value = interpolate(
        Math.abs(event.translationX),
        [0, SWIPE_THRESHOLD * 0.4, SWIPE_THRESHOLD],
        [1, 0.4, 0],
        Extrapolation.CLAMP
      );
    })
    .onEnd((event) => {
      const swipedEnough = Math.abs(event.translationX) > SWIPE_THRESHOLD;
      if (swipedEnough && canAdvanceSV.value) {
        const direction = event.translationX > 0 ? 1 : -1;
        translateX.value = withTiming(
          direction * width * 1.5,
          { duration: 350 },
          (finished) => {
            if (finished) runOnJS(advance)();
          }
        );
      } else {
        // Spring-back: kembalikan posisi + konten
        translateX.value = withSpring(0, { damping: 20, stiffness: 200 });
        translateY.value = withSpring(0, { damping: 20, stiffness: 200 });
        bgProgress.value = withSpring(0, { damping: 20, stiffness: 200 });
        contentOpacity.value = withTiming(1, { duration: 200 });
      }
    });

  // Front card animation
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

  // Card ke-2: bergerak maju saat swipe, fade berdasarkan remainingCards
  const card2AnimatedStyle = useAnimatedStyle(() => {
    const p = bgProgress.value;
    return {
      opacity: card2Opacity.value,
      transform: [
        { translateX: interpolate(p, [0, 1], [4, 0]) },
        { translateY: interpolate(p, [0, 1], [11, 0]) },
        { rotate: `${interpolate(p, [0, 1], [1.7, 0])}deg` },
      ],
    };
  });

  // Card ke-3: mengikuti posisi awal card ke-2, fade berdasarkan remainingCards
  const card3AnimatedStyle = useAnimatedStyle(() => {
    const p = bgProgress.value;
    return {
      opacity: card3Opacity.value,
      transform: [
        { translateX: interpolate(p, [0, 1], [8, 4]) },
        { translateY: interpolate(p, [0, 1], [22, 11]) },
        { rotate: `${interpolate(p, [0, 1], [3.7, 1.7])}deg` },
      ],
    };
  });

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
  }));

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
      <View style={styles.progressBarContainer}>
        <ProgressBar current={currentIndex + 1} total={totalCards} width={SCREEN_WIDTH - 32} /></View>
      {/* Card Area */}
      <View style={styles.cardContainer}>
        {/* Progress bar */}



        <View style={{ width: CANVAS_W, height: CANVAS_H }}>

          {/* Card ke-3 — paling belakang, warna abu */}
          <Animated.View style={[styles.bgCard, styles.bgCard3, card3AnimatedStyle]}>
            <View style={styles.cardHeader} />
          </Animated.View>
          {/* Card ke-2 — langsung di belakang, warna putih */}
          <Animated.View style={[styles.bgCard, styles.bgCard2, card2AnimatedStyle]} >
            <View style={styles.cardHeader} />
            <View style={styles.cardMainContent} />
            <View style={styles.cardBottom}>
              <View style={{ width: 60, height: 8, backgroundColor: "#b71540", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}></View>
              <View style={{ width: 60, height: 8, backgroundColor: "#0a3d62", borderTopRightRadius: 10, borderBottomRightRadius: 10 }}></View>
            </View>

          </Animated.View>

          {/* Front Card — bisa di-swipe */}
          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[
                styles.card,
                { position: "absolute", left: STACK_PAD, top: STACK_PAD },
                animatedCardStyle,
              ]}
            >
              {/* Card Header */}
              <View style={styles.cardHeader} />


              {/* Card Body */}
              <View style={styles.cardMainContent}>
                <Animated.View style={[styles.cardContentWrapper, contentAnimatedStyle]}>
                  <Text
                    variant="bold"
                    style={[styles.koreanText, { fontSize: getKoreanFontSize(currentItem) }]}
                  >
                    {currentItem}
                  </Text>
                  <Text
                    variant="regular"
                    style={[styles.translationText, { fontSize: getTranslationFontSize(indonesianTranslation) }]}
                  >
                    {indonesianTranslation}
                  </Text>
                </Animated.View>
              </View>

              {/* Footer hint */}

              <View style={styles.cardBottom}>
                <View style={{ width: 60, height: 8, backgroundColor: "#b71540", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}></View>
                <View style={{ width: 60, height: 8, backgroundColor: "#0a3d62", borderTopRightRadius: 10, borderBottomRightRadius: 10 }}></View>
              </View>

            </Animated.View>
          </GestureDetector>
        </View>

        {/* Tombol navigasi */}
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[styles.navBtn, isFirst && styles.navBtnDisabled]}
            onPress={goBackWithAnimation}
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
            onPress={advanceWithAnimation}
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
    </GestureHandlerRootView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  progressBarContainer: {
    marginHorizontal: 12,
  },

  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  // Background cards (tumpukan di belakang)
  bgCard: {
    position: "absolute",
    left: STACK_PAD,
    top: STACK_PAD,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
  bgCard2: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
  bgCard3: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  cardHeader: {
    height: "14%",
    backgroundColor: "#A0522D",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  // Front card
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
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  iconButton: {
    padding: 4,
  },
  cardCounter: {
    color: "#999",
  },
  cardContentWrapper: {
    alignItems: "center",
    width: "100%",
  },
  cardMainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  koreanText: {
    fontSize: 78,
    color: COLORS.primarydark,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  translationText: {
    color: "#306bd4",
    textAlign: "center",
    marginBottom: 28,
    fontSize: 24,
  },
  exampleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    fontFamily: "Poppins-Medium",
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
