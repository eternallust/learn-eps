import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab48Grammar2Screen() {
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
              -는/(으)ㄴ 덕분에
            </Text>
          </View>
        </View>

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-는/(으)ㄴ 덕분에</Text>
          {"'"} ditempelkan pada kata kerja untuk menyatakan bahwa isi klausa
          sebelumnya menjadi alasan atau penyebab dari hasil yang positif.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">
                현재
              </Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -는 덕분에
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">잘하다 → 잘하는 덕분에</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">과거 (받침 ○)</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -은 덕분에
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">잡다 → 잡은 덕분에</Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">과거 (받침 ✕, 받침 {"'"}ㄹ{"'"})</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -ㄴ 덕분에
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">
                배우다 → 배운 덕분에{"\n"}만들다 → 만든 덕분에
              </Text>
            </View>
          </View>
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
                한국어를 <Text style={styles.highlightBlue}>잘하는 덕분에</Text> 한국
                생활이 편해요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Berkat kemampuan bahasa Korea yang baik, kehidupan di Korea jadi
                nyaman.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                비계를 튼튼하게 <Text style={styles.highlightBlue}>설치한 덕분에</Text>{" "}
                안전하게 작업할 수 있습니다.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Berkat perancah yang dipasang kokoh, kami bisa bekerja dengan
                aman.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                수평을 잘 <Text style={styles.highlightBlue}>맞춘 덕분에</Text>{" "}
                발판이 튼튼하게 설치되었습니다.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Berkat penyetelan level yang tepat, pijakan terpasang dengan
                kokoh.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
       
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
          ※ Jika digunakan dengan nomina, bentuknya menjadi {"'"}nomina
          <Text style={styles.highlightRed}> 덕분에</Text>{"'"}.
          </Text>
          <View style={styles.noteExample}>
            <Text variant="regular" size="md" style={styles.exampleText}>
              경험이 많은 <Text style={styles.highlightBlue}>작업자들 덕분에</Text>{" "}
              일이 빨리 끝났습니다.
            </Text>
            <Text variant="regular" size="sm" style={styles.translationText}>
              Berkat para pekerja yang berpengalaman, pekerjaan selesai cepat.
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
  tableCell: {
    flex: 1.05,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellCenter: {
    flex: 0.85,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  tableCellLarge: {
    flex: 1.4,
    padding: 12,
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

