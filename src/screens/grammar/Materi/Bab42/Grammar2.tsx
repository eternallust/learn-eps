import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab42Grammar2Screen() {
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
              -느냐고/(으)냐고 하다
            </Text>
          </View>
        </View>


        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-느냐고/(으)냐고 하다</Text>
          {"'"} digunakan pada kata kerja atau kata sifat untuk menyampaikan
          pertanyaan yang diajukan orang lain.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCellHeader}>
              <Text variant="medium" size="md">동사, 있다/없다</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -느냐고 하다
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">먹다 → 먹느냐고 하다</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCellHeaderGroup}>
              <Text variant="medium" size="md">형용사</Text>
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
                    -으냐고 하다
                  </Text>
                </View>
                <View style={styles.subCellLarge}>
                  <Text variant="regular" size="sm">작다 → 작으냐고 하다</Text>
                </View>
              </View>
              <View style={styles.subRow}>
                <View style={styles.subCell}>
                  <Text variant="medium" size="sm">받침 ✕, 받침 {"'"}ㄹ{"'"}</Text>
                </View>
                <View style={styles.subCellCenter}>
                  <Text variant="bold" size="md" style={styles.highlightRed}>
                    -냐고 하다
                  </Text>
                </View>
                <View style={styles.subCellLarge}>
                  <Text variant="regular" size="sm">
                    예쁘다 → 예쁘냐고 하다{"\n"}멀다 → 멀냐고 하다
                  </Text>
                </View>
              </View>
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
                프엉 씨가 지금 어디에{" "}
                <Text style={styles.highlightBlue}>있느냐고 했어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Phuong bertanya sekarang ada di mana.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                아궁 씨가 비니시를 언제{" "}
                <Text style={styles.highlightBlue}>주문하느냐고 물었어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Agung menanyakan kapan akan memesan varnish.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                반장님께서 목재의 먼지를 다{" "}
                <Text style={styles.highlightBlue}>털었느냐고 하셨어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Ketua tim bertanya apakah debu pada kayu sudah dibersihkan
                semua.
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
  tableCellHeader: {
    flex: 1.05,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellCenter: {
    flex: 0.8,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  tableCellLarge: {
    flex: 1.15,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
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
    flex: 0.8,
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

