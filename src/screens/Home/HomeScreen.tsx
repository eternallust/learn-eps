import { Text } from "@components/ui";
import Feather from "@expo/vector-icons/build/Feather";
import { type Href, router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { styles } from "./styles";
const { width: screenWidth } = Dimensions.get("window");

const HomeScreen: React.FC = () => {
  // Reanimated scroll handling
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  // Carousel data


  const materiItems = [
    {
      title: "모의고사",
      subtitle: "CBT Simulation",
      iconColor: "#fdd3d4",
      textColor: "#c41e3a",
      iconName: "monitor" as const,
      iconImage: require("../../assets/images/cbt.png"),
      screen: "simulation",
      buttonLabel: "Mulai",
    },
    {
      title: "어휘",
      subtitle: "Vocabulary",
      iconColor: "#e1e4fe",
      textColor: "#2C3E50",
      iconName: "book-open" as const,
      iconImage: require("../../assets/images/kosakata.png"),
      screen: "vocabulary",
      buttonLabel: "Mulai",
    },
    {
      title: "문법",
      subtitle: "Grammar",
      iconColor: "#c6efe3",
      textColor: "#02ab85",
      iconName: "book-open" as const,
      iconImage: require("../../assets/images/grammar.png"),
      screen: "grammar",
      buttonLabel: "Mulai",
    },

    {
      title: "정보",
      subtitle: "Info EPS TOPIK",
      iconColor: "#c9e3fd",
      textColor: "#0278fd",
      iconName: "info" as const,
      iconImage: require("../../assets/images/info.png"),
      screen: "info",
      buttonLabel: "Panduan",
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Custom Header */}

        <Animated.ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        >
          <View style={[styles.customHeader]}>
            <View style={styles.headerLeft}>
             <Image source={require("../../assets/images/logo.png")} style={
              { height: 38, width: 86}} resizeMode="contain" />
            </View>
            <TouchableOpacity
              style={styles.headerAvatarButton}
              onPress={() => router.push("/login" as Href)}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../assets/images/avatar.jpg")}
                style={styles.headerAvatar}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          {/* Level / Progress Card */}
          <View style={styles.levelCard}>
            <View style={{ flex: 1 }}>
              <View style={styles.levelCardTopRow}>
                <View style={styles.levelBadge}>
                  <Text variant="medium" size="sm" style={styles.levelBadgeText}>
                    Level 2
                  </Text>
                </View>
                <View style={styles.levelCardDot} />
                <Text variant="regular" size="sm" style={styles.levelCardTitle}>
                  EPS Beginner
                </Text>
              </View>
              <View style={styles.levelCardProgressRow}>
                <View style={styles.levelCardProgressBar}>
                  <View style={styles.levelCardProgressFill} />
                </View>
                <Text variant="regular" size="sm" style={styles.levelCardPercent}>
                  60%
                </Text>

              </View>
              <View style={styles.levelCardStreakRow}>
                <Text
                  variant="regular"
                  size="sm"
                  style={styles.levelCardStreakLabel}
                >
                  Streak:
                </Text>
                <Text variant="regular" size="sm" style={styles.levelCardStreakLabel}>
                  🔥
                </Text>
                <Text variant="regular" size="sm" style={styles.levelCardStreakValue}>
                  5 Hari Berturut-turut!
                </Text>
              </View>

            </View>
            <TouchableOpacity
              style={styles.levelCardActionButton}
              onPress={() => null}
              activeOpacity={0.8}
            >
              <Feather name="arrow-up-right" size={32} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Lanjut Belajar - Banner */}

          <Image
            source={require("../../assets/images/banner.png")}
            style={styles.lanjutBelajarBannerImage}
            resizeMode="contain"
          />

          {/* Pilih Materi Belajar */}
          <View style={styles.materiSection}>
            <View style={styles.materiSectionHeader}>
              <Text variant="bold" size="lg" style={styles.materiSectionTitle}>
                Pilih Modul Belajar
              </Text>
              <TouchableOpacity onPress={() => null}>
                <Text variant="medium" size="sm" style={styles.materiLihatSemua}>
                  Lihat Semua
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.materiGrid}>
              {materiItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.materiCard}
                  activeOpacity={0.8}
                  onPress={() => router.push(item.screen as any)}
                >
                  <View style={[styles.materiCardTop, { backgroundColor: item.iconColor }]}>
                    <View
                      style={[
                        styles.materiIconWrap,

                      ]}
                    >


                      <Image
                        source={item.iconImage}
                        style={styles.materiCardIconImage}
                        resizeMode="contain"
                      />

                    </View>

                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.materiCardText}>
                      <Text
                        variant="bold"
                        size="sm"
                        style={[
                          styles.materiCardTitle,
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        variant="regular"
                        size="xs"
                        style={[
                          styles.materiCardSubtitle,
                          { color: item.textColor },
                        ]}
                      >
                        {item.subtitle}
                      </Text>
                    </View>

                  </View>
                  <TouchableOpacity
                    style={styles.startButton}
                    activeOpacity={0.8}
                    onPress={() =>
                      router.push(item.screen.toLowerCase() as any)
                    }
                  >
                    <Text
                      variant="medium"
                      size="md"
                      style={styles.startButtonText}
                    >
                      Mulai ✨
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>

        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
