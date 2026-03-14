import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab57Grammar1Screen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Text style={styles.bookIcon}>📘</Text>
          </View>
         
          <View style={styles.tag}>
            <Text variant="bold" size="md" style={styles.tagText}>
              -는/(으)ㄴ 줄 알았다, 몰랐다
            </Text>
          </View>
        </View>

 

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-는/(으)ㄴ 줄 알았다</Text>
          {"'"} dipakai saat menyadari bahwa kita mengira situasi berbeda dari
          kenyataan. {"'"}
          <Text style={styles.highlightRed}>-는/(으)ㄴ 줄 몰랐다</Text>
          {"'"} dipakai saat menyadari bahwa kita sebelumnya tidak menyadari
          suatu situasi.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">동사, 있다/없다</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">현재</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="sm" style={styles.highlightRed}>
                -는 줄 알았다, 몰랐다
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">오다 → 오는 줄 알았다, 몰랐다</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">동사, 있다/없다</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">과거 받침 ○</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="sm" style={styles.highlightRed}>
                -은 줄 알았다, 몰랐다
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">먹다 → 먹은 줄 알았다, 몰랐다</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">동사, 있다/없다</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">과거 받침 ✕/ㄹ</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="sm" style={styles.highlightRed}>
                -ㄴ 줄 알았다, 몰랐다
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">
                보다 → 본 줄 알았다, 몰랐다{"\n"}팔다 → 판 줄 알았다, 몰랐다
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">형용사</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">받침 ○</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="sm" style={styles.highlightRed}>
                -은 줄 알았다, 몰랐다
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">작다 → 작은 줄 알았다, 몰랐다</Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">형용사</Text>
            </View>
            <View style={styles.tableCellGroup}>
              <Text variant="medium" size="md">받침 ✕/ㄹ</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="sm" style={styles.highlightRed}>
                -ㄴ 줄 알았다, 몰랐다
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">
                크다 → 큰 줄 알았다, 몰랐다{"\n"}멀다 → 먼 줄 알았다, 몰랐다
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
                택배 일이 서비스업에{" "}
                <Text style={styles.highlightBlue}>포함되는 줄 몰랐어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya tidak tahu kalau pekerjaan pengiriman termasuk sektor jasa.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                칼로 씨가 조선업을{" "}
                <Text style={styles.highlightBlue}>신청한 줄 알았어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya kira Carlo mendaftar ke industri perkapalan.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                한국의 여름이 이렇게{" "}
                <Text style={styles.highlightBlue}>더운 줄 몰랐어요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya tidak tahu kalau musim panas di Korea sepanas ini.
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
  tableCellGroup: {
    flex: 1,
    padding: 8,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellCenter: {
    flex: 1.1,
    padding: 8,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  tableCellLarge: {
    flex: 1.7,
    padding: 8,
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

