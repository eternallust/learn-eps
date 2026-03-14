import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab13Grammar2Screen() {
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
              못
            </Text>
          </View>
        </View>

     

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>못</Text>
          {"'"} diletakkan di depan kata kerja untuk menyatakan bahwa subjek
          tidak bisa melakukan sesuatu karena kurang kemampuan atau alasan lain.
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
                시간이 없어서 친구를 <Text style={styles.highlightBlue}>못</Text> 만나요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Karena tidak ada waktu, saya tidak bisa bertemu teman.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                바빠서 밥을 <Text style={styles.highlightBlue}>못</Text> 먹었어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Karena sibuk, saya tidak bisa makan.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                비가 와서 운동을 <Text style={styles.highlightBlue}>못</Text> 해요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Karena hujan, saya tidak bisa berolahraga.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
          <Text variant="regular" size="md" style={styles.noteText}>
            ※ 명사와 {"'"}-하다{"'"}가 결합된 동사를 부정할 때는 명사와 {"'"}하다{"'"}
            사이에 {"'"}못{"'"}을 쓴다.
          </Text>
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
            Saat menegasikan kata kerja gabungan `kata benda + 하다`, `못`
            diletakkan di antara kata benda dan `하다`.
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
                못 공부해요. (X), 공부를 <Text style={styles.highlightBlue}>못</Text> 해요. (O)
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Bentuk yang benar: `공부를 못 해요`.
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
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#F57C00",
  },
  noteText: {
    
    lineHeight: 24,
    marginBottom: 8,
  },
  noteTextIndo: {
    color: "#666",
    lineHeight: 22,
    fontStyle: "italic",
  },
});

