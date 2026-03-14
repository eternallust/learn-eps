import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab20Grammar2Screen() {
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
              -(으)ㄹ래요
            </Text>
          </View>
        </View>

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-(으)ㄹ래요</Text>
          {"'"} ditempelkan pada kata kerja untuk mengungkapkan niat/keinginan.
          Terutama digunakan dalam percakapan informal di antara orang-orang
          yang dekat.
        </Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">받침 ○</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -을래요
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">먹다 → 먹을래요</Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={styles.tableCell}>
              <Text variant="medium" size="md">받침 ✕, 받침 {"'"}ㄹ{"'"}</Text>
            </View>
            <View style={styles.tableCellCenter}>
              <Text variant="bold" size="md" style={styles.highlightRed}>
                -ㄹ래요
              </Text>
            </View>
            <View style={styles.tableCellLarge}>
              <Text variant="regular" size="sm">
                가다 → 갈래요{"\n"}만들다 → 만들래요
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
                저는 책을 <Text style={styles.highlightBlue}>읽을래요</Text>.
                디안 씨는 뭐 <Text style={styles.highlightBlue}>할래요</Text>?
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya mau membaca buku. Dian mau apa?
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                피곤해서 집에{" "}
                <Text style={styles.highlightBlue}>갈래요</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Karena capek, mau pulang ke rumah.
              </Text>
            </View>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  가 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  저녁에 같이 한국 음식을{" "}
                  <Text style={styles.highlightBlue}>만들래요</Text>?
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Mau membuat masakan Korea bersama nanti malam?
              </Text>
            </View>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  나 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  네, 좋아요.
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Ya, boleh.
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
    flex: 1,
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
