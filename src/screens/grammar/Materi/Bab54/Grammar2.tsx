import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab54Grammar2Screen() {
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
              -기 위해
            </Text>
          </View>
        </View>



        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-기 위해</Text>
          {"'"} ditempelkan pada kata kerja untuk menunjukkan bahwa isi klausa
          sebelumnya adalah tujuan dari isi klausa sesudahnya.
        </Text>

        <View style={styles.exampleSection}>
          <View style={styles.exampleLabelContainer}>
            <Text variant="bold" size="sm" style={styles.exampleLabelText}>
              예
            </Text>
          </View>
          <View style={styles.exampleContent}>
            <View style={styles.exampleRow}>
              <View style={styles.exampleHalf}>
                <Text variant="regular" size="md" style={styles.exampleText}>
                  돈을 <Text style={styles.highlightBlue}>벌기 위해</Text> 한국에
                  가려고 해요.
                </Text>
                <Text variant="regular" size="sm" style={styles.translationText}>
                  Saya berencana pergi ke Korea untuk mencari uang.
                </Text>
              </View>
              <View style={styles.exampleHalf}>
                <Text variant="regular" size="md" style={styles.exampleText}>
                  음식을 <Text style={styles.highlightBlue}>만들기 위해</Text> 장을
                  봤어요.
                </Text>
                <Text variant="regular" size="sm" style={styles.translationText}>
                  Saya berbelanja bahan untuk memasak.
                </Text>
              </View>
            </View>

            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                혼합 작업을 <Text style={styles.highlightBlue}>하기 위해</Text>{" "}
                기계를 켰어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya menyalakan mesin untuk melakukan pekerjaan pencampuran.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
         
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
          ※ Saat dipakai dengan nomina, bentuknya menjadi {"'"}nomina+ <Text style={styles.highlightRed}>을/를</Text>
            <Text style={styles.highlightRed}>위해</Text>{"'"}.
          </Text>
          <View style={styles.noteExampleRow}>
            <View style={styles.exampleHalf}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                부모님의 <Text style={styles.highlightBlue}>건강을 위해</Text>{" "}
                인삼을 사 드렸어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya membelikan ginseng demi kesehatan orang tua.
              </Text>
            </View>
            <View style={styles.exampleHalf}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                아버지는 <Text style={styles.highlightBlue}>가족을 위해</Text>{" "}
                일하십니다.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Ayah bekerja demi keluarga.
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
  exampleRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  exampleHalf: {
    flex: 1,
  },
  exampleItem: {
    marginBottom: 4,
  },
  exampleText: {
    marginLeft: 12,
    lineHeight: 24,
  },
  translationText: {
    color: "#888",
    marginLeft: 12,
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
  noteExampleRow: {
    flexDirection: "row",
    gap: 8,
  },
});

