import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab34Grammar2Screen() {
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
              -(느)ㄴ다고/다고 하다
            </Text>
          </View>
        </View>

      

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-(느)ㄴ다고/다고 하다</Text>
          {"'"} digunakan pada kata kerja dan kata sifat untuk menyampaikan
          fakta yang didengar dari orang lain.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCellHeaderGroup}>
              <Text variant="medium" size="md">동사</Text>
            </View>
            <View style={styles.tableCellSubGroup}>
              <View
                style={[
                  styles.subRow,
                  { borderBottomWidth: 1, borderBottomColor: "#E0E0E0" },
                ]}
              >
                <View style={styles.subCell}>
                  <Text variant="medium" size="sm">받침 ○</Text>
                </View>
                <View style={styles.subCellCenter}>
                  <Text variant="bold" size="md" style={styles.highlightRed}>
                    -는다고 하다
                  </Text>
                </View>
                <View style={styles.subCellLarge}>
                  <Text variant="regular" size="sm">먹다 → 먹는다고 하다</Text>
                </View>
              </View>
              <View style={styles.subRow}>
                <View style={styles.subCell}>
                  <Text variant="medium" size="sm">받침 ✕, 받침 {"'"}ㄹ{"'"}</Text>
                </View>
                <View style={styles.subCellCenter}>
                  <Text variant="bold" size="md" style={styles.highlightRed}>
                    -ㄴ다고 하다
                  </Text>
                </View>
                <View style={styles.subCellLarge}>
                  <Text variant="regular" size="sm">
                    오다 → 온다고 하다{"\n"}만들다 → 만든다고 하다
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={styles.tableCellHeaderGroup}>
              <Text variant="medium" size="md">형용사</Text>
            </View>
            <View style={styles.tableCellCenterWide}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -다고 하다
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">
                맛있다 → 맛있다고 하다{"\n"}바쁘다 → 바쁘다고 하다
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
         
          <Text variant="regular" size="md" style={styles.noteTextIndo}>
          ※ Jika dipakai dengan kata benda, bentuknya berubah menjadi{" "}
            {"'"}<Text style={styles.highlightRed}>(이)라고 하다</Text>{"'"}.
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
                내일 모두 성희롱 예방 교육을 받아야{" "}
                <Text style={styles.highlightBlue}>한다고 해요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Katanya besok semua harus mengikuti pelatihan pencegahan
                pelecehan seksual.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                출퇴근 시간대는 대중교통을 이용하는 것이{" "}
                <Text style={styles.highlightBlue}>편리하다고 해요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Katanya pada jam berangkat/pulang kerja lebih praktis memakai
                transportasi umum.
              </Text>
            </View>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  가 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  포영 씨가 피곤해 보였어요.
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Poyoung terlihat lelah.
              </Text>
            </View>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  나 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  어제 잠을 못 <Text style={styles.highlightBlue}>잤다고 해요</Text>.
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Katanya tadi malam tidak bisa tidur.
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
  tableCellHeaderGroup: {
    flex: 0.42,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
  },
  tableCellSubGroup: {
    flex: 2.58,
  },
  subRow: {
    flexDirection: "row",
  },
  subCell: {
    flex: 0.8,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  subCellCenter: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  subCellLarge: {
    flex: 1.2,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellCenterWide: {
    flex: 1.8,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  tableCellLarge: {
    flex: 1.2,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
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
  dialogItem: {
    marginBottom: 12,
  },
  dialogRow: {
    flexDirection: "row",
  },
  dialogLabel: {
    width: 32,
    marginLeft: 24,
  },
  dialogText: {
    flex: 1,
    lineHeight: 24,
  },
});

