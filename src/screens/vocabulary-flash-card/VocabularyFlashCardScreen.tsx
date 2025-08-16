import { COLORS } from "@/constants/theme";
import { Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { memo, useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { SwipeableCardStack } from "react-native-swipeable-card-stack";

// Objek untuk memetakan nama gambar ke path gambar
const imageMap: Record<string, any> = {
  greeting: require("@/assets/images/greeting.svg"),
  thanks: require("@/assets/images/thanks.svg"),
  sorry: require("@/assets/images/sorry.svg"),
  name: require("@/assets/images/name.svg"),
  where: require("@/assets/images/where.svg"),
  price: require("@/assets/images/price.svg"),
  delicious: require("@/assets/images/delicious.svg"),
  like: require("@/assets/images/like.svg"),
  placeholder: require("@/assets/images/placeholder.svg"),
};

const { width } = Dimensions.get("window");

// Data kosakata untuk flash card
const vocabularyData = [
  {
    id: "vocab1",
    korean: "안녕하세요",
    romanization: "annyeonghaseyo",
    indonesian: "Halo/Selamat",
    example: "안녕하세요! 만나서 반갑습니다.",
    image: "greeting", // Nama gambar untuk representasi visual
  },
  {
    id: "vocab2",
    korean: "감사합니다",
    romanization: "gamsahamnida",
    indonesian: "Terima kasih",
    example: "도움 주셔서 감사합니다.",
    image: "thanks", // Nama gambar untuk representasi visual
  },
  {
    id: "vocab3",
    korean: "미안합니다",
    romanization: "mianhamnida",
    indonesian: "Maaf",
    example: "늦어서 미안합니다.",
    image: "sorry", // Nama gambar untuk representasi visual
  },
  {
    id: "vocab4",
    korean: "이름",
    romanization: "ireum",
    indonesian: "Nama",
    example: "제 이름은 김민수입니다.",
    image: "name", // Nama gambar untuk representasi visual
  },
  {
    id: "vocab5",
    korean: "어디",
    romanization: "eodi",
    indonesian: "Dimana",
    example: "화장실이 어디에 있어요?",
    image: "where", // Nama gambar untuk representasi visual
  },
  {
    id: "vocab6",
    korean: "얼마예요",
    romanization: "eolmayeyo",
    indonesian: "Berapa harganya",
    example: "이것은 얼마예요?",
    image: "price", // Nama gambar untuk representasi visual
  },
  {
    id: "vocab7",
    korean: "맛있어요",
    romanization: "masisseoyo",
    indonesian: "Enak/lezat",
    example: "이 음식은 정말 맛있어요.",
    image: "delicious", // Nama gambar untuk representasi visual
  },
  {
    id: "vocab8",
    korean: "좋아요",
    romanization: "joayo",
    indonesian: "Baik/suka",
    example: "한국 음식을 좋아요.",
    image: "like", // Nama gambar untuk representasi visual
  },
];

// Komponen kartu yang di-memoize untuk optimasi performa
const VocabularyCard = memo(
  ({
    item,
    handleNext,
  }: {
    item: (typeof vocabularyData)[0];
    handleNext?: () => void;
  }): React.ReactElement => {
    return (
      <TouchableOpacity
        onPress={handleNext}
        style={styles.card}
        activeOpacity={1}
      >
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            <Text variant="medium" size="sm" style={styles.languageTag}>
              Korean
            </Text>
            <Image
              source={item.image && imageMap[item.image] ? imageMap[item.image] : imageMap.placeholder}
              style={styles.cardImage}
              contentFit="contain"
              transition={200}
            />
          </View>
          <Text variant="bold" size="xl" style={styles.koreanText}>
            {item.korean}
          </Text>
          <Text variant="regular" size="md" style={styles.romanizationText}>
            [{item.romanization}]
          </Text>
          <View style={styles.divider} />
          <Text variant="bold" size="lg" style={styles.indonesianText}>
            {item.indonesian}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

// Menambahkan displayName untuk komponen yang di-memoize
VocabularyCard.displayName = "VocabularyCard";

const VocabularyFlashCardScreen: React.FC = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardStackRef = useRef(null);

  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">
        ← Kembali
      </Text>
    </TouchableOpacity>
  );

  // Fungsi untuk menangani perubahan indeks kartu
  const handleSwipe = (newIndex: number) => {
    // Memastikan indeks berada dalam rentang yang valid
    if (newIndex >= 0 && newIndex < vocabularyData.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      // Menggunakan state untuk mengontrol kartu
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < vocabularyData.length - 1) {
      // Menggunakan state untuk mengontrol kartu
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View // Soft purple to soft blue
      style={styles.container}
    >
      {/* <Header title="Flash Card Kosakata" leftComponent={<BackButton />} /> */}
      <View style={styles.cardContainer}>
        <SwipeableCardStack
          //   ref={cardStackRef}
          style={styles.cardStack}
          renderCard={(item) => (
            <VocabularyCard item={item} handleNext={handleNext} />
          )}
          data={vocabularyData}
          swipes={Array(currentIndex).fill("left")}
          onSwipeEnded={(_, direction) =>
            handleSwipe(currentIndex + (direction === "left" ? 1 : -1))
          }
          allowedPanDirections={[
            currentIndex === 0
              ? "left"
              : currentIndex === vocabularyData.length - 1
              ? "right"
              : "left",
            "right",
          ]}
          allowedSwipeDirections={[
            currentIndex === 0
              ? "left"
              : currentIndex === vocabularyData.length - 1
              ? "right"
              : "left",
            "right",
          ]}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.navigationContainer}>
        {currentIndex > 0 && (
          <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
            <Text variant="medium" size="md" style={styles.navButtonText}>
              Sebelumnya
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.progressIndicator}>
          <Text variant="regular" size="sm">
            {currentIndex + 1} / {vocabularyData.length}
          </Text>
        </View>

        {currentIndex < vocabularyData.length - 1 && (
          <TouchableOpacity style={styles.navButton} onPress={handleNext}>
            <Text variant="medium" size="md" style={styles.navButtonText}>
              Selanjutnya
            </Text>
            <Ionicons name="arrow-forward" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F7FF",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  cardStack: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: width - 40,
    height: 400,
    transform: [{ translateX: -(width - 40) / 2 + 20 }, { translateY: -200 }],
  },
  card: {
    width: width - 40,
    height: 400,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginBottom: 20,
    position: "relative",
  },
  languageTag: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: COLORS.primary,
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  koreanText: {
    fontSize: 36,
    marginBottom: 8,
    color: COLORS.primarydark,
  },
  romanizationText: {
    marginBottom: 20,
    color: COLORS.textSecondary,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 20,
  },
  indonesianText: {
    marginBottom: 12,
    color: COLORS.primary,
  },
  exampleText: {
    textAlign: "center",
    color: COLORS.textSecondary,
    fontStyle: "italic",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  navButtonText: {
    color: COLORS.primary,
    marginHorizontal: 8,
  },
  progressIndicator: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
});

export default VocabularyFlashCardScreen;
