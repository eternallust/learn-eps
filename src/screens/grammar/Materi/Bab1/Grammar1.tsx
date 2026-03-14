import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Grammar1Screen() {
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
            입니다, 입니까?
          </Text>
        </View>
      </View>
        <Text variant="regular" size="md" style={styles.descriptionEnglish}>
          {"'"}
          <Text style={styles.highlightRed}>입니다</Text>
          {"'"} digabungkan dengan kata benda yang menunjukkan atribut subjek dan
          menjadi predikat kalimat dalam situasi formal, untuk menghormati
          pendengar. {"'"}
          <Text style={styles.highlightRed}>입니까?</Text>
          {"'"} adalah bentuk pertanyaan dari {"'"}
          <Text style={styles.highlightRed}>입니다</Text>
          {"'"} dan digunakan saat bertanya tentang atribut subjek.
        </Text>

     

        <View style={styles.dialogSection}>
          <View style={{paddingHorizontal: 16, paddingVertical: 8, backgroundColor: "#C5D99A", borderTopLeftRadius: 8, borderBottomRightRadius: 8, alignSelf: "flex-start"}}>
            <Text variant="bold" size="sm">예</Text>
          </View>
          <View style={{paddingHorizontal: 16}}>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                (저는) 유수프<Text style={styles.highlightRed}>입니다</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                (Saya) Yusuf.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                왕민<Text style={styles.highlightRed}>입니다</Text>.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                (Saya) Wangmin.
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 16}}>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  가 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  어느 나라 사람<Text style={styles.highlightRed}>입니까?</Text>
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Orang negara mana?
              </Text>
            </View>
            <View style={styles.dialogItem}>
              <View style={styles.dialogRow}>
                <Text variant="medium" size="md" style={styles.dialogLabel}>
                  나 :
                </Text>
                <Text variant="regular" size="md" style={styles.dialogText}>
                  (저는) 라오스 사람<Text style={styles.highlightRed}>입니다</Text>.
                </Text>
              </View>
              <Text variant="regular" size="sm" style={styles.translationText}>
                (Saya) orang Laos.
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
    paddingHorizontal: 20,
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
  mainTitle: {
    color: "#333",
    marginBottom: 16,
  },
  descriptionKorean: {
    color: "#333",
    lineHeight: 26,
    marginBottom: 16,
  },
  descriptionEnglish: {
    lineHeight: 24,
    marginBottom: 20,
  },
  highlight: {
    color: "#1976D2",
    fontWeight: "700",
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
    padding: 16,
    marginBottom: 16,
  },
  exampleLabel: {
    color: "#D32F2F",
    marginBottom: 8,
  },
  exampleItem: {
    marginBottom: 12,
  },
  exampleText: {
   
    marginLeft: 24,
    lineHeight: 24,
  },
  translationText: {
   
    marginLeft: 24,
    marginTop: 2,
   
  },
  dialogSection: {
    gap: 16,
    backgroundColor: "#F5F9E8",
    borderWidth: 1,
    borderColor: "#C5D99A",
    borderRadius: 12,
    marginTop: 8,
  },
  dialogItem: {
    marginBottom: 12,
  },
  dialogRow: {
    flexDirection: "row",
  },
  dialogLabel: {
   
    width: 32,
  },
  dialogText: {
   
    flex: 1,
    lineHeight: 24,
  },
});
