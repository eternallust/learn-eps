import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

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

  headerCenter: {
    flex: 2,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },

  customHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
   },
   headerLeft: {
     flexDirection: "row",
     alignItems: "center",
     flex: 1,
     gap: 12,
   },
   backButton: {
     width: 36,
     height: 36,
     borderRadius: 12,
     backgroundColor: "#ECEEFF",
     alignItems: "center",
     justifyContent: "center",
   },
   avatarContainer: {
     width: 50,
     height: 50,
     borderRadius: 25,
     backgroundColor: COLORS.primarydark,
     justifyContent: "center",
     alignItems: "center",
     marginRight: 12,
   },
   foxAvatar: {
     fontSize: 24,
   },
   titleContainer: {
     flex: 1,
   },
   headerTitle: {
     fontSize: 18,
     fontFamily: "Poppins-Bold",
     marginBottom: 2,
   },
   headerSubtitle: {
     marginTop: -8,
     fontSize: 12,
     fontFamily: "Poppins-Regular",
     color: COLORS.primarydark,
   },
   headerAvatarButton: {

    borderRadius: 21,
    backgroundColor: "white",
    padding: 1,
  },
  headerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});