import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab38Grammar2Screen() {
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
              -는 중이다
            </Text>
          </View>
        </View>

        <Text variant="regular" size="md" style={styles.descriptionKorean}>
          {"'"}
          <Text style={styles.highlightRed}>-는 중이다</Text>
          {"'"}는 동사에 붙어 어떤 행위가 진행되고 있음을 나타낸다.
        </Text>

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-는 중이다</Text>
          {"'"} ditempelkan pada kata kerja untuk menyatakan bahwa suatu
          tindakan sedang berlangsung.
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
                지금 트럭에 제품을{" "}
                <Text style={styles.highlightBlue}>싣는 중입니다</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Sekarang sedang memuat produk ke truk.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                반장님은 지금 사장님과 이야기를{" "}
                <Text style={styles.highlightBlue}>나누는 중이에요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Ketua tim sekarang sedang berbicara dengan pimpinan.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                도면을 보면서 작업 순서를{" "}
                <Text style={styles.highlightBlue}>확인하는 중이니까</Text>{" "}
                잠시만 기다려 주세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Kami sedang mengecek urutan kerja sambil melihat gambar, jadi
                mohon tunggu sebentar.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
          <Text variant="regular" size="md" style={styles.noteText}>
            ※ 명사와 함께 사용할 때는 {"'"}명사 중이다{"'"}의 구성으로 사용한다.
          </Text>
          <Text variant="regular" size="md" style={styles.noteTextIndo}>
            Jika dipakai dengan nomina, bentuknya menjadi {"'"}nomina 중이다{"'"}.
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
                기계가 <Text style={styles.highlightBlue}>작동 중일</Text> 때는
                전원을 끄지 마세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saat mesin sedang beroperasi, jangan matikan daya.
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
  descriptionIndo: {
    color: "#666",
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
    borderLeftWidth: 3,
    borderLeftColor: "#FF9800",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
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

