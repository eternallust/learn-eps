import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab58Grammar1Screen() {
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
              뿐만 아니라
            </Text>
          </View>
        </View>


        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>뿐만 아니라</Text>
          {"'"} digabungkan dengan nomina untuk menyatakan bahwa sesuatu tidak
          terbatas pada hal itu saja, tetapi juga mencakup hal lain.
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
                표준근로계약서를 쓸 때 <Text style={styles.highlightBlue}>임금뿐만 아니라</Text>{" "}
                업무내용도 잘 확인해야 돼요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saat menulis kontrak kerja standar, bukan hanya upah tetapi isi
                pekerjaan juga harus dicek dengan baik.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                저는 <Text style={styles.highlightBlue}>농업 분야뿐만 아니라</Text>{" "}
                자동차 부품 공장에서도 일한 적이 있어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya pernah bekerja bukan hanya di bidang pertanian, tetapi juga
                di pabrik suku cadang mobil.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                외국인 근로자는 <Text style={styles.highlightBlue}>제조업뿐만 아니라</Text>{" "}
                건설업, 농.축산업 등 다양한 업종에서 일하고 있어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Pekerja asing bekerja bukan hanya di manufaktur, tetapi juga di
                konstruksi, pertanian, dan peternakan.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
         
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
          ※ Jika dipakai dengan verba/adjektiva, bentuknya menjadi {"'"}
            <Text style={styles.highlightRed}>-(으)ㄹ 뿐만 아니라</Text>{"'"}.
          </Text>
          <View style={styles.noteExample}>
            <Text variant="regular" size="md" style={styles.exampleText}>
              우리 회사 기숙사는 시설이{" "}
              <Text style={styles.highlightBlue}>좋을 뿐만 아니라</Text> 깨끗해요.
            </Text>
            <Text variant="regular" size="sm" style={styles.translationText}>
              Asrama perusahaan kami bukan hanya fasilitasnya bagus, tapi juga
              bersih.
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

