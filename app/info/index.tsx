import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Text, Header } from "@components/ui";
import { router } from "expo-router";

export default function InfoScreen() {
  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">← Kembali</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="EPS Info" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text variant="bold" size="xl" style={styles.title}>Informasi EPS-TOPIK</Text>
          <Text variant="regular" size="md" style={styles.subtitle}>
            Informasi terkini tentang program EPS-TOPIK dan proses pendaftaran.
          </Text>
          
          <View style={styles.infoBox}>
            <Text variant="medium" size="md" style={styles.infoTitle}>Tentang EPS-TOPIK</Text>
            <Text variant="regular" size="sm" style={styles.infoText}>
              EPS-TOPIK (Employment Permit System - Test of Proficiency in Korean) adalah ujian kemampuan bahasa Korea yang diselenggarakan untuk pekerja asing yang ingin bekerja di Korea Selatan melalui program EPS.
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Text variant="medium" size="md" style={styles.infoTitle}>Halaman dalam pengembangan</Text>
            <Text variant="regular" size="sm" style={styles.infoText}>
              Fitur informasi EPS-TOPIK sedang dalam tahap pengembangan. Silakan kembali lagi nanti untuk informasi lebih lengkap.
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