import { Button } from "@components/ui/Button/Button";
import { Header, Text } from "@components/ui";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const ProfileScreen: React.FC = () => {
  const handleEditProfile = () => {
    console.log("Edit profile pressed!");
  };

  const handleLogout = () => {
    console.log("Logout pressed!");
  };

  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">← Kembali</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Profile" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text variant="bold" size="xl" style={styles.name}>John Doe</Text>
          <Text variant="regular" size="md" style={styles.email}>john.doe@example.com</Text>
        </View>

        <View style={styles.actionSection}>
          <Button
            title="Edit Profile"
            onPress={handleEditProfile}
            style={styles.button}
          />
          <Button
            title="Logout"
            variant="secondary"
            onPress={handleLogout}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
};
