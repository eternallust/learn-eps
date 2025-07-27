import { COLORS } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  iconButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#33386A",
    paddingHorizontal: 16,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 2, // Kurangi margin untuk memisahkan tab dengan tepat
    alignItems: "center",
    paddingBottom: 0,
    minHeight: 48, // Tingkatkan tinggi minimum untuk area sentuh yang lebih besar
    justifyContent: "center", // Tambahkan justifyContent untuk perataan vertikal
  },
  tabButtonInner: {
    width: "100%",
    paddingVertical: 12, // Tingkatkan padding untuk area sentuh yang lebih besar
    paddingHorizontal: 8,
    alignItems: "center",
    borderBottomWidth: 3, // Perbesar ketebalan border untuk visibilitas yang lebih baik
    borderBottomColor: "transparent",
  },
  activeTabButton: {
    borderBottomColor: "#007AFF",
  },
  tabText: {
    color: "#666666",
    fontSize: 13,
  },
  activeTabText: {
    color: "#007AFF", // Kembali ke warna biru untuk tab aktif
    fontWeight: "bold",
    fontSize: 15, // Ukuran font sedikit lebih besar untuk tab aktif
  },
  tabCount: {
    fontSize: 12,
    color: "#888",
  },
  activeTabCount: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  pageContainer: {
    width: Dimensions.get("window").width - 32, // Mengurangi lebar dengan paddingHorizontal total (16*2)
    paddingHorizontal: 16,
    paddingTop: 12,
    alignSelf: "center", // Memastikan konten berada di tengah
  },
  featuredImageContainer: {
    width: "80%",
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  featuredImage: {
    borderRadius: 16,
    width: "100%",
    height: 100,
    alignSelf: "center",
  },
  moduleTitle: {
    marginTop: -4,
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    color: COLORS.primarydark,
    marginBottom: 2,
    textAlign: "left",
  },
  moduleSubtitle: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#a0a0b8",
    marginBottom: 0,
    textAlign: "left",
  },
  startButton: {
    backgroundColor: COLORS.primarydark,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
    shadowColor: "#005c97",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  startButtonText: {
    fontSize: 10,
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
  },
  projectCard: {
    flexDirection: "row",
    backgroundColor: "#F0F7FF",
    borderRadius: 16,
    marginBottom: 16,
    width: "100%",
    alignSelf: "center",
  },
  profileHeader: {
    padding: 12,
    flexDirection: "row",
    width: "100%",
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileBio: {
    color: "#666666",
    fontSize: 14,
    lineHeight: 20,
  },
  reviewCount: {
    color: "#666666",
    fontSize: 14,
    fontWeight: "500",
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  languageSection: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  languageLabel: {
    color: "#999999",
    fontSize: 14,
    marginRight: 8,
  },
  flagIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  // Keeping these styles for backward compatibility
  projectContent: {
    display: "none",
  },
  projectTitle: {
    display: "none",
  },
  projectPrice: {
    display: "none",
  },
  projectFooter: {
    display: "none",
  },
  userInfo: {
    display: "none",
  },
  avatar: {
    display: "none",
  },
  userName: {
    display: "none",
  },
  timelineInfo: {
    display: "none",
  },
  timelineText: {
    display: "none",
  },
  dueDate: {
    display: "none",
  },
});
