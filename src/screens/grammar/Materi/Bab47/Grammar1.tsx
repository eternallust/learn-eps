import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab47Grammar1Screen() {
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
              -는 동안에
            </Text>
          </View>
        </View>


        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-는 동안에</Text>
          {"'"} ditempelkan pada kata kerja untuk menunjukkan waktu saat tindakan
          lain berlangsung. {"'"}에{"'"} juga bisa dihilangkan.
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
                기계가 <Text style={styles.highlightBlue}>작동하는 동안(에)</Text>{" "}
                소음이 발생할 수 있어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Selama mesin beroperasi, kebisingan bisa terjadi.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                내가 밧줄을 <Text style={styles.highlightBlue}>끌어올리는 동안(에)</Text>{" "}
                다른 어구들을 정리해 주세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Selama saya menarik tali ke atas, tolong rapikan alat-alat yang
                lain.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                그물을 <Text style={styles.highlightBlue}>세척하는 동안(에)</Text>{" "}
                푸껫 씨는 창고에 가서 밧줄 좀 가져오세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Selama mencuci jaring, Pak Phuket tolong ke gudang ambilkan tali.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
          ※ Jika dipakai dengan nomina yang menunjukkan durasi waktu, bentuknya
            menjadi nomina <Text style={styles.highlightRed}> 동안에</Text>.
          </Text>
          <View style={styles.noteExample}>
            <Text variant="regular" size="md" style={styles.exampleText}>
              일주일 <Text style={styles.highlightBlue}>동안</Text> 작업 교육을
              받았어요.
            </Text>
            <Text variant="regular" size="sm" style={styles.translationText}>
              Saya menerima pelatihan kerja selama satu minggu.
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

