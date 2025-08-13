import { COLORS } from "@/constants/theme";
import { BinderCard, Header, ObviaBold, Text } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import Animated, { useSharedValue } from "react-native-reanimated";
import { styles } from "./styles";

// Define screen width
const SCREEN_WIDTH = Dimensions.get("window").width;

type TabType = "kosakata_eps_topik" | "kustom_kosakata";

interface Project {
  id: string;
  title: string;
  price: number;
  timeline: number;
  dueDate: string;
  user: {
    name: string;
    avatar: string;
  };
}

export const VocabularyScreen: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("kosakata_eps_topik");
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

  // Sample data for projects by tab
  const projectsByTab: Record<TabType, Project[]> = {
    kosakata_eps_topik: [
      {
        id: "1",
        title:
          "Redesign our Design agency website to more attractive to clients",
        price: 100,
        timeline: 7,
        dueDate: "Sept 12, 2023",
        user: {
          name: "Alexander Arnold",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
      },
      {
        id: "2",
        title: "Create stunning cover book for our marketing agency",
        price: 800,
        timeline: 7,
        dueDate: "Sept 12, 2023",
        user: {
          name: "Bruno Fernand",
          avatar: "https://randomuser.me/api/portraits/men/43.jpg",
        },
      },
      {
        id: "3",
        title: "Create stunning cover book for our marketing agency",
        price: 100,
        timeline: 7,
        dueDate: "Sept 12, 2023",
        user: {
          name: "Simon Cowell",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        },
      },
      {
        id: "4",
        title: "Design mobile app UI for fitness tracking application",
        price: 250,
        timeline: 14,
        dueDate: "Sept 20, 2023",
        user: {
          name: "Jessica Parker",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
      },
      {
        id: "5",
        title: "Create logo design for new tech startup",
        price: 150,
        timeline: 5,
        dueDate: "Sept 15, 2023",
        user: {
          name: "Michael Johnson",
          avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        },
      },
      {
        id: "6",
        title: "Develop branding guidelines for restaurant chain",
        price: 350,
        timeline: 10,
        dueDate: "Sept 25, 2023",
        user: {
          name: "Sarah Williams",
          avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        },
      },
    ],
    kustom_kosakata: [],
  };

  // Projects are accessed directly from projectsByTab[tab]

  const renderProjectItem = ({ item }: { item: Project }) => (
    <View style={styles.projectCard}>
      <View
        style={{
          backgroundColor: COLORS.primarydark,
          width: 8,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <View style={{ flex: 1, padding: 12, gap: 12 }}>
        <View>
          <Text style={{ textAlign: "center" }} variant="bold" size="lg">
            Bab 40
          </Text>
          <Text style={{ textAlign: "center" }} size="lg">
            Plastic and Rubber Molding
          </Text>
        </View>

        <View style={{ flexDirection: "row", flex: 1, gap: 12 }}>
          <View style={{ flex: 1 }}>
            <BinderCard
              style={{ width: "100%", flex: 1 }}
              onPress={() => router.push("/vocabulary/vocabulary-stack")}
              showBinderHole
            >
              <View
                style={{
                  height: "100%",
                  flex: 1,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text variant="bold" size="sm">
                  Kosakata (어휘)
                </Text>
                <View style={{ flex: 1 }}>
                  <ObviaBold style={{ fontSize: 80 }}>1</ObviaBold>
                </View>
                <Text variant="bold" size="sm">
                  혼합 및 측정 관련
                </Text>
                <Text variant="regular" size="sm" style={{ marginTop: -4 }}>
                  Workplace Tools
                </Text>
              </View>
            </BinderCard>
          </View>

          <View style={{ flex: 1 }}>
            <BinderCard
              style={{ width: "100%", flex: 1 }}
              onPress={() => router.push("/vocabulary/vocabulary-stack")}
              showBinderHole
            >
              <View
                style={{
                  height: "100%",
                  flex: 1,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text variant="bold" size="sm">
                  Kosakata (어휘)
                </Text>
                <View style={{ flex: 1 }}>
                  <ObviaBold style={{ fontSize: 80 }}>2</ObviaBold>
                </View>
                <Text variant="bold" size="sm">
                  혼합 및 측정 관련
                </Text>
                <Text variant="regular" size="sm" style={{ marginTop: -4 }}>
                  Workplace Tools
                </Text>
              </View>
            </BinderCard>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header title="Pelajaran" />
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {tabs.map((tab, index) => {
            const isActive = tab === activeTab;

            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tabButton]}
                onPress={() => handleTabPress(tab)}
                activeOpacity={0.5}
                hitSlop={{ top: 20, bottom: 20, left: 15, right: 15 }}
                delayPressIn={0}
                pressRetentionOffset={{
                  top: 20,
                  bottom: 20,
                  left: 15,
                  right: 15,
                }}
              >
                <Animated.View
                  style={[
                    styles.tabButtonInner,
                    {
                      borderBottomColor: isActive ? "#007AFF" : "transparent",
                      transform: [{ scale: isActive ? 1.05 : 1 }],
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      {
                        color: "white",
                        fontWeight: isActive ? "700" : "400",
                        fontSize: 15,
                      },
                    ]}
                  >
                    {tab === "kosakata_eps_topik"
                      ? "Kosakata EPS TOPIK"
                      : "Kustom Kosakata"}
                  </Text>
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Tab Content with PagerView */}
        <PagerView
          ref={pagerRef}
          style={styles.contentContainer}
          initialPage={tabs.indexOf(activeTab)}
          onPageSelected={handlePageChange}
          pageMargin={10}
          offscreenPageLimit={1}
          overdrag={true}
          layoutDirection="ltr"
        >
          {tabs.map((tab) => (
            <View key={tab} style={{ flex: 1 }}>
              {/* Search Input */}
              <View style={styles.searchContainer}>
                <View style={styles.searchInputWrapper}>
                  <Ionicons
                    name="search"
                    size={18}
                    color="#8E8E93"
                    style={{ marginRight: 8 }}
                  />
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Cari nomor bab, nama bab, atau nama kosakata.."
                    placeholderTextColor="#8E8E93"
                  />
                </View>
              </View>

              <Animated.FlatList
                ListEmptyComponent={
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LottieView
                      source={require("@/assets/images/girl-with-books.json")}
                      style={{
                        width: 240,
                        height: 240,
                        marginBottom: 16,
                        alignSelf: "center",
                      }}
                      autoPlay
                      loop={false}
                    />
                  </View>
                }
                data={projectsByTab[tab]}
                renderItem={renderProjectItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.contentContainer}
                removeClippedSubviews={true}
                maxToRenderPerBatch={5}
                windowSize={5}
                initialNumToRender={5}
                contentContainerStyle={{
                  paddingHorizontal: 16,
                  paddingBottom: 20,
                  // Mengisi seluruh tinggi parent ketika tidak ada data
                  flex: projectsByTab[tab].length === 0 ? 1 : undefined,
                }}
              />
            </View>
          ))}
        </PagerView>
      </View>
    </GestureHandlerRootView>
  );
};
