import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab18Grammar1Screen() {
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
            <Text variant="bold" size="lg" style={styles.tagText}>
              -는 것
            </Text>
          </View>
        </View>

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-는 것</Text>
          {"'"} ditempelkan pada kata kerja untuk membuatnya berfungsi seperti
          kata benda.
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
                칼로 씨는 음악 <Text style={styles.highlightBlue}>듣는 것</Text>을 좋아해요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Karlo suka mendengarkan musik.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                옷을 <Text style={styles.highlightBlue}>다리는 것</Text>이 너무 어려워요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Menyetrika baju itu sangat sulit.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                저는 한국 음식을 <Text style={styles.highlightBlue}>만드는 것</Text>이 재미있어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Menurut saya membuat makanan Korea itu menyenangkan.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
        
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
          ※  Bentuk {"'"}
            <Text style={styles.highlightRed}>-는 것이</Text>
            {"'"} bisa disingkat menjadi {"'"}
            <Text style={styles.highlightRed}>-는 게</Text>
            {"'"}, {"'"}
            <Text style={styles.highlightRed}>-는 것을</Text>
            {"'"} menjadi {"'"}
            <Text style={styles.highlightRed}>-는 걸</Text>
            {"'"}, dan {"'"}
            <Text style={styles.highlightRed}>-는 것이에요</Text>
            {"'"} menjadi {"'"}
            <Text style={styles.highlightRed}>-는 거예요</Text>
            {"'"}.
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
                저는 친구하고 <Text style={styles.highlightBlue}>여행하는 게</Text> 좋아요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saya suka bepergian bersama teman.
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

