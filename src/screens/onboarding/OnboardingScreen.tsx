import { STORAGE_KEYS } from "@/constants/storageKeys";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { type Href, useRouter } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import PagerView, {
  type PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";

import { OnboardingSkiaBackdrop } from "./OnboardingSkiaBackdrop";

import { Image } from "expo-image";
import { OnboardingSkiaHeroImage } from "./OnboardingSkiaHeroImage";
import {
  ONBOARDING_BACKDROP_SIZE,
  ONBOARDING_IMAGE_HEIGHT,
  ONBOARDING_IMAGE_WIDTH,
  styles
} from "./styles";

const SLIDES = [
  {
    image: require("../../assets/images/splash/greetings-splash.png"),
    title: "Selamat Datang di EPS Topik Korea 🇰🇷",
    description:
      "Mulai perjalananmu meraih mimpi kerja di Korea dengan persiapan yang tepat.",
  },
  {
    image: require("../../assets/images/splash/cbt-splash.png"),
    title: "Simulasi Ujian Realistis",
    description:
      "Latihan dengan mock exam yang menyerupai ujian EPS TOPIK asli agar kamu lebih siap dan percaya diri.",
  },
  {
    image: require("../../assets/images/splash/kosakata-splash.png"),
    title: "Hafal Kosakata Lebih Mudah",
    description:
      "Pelajari dan ingat kosakata penting dengan metode yang praktis dan efektif.",
  },
  {
    image: require("../../assets/images/splash/ready-splash.png"),
    title: "Sudah Siap? 🚀",
    description:
      "Ayo mulai belajar sekarang dan wujudkan impianmu ke Korea!",
  },
] as const;

function Dots({ page }: { page: number }) {
  return (
    <>
      {SLIDES.map((_, i) => (
        <View key={i} style={[styles.dot, i === page && styles.dotActive]} />
      ))}
    </>
  );
}

export default function OnboardingScreen() {
  const router = useRouter();
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);
  const { setValue } = useLocalStorage<boolean>(
    STORAGE_KEYS.ONBOARDING_COMPLETED,
    false,
  );

  const onPageSelected = useCallback((e: PagerViewOnPageSelectedEvent) => {
    setPage(e.nativeEvent.position);
  }, []);

  const goNext = () => {
    if (page < SLIDES.length - 1) {
      pagerRef.current?.setPage(page + 1);
    }
  };

  const goPrevious = () => {
    if (page > 0) {
      pagerRef.current?.setPage(page - 1);
    }
  };

  const finish = async () => {
    await setValue(true);
    router.replace("/login" as Href);
  };

  const isLast = page === SLIDES.length - 1;

  return (
    <View style={styles.root}>
      <Image source={require("../../assets/images/logo.png")} style={styles.image} contentFit="contain" />
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={onPageSelected}
      >
        {SLIDES.map((item, index) => (
          <View key={index} style={styles.page} collapsable={false}>
            <View style={styles.hero}>
              <View style={styles.blobBackdrop}>
                <OnboardingSkiaBackdrop size={ONBOARDING_BACKDROP_SIZE} />
              </View>
              <View style={styles.imageWrap}>
                <OnboardingSkiaHeroImage
                  source={item.image}
                  width={ONBOARDING_IMAGE_WIDTH}
                  height={ONBOARDING_IMAGE_HEIGHT}
                  isActive={index === page}
                  accessibilityLabel={
                    index === 0
                      ? "Ilustrasi selamat datang, pasangan melambai dengan latar simbol Korea"
                      : index === 1
                        ? "Ilustrasi antarmuka simulasi ujian komputer"
                        : index === 2
                          ? "Ilustrasi belajar kosakata Korea di ponsel"
                          : "Ilustrasi ajakan memulai belajar"
                  }
                />
              </View>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </PagerView>

      <View style={styles.footer}>
        {isLast ? (
          <View style={styles.lastFooter}>
            <View style={styles.dotsRowLast}>
              <Dots page={page} />
            </View>
            <Pressable
              style={({ pressed }) => [
                styles.ctaFull,
                pressed && styles.ctaFullPressed,
              ]}
              onPress={finish}
            >
              <Text style={styles.ctaFullText}>Mulai Sekarang</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.footerBar}>
            <Pressable
              style={styles.footerSide}
              onPress={goPrevious}
              disabled={page === 0}
              accessibilityRole="button"
              accessibilityLabel="Halaman sebelumnya"
              accessibilityState={{ disabled: page === 0 }}
            >
              <Text
                style={[
                  styles.linkText,
                  page === 0 && { opacity: 0.35 },
                ]}
              >
                Sebelumnya
              </Text>
            </Pressable>
            <View style={styles.dotsAbsolute}>
              <Dots page={page} />
            </View>
            <Pressable
              style={[styles.footerSide, styles.footerSideRight]}
              onPress={goNext}
              accessibilityRole="button"
              accessibilityLabel="Halaman berikutnya"
            >
              <Text style={[styles.linkText, styles.linkTextPrimary]}>
                Selanjutnya
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
