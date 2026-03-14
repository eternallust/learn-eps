import { Text } from "@components/ui";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Bab40Grammar1Screen() {
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
              -는 대신에
            </Text>
          </View>
        </View>

        <Text variant="regular" size="md" style={styles.descriptionIndo}>
          {"'"}
          <Text style={styles.highlightRed}>-는 대신에</Text>
          {"'"} ditempelkan pada kata kerja untuk menyatakan bahwa tindakan
          sebelumnya tidak dilakukan, lalu diganti dengan tindakan pada bagian
          sesudahnya.
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
                망치를 <Text style={styles.highlightBlue}>두드리는 대신에</Text>{" "}
                드라이버로 조여 보세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Daripada dipukul dengan palu, coba kencangkan dengan obeng.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                오늘 자하라 씨를 못{" "}
                <Text style={styles.highlightBlue}>만나는 대신에</Text> 주말에
                만나기로 했어요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Karena hari ini tidak bisa bertemu Zahara, kami sepakat bertemu
                akhir pekan.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                휴가 때 고향에 <Text style={styles.highlightBlue}>가는 대신에</Text>{" "}
                동료들과 여행을 가려고 합니다.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Saat libur, alih-alih pulang kampung saya berencana pergi
                berwisata dengan rekan kerja.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.noteSection}>
          
          <Text variant="regular" size="md" style={styles.noteTextIndo}>
          ※ Jika dipakai dengan nomina, bentuknya menjadi {"'"} nomina<Text style={styles.highlightRed}> 대신에</Text> {"'"}.
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
                절단 가위 <Text style={styles.highlightBlue}>대신에</Text> 전기
                절단기를 사용해 보세요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Daripada gunting potong, coba gunakan pemotong listrik.
              </Text>
            </View>
            <View style={styles.exampleItem}>
              <Text variant="regular" size="md" style={styles.exampleText}>
                내일은 낮차난 씨 <Text style={styles.highlightBlue}>대신에</Text>{" "}
                자하라 씨가 혼합 작업을 할 거예요.
              </Text>
              <Text variant="regular" size="sm" style={styles.translationText}>
                Besok Zahara yang akan menangani proses pencampuran, menggantikan
                Natchanan.
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
});

