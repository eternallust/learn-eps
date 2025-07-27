import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Text, Header } from "@components/ui";
import { router } from "expo-router";

export default function SimulationScreen() {
  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">← Kembali</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Simulasi CBT" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text variant="bold" size="xl" style={styles.title}>Simulasi CBT EPS-TOPIK</Text>
          <Text variant="regular" size="md" style={styles.subtitle}>
            Latihan simulasi ujian EPS-TOPIK untuk persiapan ujian resmi.
          </Text>
          
          <View style={styles.infoBox}>
            <Text variant="medium" size="md" style={styles.infoTitle}>Halaman dalam pengembangan</Text>
            <Text variant="regular" size="sm" style={styles.infoText}>
              Fitur simulasi CBT sedang dalam tahap pengembangan. Silakan kembali lagi nanti.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  title: {
    color: "#333333",
    marginBottom: 8,
  },
  subtitle: {
    color: "#666666",
    marginBottom: 24,
  },
  infoBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  infoTitle: {
    color: "#333333",
    marginBottom: 8,
  },
  infoText: {
    color: "#666666",
    lineHeight: 20,
  },
});