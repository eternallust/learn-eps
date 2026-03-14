import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab50Grammar2Screen() {
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
              간접 인용의 축약형
            </Text>
          </View>
        </View>

      

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          Bentuk tidak langsung {"'"}<Text style={styles.highlightRed}>(느)ㄴ다고/다고 해요</Text>{"'"}, {"'"}<Text style={styles.highlightRed}>(느)냐고/(으)냐고</Text>{"'"}
          <Text style={styles.highlightRed}>해요</Text>{"'"}, {"'"}<Text style={styles.highlightRed}>(으)라고 해요</Text>{"'"}, dan {"'"}<Text style={styles.highlightRed}>(자)고 해요</Text>{"'"} dalam
          percakapan sehari-hari bisa disingkat menjadi {"'"}<Text style={styles.highlightRed}>(느)ㄴ대(요)/대(요)</Text>{"'"}
          {"'"}, {"'"}<Text style={styles.highlightRed}>(으)냬요</Text>{"'"}, {"'"}<Text style={styles.highlightRed}>(으)래요</Text>{"'"}, dan {"'"}<Text style={styles.highlightRed}>(재)요</Text>{"'"}.
        </Text>

        <View style={styles.noteSection}>
      
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
            Bentuk ringkas ini sangat umum dipakai dalam percakapan lisan.
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
                유수프 씨는 구내식당에서 점심을{" "}
                <Text style={styles.highlightBlue}>먹는대요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Yusuf bilang dia makan siang di kantin.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                다라 씨가 주말에 <Text style={styles.highlightBlue}>바쁘냬요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Dara bertanya apakah akhir pekan ini sibuk.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                아증 씨가 작업장을 <Text style={styles.highlightBlue}>청소하래요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Ajung bilang (menyuruh) untuk membersihkan area kerja.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                프엉 씨가 창고에 같이 <Text style={styles.highlightBlue}>가재요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Phuong mengajak pergi ke gudang bersama.
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
    marginBottom: 14,
  },
  highlightBlue: {
    color: "#03A9F4",
    fontWeight: "700",
  },
  highlightRed: {
    color: "#D32F2F",
    fontWeight: "700",
  },
  noteSection: {
    backgroundColor: "#FFF3E0",
    borderWidth: 1,
    borderColor: "#FFCC80",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  noteText: {
    color: "#5D4037",
    lineHeight: 22,
    marginBottom: 6,
  },
  noteTextIndo: {
    color: "#6D4C41",
    lineHeight: 22,
  },
  exampleSection: {
    backgroundColor: "#F5F9E8",
    borderWidth: 1,
    borderColor: "#C5D99A",
    borderRadius: 12,
    overflow: "hidden",
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
});

