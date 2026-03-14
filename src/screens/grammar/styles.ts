import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F7FF",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  webview: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginBottom: 24,
  },
  title: {
    color: "#333333",
    marginBottom: 8,
  },
  subtitle: {
    color: "#666666",
    marginBottom: 24,
  },
  infoBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  infoTitle: {
    color: "#333333",
    marginBottom: 8,
  },
  infoText: {
    color: "#666666",
    lineHeight: 20,
  },
  headerContainer: {
    backgroundColor: "#192a56",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerCenter: {
    flex: 2,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  headerTitle: {
    color: "white",
  },
});