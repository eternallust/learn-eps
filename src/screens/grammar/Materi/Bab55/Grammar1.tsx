import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab55Grammar1Screen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Text style={styles.bookIcon}>📘</Text>
          </View>
          <View style={styles.headerTitleGroup}>
            <Text variant="bold" size="sm">
              Tata Bahasa 1
            </Text>
          </View>
          <View style={styles.tag}>
            <Text variant="bold" size="md" style={styles.tagText}>
              -는/(으)ㄴ 대로
            </Text>
          </View>
        </View>

      

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          Ekspresi {"'"}
          <Text style={styles.highlightRed}>-는/(으)ㄴ 대로</Text>
          {"'"} ditempelkan pada kata kerja dan kata sifat untuk menyatakan
          makna {"'"}sebagaimana adanya{"'"} atau {"'"}sesuai seperti itu{"'"}.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">동사, 있다/없다</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">현재</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>-는 대로</Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">말하다 → 말하는 대로</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">동사, 있다/없다</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">과거 받침 ○</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>-은 대로</Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">읽다 → 읽은 대로</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">동사, 있다/없다</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">과거 받침 ✕/ㄹ</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>-ㄴ 대로</Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">배우다 → 배운 대로</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">형용사</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">받침 ○</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>-은 대로</Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">좁다 → 좁은 대로</Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">형용사</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">받침 ✕/ㄹ</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>-ㄴ 대로</Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">비싸다 → 비싼 대로</Text>
            </View>
          </View>
        </View>

        <View style={styles.exampleSection}>
          <View style={styles.exampleLabelContainer}>
            <Text variant="bold" size="sm" style={styles.exampleLabelText}>예</Text>
          </View>
          <View style={styles.exampleContent}>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                반장님이 <Text style={styles.highlightBlue}>하는 대로</Text> 따라 하세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Ikuti seperti yang dilakukan ketua tim.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                안전 교육 시간에 <Text style={styles.highlightBlue}>배운 대로</Text>{" "}
                보호구를 착용하세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Pakailah APD sesuai yang dipelajari saat pelatihan keselamatan.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                아침 회의 시간에 <Text style={styles.highlightBlue}>들은 대로</Text>{" "}
                오늘은 작업할 계획네요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sesuai yang didengar pada rapat pagi, hari ini ada rencana kerja.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
         
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
          ※ Jika dipakai dengan nomina, bentuknya menjadi {"'"}nomina+ <Text style={styles.highlightRed}>대로</Text>{"'"}.
          </Text>
          <View style={styles.noteExample}>
            <Text variant="regular" size="md" style={styles.exampleText}>
              설명서<Text style={styles.highlightBlue}>대로</Text> 만들었어요.
            </Text>
            <Text variant="regular" size="sm" style={styles.translationText}>
              Saya membuatnya sesuai buku petunjuk.
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
  tableContainer: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  tableCellGroup: {
    flex: 1,
    padding: 8,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellCenter: {
    flex: 0.9,
    padding: 8,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  tableCellLarge: {
    flex: 1.3,
    padding: 8,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
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
    borderWidth: 1,
    borderColor: "#FFCC80",
    borderRadius: 12,
    padding: 12,
  },
  noteText: {
    color: "#5D4037",
    lineHeight: 22,
    marginBottom: 6,
  },
  noteTextIndo: {
    color: "#6D4C41",
    lineHeight: 22,
    marginBottom: 8,
  },
  noteExample: {
    marginTop: 4,
  },
});

