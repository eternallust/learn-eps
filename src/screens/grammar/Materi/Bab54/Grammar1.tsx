import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab54Grammar1Screen() {
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
              -도록 하다
            </Text>
          </View>
        </View>

 

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-도록 하다</Text>
          {"'"} ditempelkan pada kata kerja untuk menyatakan membuat/menyuruh
          orang lain melakukan sesuatu.
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
                작업을 할 때는 개인 보호구를{" "}
                <Text style={styles.highlightBlue}>착용하도록 하세요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saat bekerja, pastikan memakai alat pelindung diri.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                10일까지 휴가를 <Text style={styles.highlightBlue}>신청하도록 하세요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Minta agar pengajuan cuti dilakukan sampai tanggal 10.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                안전 규칙을 <Text style={styles.highlightBlue}>지키도록 하세요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Pastikan aturan keselamatan dipatuhi.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
        
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
          ※ Untuk menyatakan isi negatif, gunakan bentuk {"'"}<Text style={styles.highlightRed}>-지 않도록 하다</Text>{"'"}.
          </Text>
          <View style={styles.noteExample}>
            <Text variant="regular" size="md" style={styles.exampleText}>
              이곳에는 <Text style={styles.highlightBlue}>들어가지 않도록 하세요</Text>.
            </Text>
            <Text variant="regular" size="sm" style={styles.translationText}>
              Pastikan tidak masuk ke area ini.
            </Text>
            <Text variant="regular" size="md" style={styles.exampleText}>
              출근 시간에 <Text style={styles.highlightBlue}>늦지 않도록 하세요</Text>.
            </Text>
            <Text variant="regular" size="sm" style={styles.translationText}>
              Pastikan tidak terlambat saat jam masuk kerja.
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

