import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "@components/ui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text variant="bold" size="lg" style={styles.title}>Halaman tidak ditemukan</Text>
        <Text variant="regular" size="md" style={styles.subtitle}>Halaman yang Anda cari tidak ada.</Text>
        <Link href="/" style={styles.link}>
          <Text variant="regular" size="sm" style={styles.linkText}>Kembali ke home</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 8,
    color: "#000000",
  },
  subtitle: {
    color: "#666666",
    textAlign: "center",
    marginBottom: 24,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});
