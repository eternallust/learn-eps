import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 32,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F2F2F7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
  },
  name: {
    color: "#000000",
    marginBottom: 4,
  },
  email: {
    color: "#666666",
  },
  actionSection: {
    paddingVertical: 24,
  },
  button: {
    marginBottom: 12,
  },
});
