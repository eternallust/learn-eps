import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "@components/ui";
import { FONTS } from "@constants/theme";

interface HistoryItem {
  id: string;
  title: string;
  type: "lesson" | "quiz";
  completedAt: string;
  score?: number;
  progress: number;
}

const historyData: HistoryItem[] = [
  {
    id: "1",
    title: "Pengenalan Huruf Hangeul",
    type: "lesson",
    completedAt: "2 jam lalu",
    progress: 100,
  },
  {
    id: "2",
    title: "Quiz Kosakata Dasar",
    type: "quiz",
    completedAt: "1 hari lalu",
    score: 85,
    progress: 100,
  },
  {
    id: "3",
    title: "Tata Bahasa - Partikel",
    type: "lesson",
    completedAt: "2 hari lalu",
    progress: 60,
  },
  {
    id: "4",
    title: "Percakapan Sehari-hari",
    type: "lesson",
    completedAt: "3 hari lalu",
    progress: 40,
  },
];

export const LearningHistory: React.FC = () => {
  const renderHistoryItem = ({ item }: { item: HistoryItem }) => (
    <TouchableOpacity style={styles.historyItem} activeOpacity={0.7}>
      <View style={styles.itemHeader}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemIcon}>
            {item.type === "lesson" ? "📚" : "❓"}
          </Text>
          <View style={styles.itemDetails}>
            <Text variant="medium" size="md" style={styles.itemTitle}>{item.title}</Text>
            <Text variant="regular" size="sm" style={styles.itemTime}>{item.completedAt}</Text>
          </View>
        </View>
        <View style={styles.itemStatus}>
          {item.score ? (
            <Text variant="bold" size="md" style={styles.scoreText}>{item.score}%</Text>
          ) : (
            <Text variant="bold" size="md" style={styles.progressText}>{item.progress}%</Text>
          )}
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="bold" size="lg" style={styles.sectionTitle}>Riwayat Pembelajaran</Text>
        <TouchableOpacity>
          <Text variant="medium" size="sm" style={styles.viewAllText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={historyData}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#333333",
  },
  viewAllText: {
    color: "#007AFF",
  },
  historyItem: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  itemIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    color: "#333333",
    marginBottom: 4,
  },
  itemTime: {
    color: "#666666",
  },
  itemStatus: {
    alignItems: "flex-end",
  },
  scoreText: {
    color: "#28A745",
  },
  progressText: {
    color: "#007AFF",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E9ECEF",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 2,
  },
});
