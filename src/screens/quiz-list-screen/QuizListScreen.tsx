import { Header, Text } from "@components/ui";
import { Button } from "@components/ui/Button/Button";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const QuizListScreen: React.FC = () => {
  const handleQuizPress = (quizId: string) => {
    console.log(`Quiz ${quizId} pressed!`);
  };

  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">
        ← Kembali
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Quiz EPS-TOPIK" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text variant="bold" size="xl" style={styles.title}>
            Pilih Quiz
          </Text>
          <Text variant="regular" size="md" style={styles.subtitle}>
            Uji kemampuan bahasa Korea Anda dengan berbagai tingkat kesulitan.
          </Text>

          <View style={styles.quizList}>
            <Button
              title="Quiz Dasar (Level 1)"
              onPress={() => handleQuizPress("basic")}
              style={styles.quizButton}
            />
            <Button
              title="Quiz Menengah (Level 2)"
              onPress={() => handleQuizPress("intermediate")}
              style={styles.quizButton}
            />
            <Button
              title="Quiz Lanjutan (Level 3)"
              onPress={() => handleQuizPress("advanced")}
              style={styles.quizButton}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
