import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab4Grammar2Screen() {
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
            <Text variant="bold" size="lg" style={styles.tagText}>
              을/를
            </Text>
          </View>
        </View>

       

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>을/를</Text>
          {"'"} digabungkan dengan kata benda untuk menunjukkan objek kalimat.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">받침 ○</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>을</Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="md">
                밥<Text style={styles.highlightRed}>을</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">받침 ×</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>를</Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="md">
                사과<Text style={styles.highlightRed}>를</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.exampleSection}>
          <View style={styles.exampleLabelContainer}>
            <Text variant="bold" size="sm" style={styles.exampleLabelText}>예</Text>
          </View>
          <View style={styles.exampleContent}>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                왕민 씨는 밥<Text style={styles.highlightRed}>을</Text> 먹어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Wangmin makan nasi.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                자야 씨는 지금 책<Text style={styles.highlightRed}>을</Text> 읽어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Jaya sekarang membaca buku.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                민민아웅 씨는 오늘 영화<Text style={styles.highlightRed}>를</Text> 봐요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Minminaung hari ini menonton film.
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
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellCenter: {
    flex: 0.6,
    padding: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  tableCellLarge: {
    flex: 1,
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
