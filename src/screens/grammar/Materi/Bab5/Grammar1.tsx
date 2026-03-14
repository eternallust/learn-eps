import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab5Grammar1Screen() {
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
              에<Text style={styles.tagSubtext}>(시간)</Text>
            </Text>
          </View>
        </View>

    

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>에</Text>
          {"'"} digabungkan dengan kata benda waktu untuk menunjukkan kapan
          sesuatu terjadi.
        </Text>

        <View style={styles.exampleSection}>
          <View style={styles.exampleLabelContainer}>
            <Text variant="bold" size="sm" style={styles.exampleLabelText}>예</Text>
          </View>
          <View style={styles.exampleContent}>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                월요일<Text style={styles.highlightRed}>에</Text> 일해요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Bekerja pada hari Senin.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                금요일<Text style={styles.highlightRed}>에</Text> 영화를 봐요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Menonton film pada hari Jumat.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                주말<Text style={styles.highlightRed}>에</Text> 쉬어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Istirahat pada akhir pekan.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>      
          <Text variant="regular" size="sm" style={styles.noteTextIndo}>
           ※ Tidak digabungkan dengan kata-kata waktu seperti {"'"}kemarin, hari
            ini, besok, sekarang{"'"}, dll.
          </Text>
        </View>

        <View style={styles.wrongExampleSection}>
          <View style={styles.exampleLabelContainer}>
            <Text variant="bold" size="sm" style={styles.exampleLabelText}>예</Text>
          </View>
          <View style={styles.exampleContent}>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.wrongExampleText}>
                오늘<Text style={styles.highlightRed}>에</Text> 영화를 봐요. (✗)
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Salah: menggunakan 에 dengan 오늘
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
  tagSubtext: {
   
    fontSize: 14,
    fontWeight: "400",
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
   
    lineHeight: 22,
    fontStyle: "italic",
  },
  wrongExampleSection: {
    backgroundColor: "#FFEBEE",
    borderWidth: 1,
    borderColor: "#EF9A9A",
    borderRadius: 12,
    overflow: "hidden",
  },
  wrongExampleText: {
    
    marginLeft: 24,
    lineHeight: 24,
  },
});
