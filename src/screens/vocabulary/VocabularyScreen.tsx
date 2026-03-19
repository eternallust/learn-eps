import { vocabularies } from "@/data/vocabulary";
import { Text } from "@components/ui";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";

// Define screen width
const SCREEN_WIDTH = Dimensions.get("window").width;

// ─── FlatList Header (memo agar tidak berkedip saat state berubah) ───────────

const VocabularyListHeader = React.memo(function VocabularyListHeader() {
  return (
    <>
      <View style={styles.bannerShadow}>
        <ImageBackground
          source={require("../../assets/images/vocabulary-banner-2.png")}
          contentFit="cover"
          style={styles.bannerImage}
        >
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

      <View style={styles.materiSectionHeader}>
        <Text variant="bold" size="lg" style={styles.materiSectionTitle}>
          List Modul Kosakata
        </Text>
      </View>
    </>
  );
});

// ─── Accordion Component ─────────────────────────────────────────────────────

interface VocabExpandedContentProps {
  card: VocabularyChapter;
  chapterIndex: number;
  onPress: (i: number) => void;
}

const VocabExpandedContent: React.FC<VocabExpandedContentProps> = ({
  card,
  onPress,
}) => (
  <View style={accordionStyles.expandedContainer}>
    {card.vocabulary.map((vocab, i) => (
      <TouchableOpacity key={i} onPress={() => onPress(i)} activeOpacity={0.7}>
        <View style={accordionStyles.vocabRow}>
          <View style={accordionStyles.vocabTexts}>
            <Text size="sm">{vocab.koreanTitle}</Text>
            <Text variant="regular" size="xs" style={accordionStyles.vocabSub}>
              {vocab.englishTitle}
            </Text>
          </View>
          <View style={styles.timelineChevron}>
            <Ionicons name="arrow-forward" size={14} color="#5B5FEF" />
          </View>
        </View>
        {i < card.vocabulary.length - 1 && <View style={accordionStyles.divider} />}
      </TouchableOpacity>
    ))}
  </View>
);

interface AccordionChapterCardProps {
  card: VocabularyChapter;
  chapterIndex: number;
}

const AccordionChapterCard: React.FC<AccordionChapterCardProps> = ({ card, chapterIndex }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [measuredH, setMeasuredH] = useState(0);

  const animH = useSharedValue(0);
  const chevronProgress = useSharedValue(0);

  // Saat tinggi konten sudah diukur dan accordion terbuka, update animasi
  useEffect(() => {
    if (isOpen && measuredH > 0) {
      animH.value = measuredH;
    }
  }, [measuredH, isOpen, animH]);

  const toggle = useCallback(() => {
    const opening = !isOpen;
    setIsOpen(opening);
    animH.value = withTiming(opening ? measuredH : 0, { duration: 300 });
    chevronProgress.value = withTiming(opening ? 1 : 0, { duration: 300 });
  }, [isOpen, measuredH, animH, chevronProgress]);

  const bodyStyle = useAnimatedStyle(() => ({
    height: animH.value,
    overflow: "hidden",
  }));

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${interpolate(chevronProgress.value, [0, 1], [0, 180])}deg` }],
  }));

  const totalWords = card.vocabulary.reduce((sum, v) => sum + v.korean.length, 0);

  const handleVocabPress = useCallback(
    (vocabIndex: number) => {
      router.push({
        pathname: "/vocabulary/vocabulary-flash-card",
        params: {
          chapter: chapterIndex,
          vocabularyIndex: vocabIndex,
          chapterName: card.chapterName,
          koreanChapterName: card.koreanChapterName,
          vocabularyTitle: card.vocabulary[vocabIndex]?.koreanTitle,
          vocabularyEnglishTitle: card.vocabulary[vocabIndex]?.englishTitle,
        },
      });
    },
    [router, chapterIndex, card]
  );

  return (
    <View style={styles.timelineCard}>
      {/* Header — tap untuk buka/tutup */}
      <TouchableWithoutFeedback onPress={toggle}>
        <View style={accordionStyles.header}>
          <View style={accordionStyles.iconWrap}>
            <Image
              source={require("../../assets/images/kosakata.png")}
              style={accordionStyles.icon}
            />
          </View>
          <View style={accordionStyles.info}>
            <Text size="sm">{`Bab ${chapterIndex + 1}`}</Text>
            <Text variant="bold" size="sm" style={accordionStyles.chapterName}>
              {card.chapterName}
            </Text>
            <View style={accordionStyles.badges}>
              <View style={accordionStyles.badge}>
                <Text size="sm" style={accordionStyles.badgeText}>{`${card.vocabulary.length} daftar`}</Text>
              </View>
              <View style={accordionStyles.badge}>
                <Text size="sm" style={accordionStyles.badgeText}>{`${totalWords} kata`}</Text>
              </View>
            </View>
          </View>
          <Animated.View style={chevronStyle}>
            <Ionicons name="chevron-down" size={16} color="#5B5FEF" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      {/* View tersembunyi untuk mengukur tinggi konten */}
      <View
        style={accordionStyles.measureView}
        pointerEvents="none"
        onLayout={(e) => setMeasuredH(e.nativeEvent.layout.height)}
      >
        <VocabExpandedContent card={card} chapterIndex={chapterIndex} onPress={handleVocabPress} />
      </View>

      {/* Konten animasi accordion */}
      <Animated.View style={bodyStyle}>
        <VocabExpandedContent card={card} chapterIndex={chapterIndex} onPress={handleVocabPress} />
      </Animated.View>
    </View>
  );
};

const accordionStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 10,
    alignItems: "center",
  },
  iconWrap: {
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#e1e4fe",
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  chapterName: {
    marginTop: -4,
  },
  badges: {
    flexDirection: "row",
    gap: 4,
    marginTop: 4,
  },
  badge: {
    backgroundColor: "#273c75",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
  },
  measureView: {
    position: "absolute",
    opacity: 0,
    left: 0,
    right: 0,
  },
  expandedContainer: {
    borderTopWidth: 1,
    borderColor: "#EBEBF0",
    marginHorizontal: 4,
  },
  vocabRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  vocabTexts: {
    flex: 1,
    gap: 2,
  },
  vocabSub: {
    color: "#6B7280",
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F4F6",
    marginHorizontal: 4,
  },
});

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
          ListHeaderComponent={VocabularyListHeader}
          renderItem={({ item: card, index }) => (
            <AccordionChapterCard card={card} chapterIndex={index} />
          )}
        />
      </View >
    </GestureHandlerRootView >
  );
};
