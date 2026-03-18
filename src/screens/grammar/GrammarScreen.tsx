import { Text } from "@components/ui";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";


import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import Grammar1Screen from "./Materi/Bab1/Grammar1";
import { styles } from "./styles";

export default function GrammarScreen() {
  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">
        ← Kembali
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.customHeader]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={20} color="#1A1941" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text variant="bold" size="xl" style={[styles.headerTitle]}>
              Kosakata
            </Text>
            <Text
              variant="regular"
              size="md"
              style={[styles.headerSubtitle]}
            >
              List Materi Kosakata EPS-TOPIK
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.headerAvatarButton}
          onPress={() => null}
          activeOpacity={0.8}
        >
          <Image
            source={require("../../assets/images/avatar.jpg")}
            style={styles.headerAvatar}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Grammar1Screen />
      </ScrollView>
    </View>
  );
}
