import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "@components/ui";
import { FONTS } from "@constants/theme";
import Carousel from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");

interface BannerData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
}

const bannerData: BannerData[] = [
  {
    id: "1",
    title: "한국어 기초",
    subtitle: "Pelajari dasar-dasar bahasa Korea",
    image: "🇰🇷",
    backgroundColor: "#FF6B6B",
  },
  {
    id: "2",
    title: "문법 연습",
    subtitle: "Latihan tata bahasa Korea",
    image: "📝",
    backgroundColor: "#4ECDC4",
  },
  {
    id: "3",
    title: "어휘 확장",
    subtitle: "Perbanyak kosakata bahasa Korea",
    image: "📚",
    backgroundColor: "#45B7D1",
  },
];

export const BannerCarousel: React.FC = () => {
  const renderBannerItem = ({ item }: { item: BannerData }) => (
    <View
      style={[styles.bannerItem, { backgroundColor: item.backgroundColor }]}
    >
      <View style={styles.bannerContent}>
        <Text style={styles.bannerEmoji}>{item.image}</Text>
        <View style={styles.bannerTextContainer}>
          <Text variant="bold" size="lg" style={styles.bannerTitle}>{item.title}</Text>
          <Text variant="regular" size="sm" style={styles.bannerSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={screenWidth - 32}
        height={120}
        autoPlay={true}
        data={bannerData}
        scrollAnimationDuration={3000}
        renderItem={renderBannerItem}
        style={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
  carousel: {
    borderRadius: 12,
    overflow: "hidden",
  },
  bannerItem: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    marginHorizontal: 2,
  },
  bannerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  bannerEmoji: {
    fontSize: 40,
    marginRight: 16,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: "#FFFFFF",
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: "#FFFFFF",
    opacity: 0.9,
  },
});
