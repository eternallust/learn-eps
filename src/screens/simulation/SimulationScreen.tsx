import { Header, Text } from "@components/ui";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SimulationScreen() {
  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">
        ← Kembali
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Simulasi CBT" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text variant="bold" size="xl" style={styles.title}>
            Simulasi CBT EPS-TOPIK
          </Text>
          <Text variant="regular" size="md" style={styles.subtitle}>
            Latihan simulasi ujian EPS-TOPIK untuk persiapan ujian resmi.
          </Text>

          <TouchableOpacity
            style={styles.quizBox}
            onPress={() => router.push("/simulation/quiz")}
          >
            <Text variant="medium" size="md" style={styles.quizTitle}>
              Simulasi Quiz
            </Text>
            <Text variant="regular" size="sm" style={styles.quizText}>
              Latihan soal pilihan ganda dengan timer dan progress bar. Terdapat
              5 soal dengan berbagai jenis pertanyaan.
            </Text>
          </TouchableOpacity>

          <View style={styles.infoBox}>
            <Text variant="medium" size="md" style={styles.infoTitle}>
              Fitur Lainnya
            </Text>
            <Text variant="regular" size="sm" style={styles.infoText}>
              Fitur simulasi CBT lainnya sedang dalam tahap pengembangan.
              Silakan kembali lagi nanti.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
