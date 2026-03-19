import { COLORS } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,  
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#FFFFFF",
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  contentContainer: {
    paddingVertical: 16,
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
  // Search bar
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
  },
  searchInputWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#1A1941",
    paddingVertical: 0,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#273c75",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    height: 44,
    justifyContent: "center",
  },
  filterText: {
    fontSize: 13,
    fontFamily: "Poppins-Medium",
    color: "white",
  },

  // Progress banner
  bannerShadow: {
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 12,
    marginBottom: 8,
   
  },
  bannerContainer: {
    height: 90,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
  },
  bannerImage: {
    borderRadius: 8 ,
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    height: Dimensions.get("window").height * 0.1
  },
  bannerContent: {
    height: Dimensions.get("window").height * 0.1,
    paddingLeft: 16,
    width: "65%",
    justifyContent: "center",
  },
  bannerTitle: {
    fontSize: 15,
    color: "#0a3d62",
    fontFamily: "Poppins-Bold",
  },
  progressRow: {
    marginVertical: -2,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: "#D9DCF5",
    borderRadius: 99,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#E05C2A",
    borderRadius: 99,
  },
  progressPercent: {
    fontSize: 13,
    color: "#0a3d62",
    fontFamily: "Poppins-Bold",
  },
  streakRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  streakText: {
    fontSize: 12,
    color: "#0a3d62",
    fontFamily: "Poppins-Medium",
  },

  // Timeline layout
  timelineSeparator: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  timelineLine: {
    flex: 1,
    width: 0,
    borderLeftWidth: 2,
    borderStyle: "dashed",
    borderColor: "#C0C8FF",
  },
  timelineCard: {
    marginHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  timelineCardLeft: {
    marginLeft: 12,
    alignSelf: "flex-start",
  },
  timelineCardRight: {
    marginRight: 12,
    alignSelf: "flex-end",
  },
  timelineDot: {
    position: "absolute",
    top: "50%",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#5B5FEF",
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#5B5FEF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  timelineDotRight: {
    right: -17,
  },
  timelineDotLeft: {
    left: -17,
  },
  timelineChevron: {
    alignSelf: "center",
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#ECEEFF",
    alignItems: "center",
    justifyContent: "center",
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
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  settingsIcon: {
    fontSize: 20,
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
  materiSectionHeader: {
    marginHorizontal: 16,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  materiSectionTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#2C3E50",
  },
  materiLihatSemua: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: COLORS.primary,
  },
});
