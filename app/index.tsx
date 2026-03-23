import { STORAGE_KEYS } from "@/constants/storageKeys";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

/** Sementara: `true` = onboarding selalu tampil dari root. Set `false` untuk pakai lagi penyimpanan selesai onboarding. */
const TEMP_ALWAYS_SHOW_ONBOARDING = true;

export default function RootIndex() {
  const { value, loading } = useLocalStorage<boolean>(
    STORAGE_KEYS.ONBOARDING_COMPLETED,
    false,
  );

  if (TEMP_ALWAYS_SHOW_ONBOARDING) {
    return <Redirect href="/onboarding" />;
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <ActivityIndicator size="large" color="#2174f2" />
      </View>
    );
  }

  if (!value) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/homescreen" />;
}
