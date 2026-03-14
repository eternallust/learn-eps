import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab7Grammar2Screen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Text style={styles.bookIcon}>📘</Text>
          </View>
          <View style={styles.headerTitleGroup}>
            <Text variant="bold" size="sm">
              Tata Bahasa 2
            </Text>
          </View>
          <View style={styles.tag}>
            <Text variant="bold" size="lg" style={styles.tagText}>
              안
            </Text>
          </View>
        </View>

       

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}안{"'"} diletakkan di depan kata kerja dan kata sifat untuk
          menyatakan negasi sederhana pada tindakan atau keadaan, atau untuk
          menunjukkan bahwa subjek tidak ingin melakukan sesuatu.
        </Text>

        <View style={styles.exampleSection}>
          <View style={styles.exampleLabelContainer}>
            <Text variant="bold" size="sm" style={styles.exampleLabelText}>
              예
            </Text>
          </View>
          <View style={styles.exampleContent}>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                비가 <Text style={styles.highlightBlue}>안</Text> 와요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Hujan tidak turun.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                흐영은 기분이 <Text style={styles.highlightBlue}>안</Text> 좋아요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Heuyoung sedang tidak enak badan.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
          <Text variant="regular" size="md" style={styles.noteText}>
            ※ 명사와 {"'"}-하다{"'"}가 결합된 동사를 부정할 때는 명사와 {"'"}하다{"'"}
            사이에 {"'"}안{"'"}을 쓴다.
          </Text>
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
            Saat menegasikan kata kerja gabungan `kata benda + 하다`, `안`
            diletakkan di antara kata benda dan `하다`.
          </Text>
        </View>

        <View style={styles.exampleSection}>
          <View style={styles.exampleLabelContainer}>
            <Text variant="bold" size="sm" style={styles.exampleLabelText}>
              예
            </Text>
          </View>
          <View style={styles.exampleContent}>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                오늘은 일 <Text style={styles.highlightBlue}>안</Text> 해요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Hari ini tidak bekerja.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                나는 운동 <Text style={styles.highlightBlue}>안</Text> 해요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya tidak berolahraga.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 16,
    gap: 12,
  },
  headerIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#E3F2FD",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  bookIcon: {
    fontSize: 20,
  },
  headerTitleGroup: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
    flex: 1,
  },
  tag: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    color: "#1976D2",
  },
  card: {
    backgroundColor: "#FFF8E7",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1.5,
    borderColor: "#F5A623",
  },
  descriptionKorean: {
    color: "#333",
    lineHeight: 26,
    marginBottom: 12,
  },
  highlightRed: {
    color: "#D32F2F",
    fontWeight: "700",
  },
  descriptionIndo: {
    color: "#666",
    lineHeight: 24,
    marginBottom: 20,
  },
  highlightBlue: {
    color: "#03A9F4",
    fontWeight: "700",
  },
  exampleSection: {
    backgroundColor: "#F5F9E8",
    borderWidth: 1,
    borderColor: "#C5D99A",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  exampleLabelContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#C5D99A",
    alignSelf: "flex-start",
    borderBottomRightRadius: 8,
  },
  exampleLabelText: {
    color: "#333",
  },
  exampleContent: {
    padding: 16,
  },
  exampleItem: {
    marginBottom: 12,
  },
  exampleText: {
    color: "#333",
    marginLeft: 24,
    lineHeight: 24,
  },
  translationText: {
    color: "#888",
    marginLeft: 24,
    marginTop: 2,
    fontStyle: "italic",
  },
  noteSection: {
    backgroundColor: "#FFF3E0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#F57C00",
  },
  noteText: {
    color: "#333",
    lineHeight: 24,
    marginBottom: 8,
  },
  noteTextIndo: {
    color: "#666",
    lineHeight: 22,
    fontStyle: "italic",
  },
});

