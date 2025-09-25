import { Header, Text } from "@components/ui";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function GrammarScreen() {
  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">
        ← Kembali
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Grammar" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text variant="bold" size="xl" style={styles.title}>
            Belajar Grammar Korea
          </Text>
          <Text variant="regular" size="md" style={styles.subtitle}>
            Pelajari tata bahasa Korea untuk persiapan EPS-TOPIK.
          </Text>

          <View style={styles.infoBox}>
            <Text variant="medium" size="md" style={styles.infoTitle}>
              Halaman dalam pengembangan
            </Text>
            <Text variant="regular" size="sm" style={styles.infoText}>
              Fitur pembelajaran grammar sedang dalam tahap pengembangan.
              Silakan kembali lagi nanti.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
