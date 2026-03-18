import { vocabularies } from "@/data/vocabulary";
import { Text } from "@components/ui";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import * as Haptics from "expo-haptics";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import { useSharedValue } from "react-native-reanimated";
import { styles } from "./styles";

// Define screen width
const SCREEN_WIDTH = Dimensions.get("window").width;

type TabType = "kosakata_eps_topik" | "kustom_kosakata";

interface VocabularyChapter {
  chapterName: string;
  koreanChapterName: string;

  vocabulary: {
    koreanTitle: string;
    englishTitle: string;
    korean: string[];
    indonesian: string[];
  }[];
}

export const VocabularyScreen: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("kosakata_eps_topik");
  const [searchQuery, setSearchQuery] = useState("");

  const PAGE_SIZE = 5;
  const [displayedData, setDisplayedData] = useState(vocabularies.slice(0, PAGE_SIZE));
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const hasMore = displayedData.length < vocabularies.length;

  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayedData((prev) =>
        vocabularies.slice(0, prev.length + PAGE_SIZE)
      );
      setIsLoadingMore(false);
    }, 400);
  }, [isLoadingMore, hasMore]);
  const scrollX = useSharedValue(0);
  const pagerRef = useRef<PagerView>(null);

  const tabs: TabType[] = ["kosakata_eps_topik", "kustom_kosakata"];

  const handleTabPress = (tab: TabType) => {
    // Provide haptic feedback when tab is pressed
    if (Platform.OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } else {
      Haptics.selectionAsync();
    }

    const index = tabs.indexOf(tab);
    if (index !== -1 && pagerRef.current) {
      try {
        pagerRef.current.setPage(index);
        setActiveTab(tab);
      } catch (error) {
        console.error("Error setting page:", error);
        // Fallback if setPage fails
        setActiveTab(tab);
      }
    }
  };

  // Handle page change from PagerView
  const handlePageChange = (event: { nativeEvent: { position: number } }) => {
    const { position } = event.nativeEvent;
    if (position >= 0 && position < tabs.length) {
      // Provide haptic feedback when page changes
      if (Platform.OS === "ios") {
        Haptics.selectionAsync();
      }

      setActiveTab(tabs[position]);
      // Update scrollX for animations
      scrollX.value = position * SCREEN_WIDTH;
    }
  };

  // Set initial page after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const index = tabs.indexOf(activeTab);
      if (index !== -1 && pagerRef.current) {
        try {
          pagerRef.current.setPage(index);
        } catch (error) {
          console.error("Error setting initial page:", error);
        }
      }
    }, 200); // Increased delay for better reliability

    return () => clearTimeout(timer);
  }, []);


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View style={styles.container}>
        <View style={[styles.customHeader]}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.7}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={20} color="#1A1941" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text variant="bold" size="xl" style={[styles.headerTitle]}>
                Kosakata
              </Text>
              <Text
                variant="regular"
                size="md"
                style={[styles.headerSubtitle]}
              >
                List Materi Kosakata EPS-TOPIK
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
        {/* Search bar */}

        <View style={styles.searchBar}>
          <View style={styles.searchInputWrap}>

            <TextInput
              style={styles.searchInput}
              placeholder="Cari kosakata..."
              placeholderTextColor="#9A9AB0"
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")} activeOpacity={0.7}>
                <Ionicons name="close-circle" size={18} color="#9A9AB0" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
            <Ionicons name="search" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={displayedData}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{ paddingBottom: 24 }}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            isLoadingMore ? (
              <ActivityIndicator
                size="small"
                color="#5B5FEF"
                style={{ paddingVertical: 16 }}
              />
            ) : null
          }
          ListHeaderComponent={() => (
            <>

              {/* Progress Banner */}

              <View style={styles.bannerShadow}>
                <ImageBackground source={require("../../assets/images/vocabulary-banner-2.png")} contentFit="cover" style={styles.bannerImage}>
                  <View style={styles.bannerContent}>
                    <Text variant="bold" style={styles.bannerTitle}>Progress Belajar</Text>

                    <View style={styles.progressRow}>
                      <View style={styles.progressTrack}>
                        <View style={[styles.progressFill, { width: "48%" }]} />
                      </View>
                      <Text variant="bold" style={styles.progressPercent}>48%</Text>
                    </View>

                    <View style={styles.streakRow}>
                      <Text style={styles.streakText}>🔥 24 Hari Beruntun!</Text>
                    </View>
                  </View>

                </ImageBackground>
              </View>


              {/* <View style={{ backgroundColor: "#192a56", borderRadius: 12, marginHorizontal: 12 }}>
                <Image source={require("../../assets/images/learning-laptop.png")} style={{ width: 90, height: 90, alignSelf: "flex-end", marginTop: 12, borderBottomRightRadius: 12 }} />
              </View> */}
              <View style={styles.materiSectionHeader}>
                <Text variant="bold" size="lg" style={styles.materiSectionTitle}>
                  List Modul Kosakata
                </Text>

              </View>

            </>
          )
          }


          renderItem={({ item: card, index }) => (
            <View style={[
              styles.timelineCard,
            ]}>
              <View style={{ flexDirection: "row", paddingHorizontal: 12, paddingVertical: 20, gap: 8 }}>
                <View style={{ borderRadius: 12, padding: 12, backgroundColor: "#e1e4fe" }}>
                  <Image
                    source={require("../../assets/images/kosakata.png")}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}>
                    <Text size="sm">{`Bab ${index + 1}`}</Text>
                    <Text variant="bold" size="sm" style={{ marginTop: -6 }}>{card.chapterName}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 2 }}>
                    <View style={{ backgroundColor: "#273c75", padding: 4, width: 80, justifyContent: "center", alignItems: "center", borderRadius: 12 }}>
                      <Text size="sm" style={{ color: "white", fontSize: 10 }}>2 daftar</Text>
                    </View>
                    <View style={{ backgroundColor: "#273c75", padding: 4, width: 80, justifyContent: "center", alignItems: "center", borderRadius: 12 }}>
                      <Text size="sm" style={{ color: "white", fontSize: 10 }}>120 kata</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.timelineChevron}>
                  <Ionicons name="chevron-down" size={16} color="#5B5FEF" />
                </View>
              </View>

              <View style={{ borderTopWidth: 1, borderColor: "#EBEBF0", marginHorizontal: 4 }}>
                {card.vocabulary.map((vocab, vocabIndex) => (
                  <TouchableOpacity key={vocabIndex} onPress={() => router.push({
                    pathname: "/vocabulary/vocabulary-flash-card",
                    params: {
                      chapter: index,
                      vocabularyIndex: vocabIndex,
                      chapterName: card.chapterName,
                      koreanChapterName: card.koreanChapterName,
                      vocabularyTitle: vocab.koreanTitle,
                      vocabularyEnglishTitle: vocab.englishTitle
                    }
                  })}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 8, paddingVertical: 12 }}>
                      <View style={{ flex: 1, gap: 2 }}>
                        <Text size="sm">{vocab.koreanTitle}</Text>
                        <Text variant="regular" size="xs" style={{ color: "#6B7280" }}>{vocab.englishTitle}</Text>
                      </View>
                      <View style={styles.timelineChevron}>
                        <Ionicons name="arrow-forward" size={14} color="#5B5FEF" />
                      </View>
                    </View>
                    {vocabIndex < card.vocabulary.length - 1 && (
                      <View style={{ height: 1, backgroundColor: "#F3F4F6", marginHorizontal: 4 }} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>

            </View>
          )}
        />
      </View >
    </GestureHandlerRootView >
  );
};
