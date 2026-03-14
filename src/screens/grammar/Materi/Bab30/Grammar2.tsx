import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab30Grammar2Screen() {
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
            <Text variant="bold" size="md" style={styles.tagText}>
              -기 쉽다, 어렵다
            </Text>
          </View>
        </View>

      

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-기 쉽다, 어렵다</Text>
          {"'"} ditempelkan pada kata kerja untuk menyatakan bahwa suatu
          tindakan mudah atau sulit dilakukan.
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
                월세가 싼 집을 <Text style={styles.highlightBlue}>구하기 어려워요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sulit mencari rumah sewa bulanan yang murah.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                <Text style={styles.highlightBlue}>만들기 쉬운</Text> 음식이 뭐예요?
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Makanan apa yang mudah dibuat?
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                한국어로 문자 메시지를{" "}
                <Text style={styles.highlightBlue}>보내기 어려워요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sulit mengirim pesan teks dalam bahasa Korea.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
          <Text variant="regular" size="md" style={styles.noteText}>
            ※ {"'"}
            <Text style={styles.highlightRed}>-기</Text>
            {"'"}는 {"'"}
            <Text style={styles.highlightRed}>-는 것이</Text>
            {"'"}로 바꿀 수 있다.
          </Text>
          <Text variant="regular" size="md" style={styles.noteTextIndo}>
            Bentuk {"'"}
            <Text style={styles.highlightRed}>-기</Text>
            {"'"} juga bisa diganti menjadi {"'"}
            <Text style={styles.highlightRed}>-는 것이</Text>
            {"'"}.
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
                명절에는 기차표를{" "}
                <Text style={styles.highlightBlue}>예매하기 어려워요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saat hari raya, sulit memesan tiket kereta.
              </Text>
            </View>
            <View style={styles.arrowRow}>
              <Text variant="regular" size="md" style={styles.arrowText}>
                → 명절에는 기차표를{" "}
                <Text style={styles.highlightBlue}>예매하는 것이</Text>{" "}
                어려워요.
              </Text>
            </View>
            <Text variant="regular" size="sm" style={styles.translationText}>
              Saat hari raya, memesan tiket kereta itu sulit.
            </Text>
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
    lineHeight: 26,
    marginBottom: 12,
  },
  descriptionIndo: {
    lineHeight: 24,
    marginBottom: 20,
  },
  highlightRed: {
    color: "#D32F2F",
    fontWeight: "700",
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
  },
  exampleContent: {
    padding: 16,
  },
  exampleItem: {
    marginBottom: 12,
  },
  exampleText: {
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
    borderLeftWidth: 3,
    borderLeftColor: "#FF9800",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  noteText: {
    lineHeight: 24,
    marginBottom: 8,
  },
  noteTextIndo: {
    lineHeight: 22,
    fontStyle: "italic",
  },
  arrowRow: {
    marginLeft: 24,
    marginBottom: 4,
  },
  arrowText: {
    lineHeight: 24,
  },
});

