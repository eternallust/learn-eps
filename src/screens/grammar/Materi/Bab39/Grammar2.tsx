import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab39Grammar2Screen() {
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
              -기 전에
            </Text>
          </View>
        </View>

     

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-기 전에</Text>
          {"'"} ditempelkan pada kata kerja untuk menyatakan bahwa tindakan
          pada bagian sesudahnya terjadi lebih dulu daripada tindakan pada
          bagian sebelumnya.
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
                작업을 <Text style={styles.highlightBlue}>시작하기 전에</Text> 먼저
                작업복을 입어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sebelum mulai bekerja, pakai seragam kerja dulu.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                라벨을 <Text style={styles.highlightBlue}>붙이기 전에</Text> 상자를
                밀봉합니다.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sebelum menempel label, kotak disegel dulu.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                상자에 <Text style={styles.highlightBlue}>담기 전에</Text> 제품을
                크기별로 분류하세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sebelum memasukkan ke kotak, pisahkan produk berdasarkan ukuran.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
        
          <Text variant="regular" size="md" style={styles.noteTextIndo}>
          ※ Jika dipakai dengan nomina, bentuknya menjadi {"'"} nomina<Text style={styles.highlightRed}> 전에</Text> {"'"}.
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
                퇴근 <Text style={styles.highlightBlue}>전에</Text> 작업장을 정리합니다.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sebelum pulang kerja, area kerja dirapikan.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                10분 <Text style={styles.highlightBlue}>전에</Text> 출근했어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya masuk kerja 10 menit lebih awal.
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
});

