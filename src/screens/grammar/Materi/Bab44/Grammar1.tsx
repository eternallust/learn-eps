import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab44Grammar1Screen() {
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
              -아야겠-/어야겠-
            </Text>
          </View>
        </View>


        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-아야겠-/어야겠-</Text>
          {"'"} ditempelkan pada kata kerja/kata sifat untuk menyatakan dugaan
          berdasarkan pikiran penutur tentang bagaimana situasi seharusnya
          terjadi.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">ㅏ, ㅗ</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -아야겠-
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">파다 → 파야겠어요</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">ㅓ, ㅜ, ㅣ ...</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -어야겠-
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">섞다 → 섞어야겠어요</Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">-하다</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -해야겠-
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">처리하다 → 처리해야겠어요</Text>
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
                작업장에 냄새가 좀 심해서 창문을{" "}
                <Text style={styles.highlightBlue}>열어야겠어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Karena bau di area kerja cukup menyengat, sepertinya harus buka
                jendela.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                유수프 씨, 콘크리트 타설 전에 철근을{" "}
                <Text style={styles.highlightBlue}>결속해야겠어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Yusuf, sepertinya tulangan harus diikat dulu sebelum pengecoran.
              </Text>
            </View>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  가 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  내일 새벽에 출근해야 돼요.
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Besok harus berangkat kerja pagi sekali.
              </Text>
            </View>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  나 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  그래요? 오늘 일찍 <Text style={styles.highlightBlue}>자야겠네요</Text>.
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Oh ya? Berarti hari ini harus tidur lebih awal ya.
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
  tableCell: {
    flex: 0.8,
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

