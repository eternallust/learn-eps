import { BinderCard, Text } from "@components/ui";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
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
import Carousel from "react-native-reanimated-carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
const { width: screenWidth } = Dimensions.get("window");

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  // Reanimated scroll handling
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  // Carousel data
  const carouselData = [
    {
      id: 1,
      title: "Simulasi Ribuan Soal Latihan EPS-TOPIK",
      subtitle:
        "Latihan soal reading & listening langsung dari HP-mu. Tingkatkan skor dengan cara yang menyenangkan!",
      backgroundColor: ["#667eea", "#764ba2"],
      icon: "📚",
      cta: "👈 Mulai Belajar",
    },
  ];

  const renderCarouselItem = ({ item }: { item: (typeof carouselData)[0] }) => (
    <LinearGradient
      colors={["#005c97", "#363795"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.carouselItem]}
    >
      <View style={styles.carouselContent}>
        <View style={styles.carouselLeftSection}>
          <Text
            variant="bold"
            size="xl"
            style={[styles.carouselTitle, { color: "#ffffff" }]}
          >
            {item.title}
          </Text>
          <Text
            variant="regular"
            size="md"
            style={[styles.carouselSubtitle, { color: "#FFE066" }]}
          >
            {item.subtitle}
          </Text>
          {item.cta && (
            <TouchableOpacity style={styles.carouselCTA}>
              <Text variant="medium" size="md" style={styles.carouselCTAText}>
                {item.cta}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.carouselRightSection}>
          <Image
            source={require("../../assets/images/banner-person-1.png")}
            style={styles.bannerPersonImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </LinearGradient>
  );

  const menuItems = [
    {
      title: "어휘",
      subtitle: "Vocabulary",
      description: "Belajar Kosa Kata Korea",
      icon: "📚",
      gradient: ["#667eea", "#764ba2"],
      screen: "Vocabulary",
      progress: 65,
      image: require("../../assets/images/learn.png"),
    },
    {
      title: "문법",
      subtitle: "Grammar",
      description: "Belajar Kalimat Korea",
      icon: "✏️",
      gradient: ["#f093fb", "#f5576c"],
      screen: "Grammar",
      progress: 40,
      image: require("../../assets/images/munpob.png"),
    },
    {
      title: "모의고사",
      subtitle: "CBT",
      description: "Simulasi CBT EPS TOPIK",
      icon: "🎯",
      gradient: ["#4facfe", "#00f2fe"],
      screen: "Simulation",
      progress: 25,
      image: require("../../assets/images/cbt.png"),
    },
    {
      title: "정보",
      subtitle: "EPS Info",
      description: "Informasi EPS TOPIK",
      icon: "ℹ️",
      gradient: ["#43e97b", "#38f9d7"],
      screen: "Info",
      progress: 100,
      image: require("../../assets/images/congbo.png"),
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
          <View style={[styles.customHeader, { marginTop: insets.top }]}>
            <View style={styles.headerLeft}>
              <View style={styles.titleContainer}>
                <Text variant="bold" size="xl" style={[styles.headerTitle]}>
                  안녕하세요! 👋
                </Text>
                <Text
                  variant="regular"
                  size="md"
                  style={[styles.headerSubtitle]}
                >
                  Mau Belajar Apa Kita Hari Ini?
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => null}
            >
              <Text variant="regular" size="xxl" style={styles.settingsIcon}>
                ⚙️
              </Text>
            </TouchableOpacity>
          </View>
          {/* Featured Carousel */}
          <View style={styles.carouselSection}>
            <Carousel
              loop
              width={screenWidth - 32}
              height={180}
              data={carouselData}
              scrollAnimationDuration={3000}
              renderItem={renderCarouselItem}
              style={styles.carousel}
            />
          </View>

          <View style={styles.modulesSection}>
            <View style={styles.modulesGrid}>
              {menuItems.map((item, index) => (
                <BinderCard
                  key={index}
                  onPress={() => router.push(item.screen.toLowerCase() as any)}
                  showBinderHole={false}
                >
                  <View style={styles.featuredImageContainer}>
                    <Image
                      source={item.image}
                      style={styles.featuredImage}
                      resizeMode="contain"
                    />
                  </View>
                  <Text variant="bold" size="lg" style={[styles.moduleTitle]}>
                    {`${item.title} (${item.subtitle})`}
                  </Text>
                  <Text
                    variant="regular"
                    size="md"
                    style={[styles.moduleSubtitle]}
                  >
                    {item.description}
                  </Text>
                  <TouchableOpacity
                    style={styles.startButton}
                    activeOpacity={0.8}
                    onPress={() => router.push(item.screen.toLowerCase() as any)}
                  >
                    <Text
                      variant="medium"
                      size="md"
                      style={styles.startButtonText}
                    >
                      Mulai ✨
                    </Text>
                  </TouchableOpacity>
                </BinderCard>
              ))}
            </View>
          </View>

          {/* Progress Overview */}

          {/* Learning Modules */}

          {/* History Empty State */}
          <View style={styles.quickActionsSection}>
            <Text variant="bold" size="lg" style={[styles.sectionTitle]}>
              Riwayat Simulasi CBT Kamu
            </Text>
            <BinderCard
              onPress={() => null}
              style={styles.emptyStateBinderCard}
            >
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require("../../assets/images/lottie-empty-state.json")}
                  style={styles.emptyStateImage}
                  autoPlay
                  loop={false}
                />
              </View>
              <Text variant="bold" size="lg" style={[styles.emptyStateTitle]}>
                Kamu Belum Pernah Mengerjakan Simulasi CBT
              </Text>
              <Text
                variant="regular"
                size="md"
                style={[styles.emptyStateSubtitle]}
              >
                Ayo coba latihan simulasi CBT untuk mempersiapkan ujian EPS
                TOPIK kamu!
              </Text>
              <TouchableOpacity
                style={styles.emptyStateButton}
                onPress={() => router.push("simulation" as any)}
              >
                <Text
                  variant="medium"
                  size="md"
                  style={styles.emptyStateButtonText}
                >
                  Mulai Simulasi ✨
                </Text>
              </TouchableOpacity>
            </BinderCard>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text variant="regular" size="md" style={[styles.footerText]}>
              ✨ 화이팅! Keep learning every day! ✨
            </Text>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
