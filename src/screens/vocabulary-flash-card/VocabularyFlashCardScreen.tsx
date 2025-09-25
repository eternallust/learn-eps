import { COLORS } from "@/constants/theme";
import { Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import React, { memo, useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { SwipeableCardStack } from "react-native-swipeable-card-stack";
import { vocabularies } from "@/data/vocabulary";

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

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width - 40;
const CARD_HEIGHT = height * 0.85;

// Data kosakata untuk flash card - sekarang akan diambil dari parameter

// Komponen kartu yang di-memoize untuk optimasi performa
const VocabularyCard = memo(
  ({
    korean,
    indonesian,
    handleNext,
    currentIndex,
    totalItems,
  }: {
    korean: string;
    indonesian: string;
    handleNext?: () => void;
    currentIndex: number;
    totalItems: number;
  }): React.ReactElement => {
    return (
      <View style={styles.card}>
        {/* Header with bookmark, counter, and speaker */}
        <View style={styles.cardHeader}>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Ionicons name="bookmark-outline" size={24} color="#666" />
          </TouchableOpacity>
          <Text variant="regular" size="sm" style={styles.cardCounter}>
            {currentIndex + 1}/{totalItems}
          </Text>
          <TouchableOpacity style={styles.speakerButton}>
            <Ionicons name="volume-high-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View style={styles.cardMainContent}>
          <Text variant="bold" style={styles.chineseText}>
            {korean}
          </Text>
      
          <Text variant="regular" size="lg" style={styles.englishText}>
            {indonesian}
          </Text>

          {/* Example with icon */}
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

        {/* View detail button */}
        <TouchableOpacity style={styles.viewDetailButton} onPress={handleNext}>
          <Text variant="medium" size="md" style={styles.viewDetailText}>
            View detail
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
);

// Menambahkan displayName untuk komponen yang di-memoize
VocabularyCard.displayName = "VocabularyCard";

const VocabularyFlashCardScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Mendapatkan parameter dari navigasi
  const chapter = parseInt(params.chapter as string) || 0;
  const vocabularyIndex = parseInt(params.vocabularyIndex as string) || 0;
  
  // Mendapatkan data vocabulary berdasarkan parameter
  const vocabularyData = vocabularies[chapter]?.vocabulary[vocabularyIndex] || {
    koreanTitle: "",
    englishTitle: "",
    korean: [],
    indonesian: []
  };
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardStackRef = useRef(null);

  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg" style={{ color: "white" }}>
        ←
      </Text>
    </TouchableOpacity>
  );

  const SettingsButton = () => (
    <TouchableOpacity onPress={() => console.log("Settings pressed")}>
      <Ionicons name="settings-outline" size={24} color="white" />
    </TouchableOpacity>
  );

  // Fungsi untuk menangani perubahan indeks kartu
  const handleSwipe = (newIndex: number) => {
    // Memastikan indeks berada dalam rentang yang valid
    if (newIndex >= 0 && newIndex < vocabularyData.korean.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      // Menggunakan state untuk mengontrol kartu
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < vocabularyData.korean.length - 1) {
      // Menggunakan state untuk mengontrol kartu
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <BackButton />
          </View>
          <View style={styles.headerCenter}>
            <Text variant="bold" size="xl" style={{ color: "white" }}>
              Kosakata
            </Text>
          </View>
          <View style={styles.headerRight}>
            <SettingsButton />
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <SwipeableCardStack
          //   ref={cardStackRef}
          style={styles.cardStack}
          renderCard={(_, index) => (
            <VocabularyCard
              korean={vocabularyData.korean[currentIndex] || ""}
              indonesian={vocabularyData.indonesian[currentIndex] || ""}
              handleNext={handleNext}
              currentIndex={currentIndex}
              totalItems={vocabularyData.korean.length}
            />
          )}
          data={vocabularyData.korean}
          swipes={Array(currentIndex).fill("left")}
          onSwipeEnded={(_, direction) =>
            handleSwipe(currentIndex + (direction === "left" ? 1 : -1))
          }
          allowedPanDirections={[
            currentIndex === 0
              ? "left"
              : currentIndex === vocabularyData.korean.length - 1
              ? "right"
              : "left",
            "right",
          ]}
          allowedSwipeDirections={[
            currentIndex === 0
              ? "left"
              : currentIndex === vocabularyData.korean.length - 1
              ? "right"
              : "left",
            "right",
          ]}
          keyExtractor={(item, index) => `vocab-${index}`}
        />
      </View>

      {/* Navigation buttons container */}
      <View style={styles.navigationContainer}>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[styles.navButton, styles.prevButton]}
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={currentIndex === 0 ? "#ccc" : "white"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, styles.nextButton]}
            onPress={handleNext}
            disabled={currentIndex === vocabularyData.korean.length - 1}
          >
            <Ionicons
              name="chevron-forward"
              size={24}
              color={
                currentIndex === vocabularyData.korean.length - 1 ? "#ccc" : "white"
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F7FF",
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#192a56",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerCenter: {
    flex: 2,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  headerTitle: {
    color: "white",
  },
  prevButton: {
    backgroundColor: "#192a56",
  },
  nextButton: {
    backgroundColor: "#192a56",
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
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    transform: [
      { translateX: -CARD_WIDTH / 2 + 20 },
      { translateY: -CARD_HEIGHT / 2 },
    ],
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
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
    padding: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  bookmarkButton: {
    padding: 4,
  },
  cardCounter: {
    color: "#999",
  },
  speakerButton: {
    padding: 4,
  },
  cardMainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  chineseText: {
    fontSize: 48,
    color: COLORS.primarydark,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  pinyinText: {
    color: "#ff6b6b",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  englishText: {
    color: COLORS.primarydark,
    textAlign: "center",
    marginBottom: 30,
    fontSize: 18,
  },
  exampleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 20,
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
  viewDetailButton: {
    backgroundColor: "#e8e8ff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignSelf: "center",
  },
  viewDetailText: {
    color: "#6366f1",
    textAlign: "center",
  },

  navigationContainer: {
    paddingBottom: height * 0.03,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default VocabularyFlashCardScreen;
