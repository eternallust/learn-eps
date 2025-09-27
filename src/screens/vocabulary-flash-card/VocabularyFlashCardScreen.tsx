import { COLORS } from "@/constants/theme";
import { vocabularies } from "@/data/vocabulary";
import { Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Swiper, type SwiperCardRefType } from "rn-swiper-list";

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width - 40;
const CARD_HEIGHT = height * 0.7;

// Data kosakata untuk flash card - sekarang akan diambil dari parameter

// Menambahkan displayName untuk komponen yang di-memoize

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
    indonesian: [],
  };

  // Debug: Log data untuk memastikan ada lebih dari satu item
  console.log("Vocabulary data length:", vocabularyData.korean.length);

  const ref = useRef<SwiperCardRefType>(null);

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

  const renderCard = useCallback(
    (item: string, index: number) => {
      const indonesianTranslation = vocabularyData.indonesian[index] || "";

      return (
        <View style={styles.card}>
          {/* Header with bookmark, counter, and speaker */}
          <View style={styles.cardHeader}>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Ionicons name="bookmark-outline" size={24} color="#666" />
            </TouchableOpacity>
            <Text variant="regular" size="sm" style={styles.cardCounter}>
              {index + 1}/{vocabularyData.korean.length}
            </Text>
            <TouchableOpacity style={styles.speakerButton}>
              <Ionicons name="volume-high-outline" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Main content */}
          <View style={styles.cardMainContent}>
            <Text variant="bold" style={styles.chineseText}>
              {item}
            </Text>

            <Text variant="regular" size="lg" style={styles.englishText}>
              {indonesianTranslation}
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
          <TouchableOpacity style={styles.viewDetailButton}>
            <Text variant="medium" size="md" style={styles.viewDetailText}>
              View detail
            </Text>
          </TouchableOpacity>
        </View>
      );
    },
    [vocabularyData]
  );

  // Fungsi untuk menangani perubahan indeks kartu

  return (
    <GestureHandlerRootView style={styles.container}>
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

      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          data={vocabularyData.korean}
          cardStyle={styles.cardStyle}
          overlayLabelContainerStyle={styles.overlayLabelContainerStyle}
          renderCard={renderCard}
          onIndexChange={(index) => {
            console.log("Current Active index", index);
          }}
          onSwipeRight={(cardIndex) => {
            console.log("Swiped right to next card, cardIndex:", cardIndex);
          }}
          onPress={() => {
            console.log("onPress");
          }}
          onSwipedAll={() => {
            console.log("All cards swiped!");
          }}
          onSwipeLeft={(cardIndex) => {
            console.log(
              "Swiped left to previous card, cardIndex:",
              cardIndex
            );
          }}
          onSwipeTop={(cardIndex) => {
            console.log("onSwipeTop", cardIndex);
          }}
          onSwipeBottom={(cardIndex) => {
            console.log("onSwipeBottom", cardIndex);
          }}
          onSwipeActive={() => {
            console.log("onSwipeActive");
          }}
          onSwipeStart={() => {
            console.log("onSwipeStart");
          }}
          onSwipeEnd={() => {
            console.log("onSwipeEnd");
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardStyle: {
    width: "90%",
    height: "90%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayLabelContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
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
    paddingVertical: height * 0.08,
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
