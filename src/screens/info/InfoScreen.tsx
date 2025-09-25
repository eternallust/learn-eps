import { Header, Text } from "@components/ui";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function InfoScreen() {
  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">
        ← Kembali
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="EPS Info" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text variant="bold" size="xl" style={styles.title}>
            Informasi EPS-TOPIK
          </Text>
          <Text variant="regular" size="md" style={styles.subtitle}>
            Informasi terkini tentang program EPS-TOPIK dan proses pendaftaran.
          </Text>

          <View style={styles.infoBox}>
            <Text variant="medium" size="md" style={styles.infoTitle}>
              Tentang EPS-TOPIK
            </Text>
            <Text variant="regular" size="sm" style={styles.infoText}>
              EPS-TOPIK (Employment Permit System - Test of Proficiency in
              Korean) adalah ujian kemampuan bahasa Korea yang diselenggarakan
              untuk pekerja asing yang ingin bekerja di Korea Selatan melalui
              program EPS.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text variant="medium" size="md" style={styles.infoTitle}>
              Halaman dalam pengembangan
            </Text>
            <Text variant="regular" size="sm" style={styles.infoText}>
              Fitur informasi EPS-TOPIK sedang dalam tahap pengembangan. Silakan
              kembali lagi nanti untuk informasi lebih lengkap.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
