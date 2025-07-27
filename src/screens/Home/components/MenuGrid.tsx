import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@components/ui";
import { FONTS } from "@constants/theme";

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  route: string;
  backgroundColor: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Pelajaran",
    icon: "📚",
    route: "/lesson",
    backgroundColor: "#FF6B6B",
  },
  {
    id: "2",
    title: "Quiz",
    icon: "❓",
    route: "/quiz",
    backgroundColor: "#4ECDC4",
  },
  {
    id: "3",
    title: "Kosakata",
    icon: "📝",
    route: "/vocabulary",
    backgroundColor: "#45B7D1",
  },
  {
    id: "4",
    title: "Profile",
    icon: "👤",
    route: "/profile",
    backgroundColor: "#96CEB4",
  },
];

export const MenuGrid: React.FC = () => {
  const handleMenuPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.container}>
      <Text variant="bold" size="lg" style={styles.sectionTitle}>Menu Pembelajaran</Text>
      <View style={styles.gridContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuItem, { backgroundColor: item.backgroundColor }]}
            onPress={() => handleMenuPress(item.route)}
            activeOpacity={0.8}
          >
            <Text variant="regular" size="xxl" style={styles.menuIcon}>{item.icon}</Text>
            <Text variant="medium" size="md" style={styles.menuTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  sectionTitle: {
    color: "#333333",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    gap: 12,
  },
  menuItem: {
    width: "47%",
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuIcon: {
    marginBottom: 8,
  },
  menuTitle: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
