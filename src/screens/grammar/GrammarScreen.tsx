import { Text } from "@components/ui";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";


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
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
           
          </View>
          <View style={styles.headerCenter}>
            <Text variant="bold" size="xl" style={{ color: "white" }}>
            Grammar Lesson
            </Text>
          </View>
          <View style={styles.headerRight}>
         
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
  
      </ScrollView>
    </View>
  );
}
