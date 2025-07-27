import { Button } from "@components/ui/Button/Button";
import { Header, Text } from "@components/ui";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const LessonScreen: React.FC = () => {
  const handleLessonPress = (lessonId: string) => {
    console.log(`Lesson ${lessonId} pressed!`);
  };

  const BackButton = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Text variant="regular" size="lg">← Kembali</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Pelajaran" leftComponent={<BackButton />} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text variant="bold" size="xl" style={styles.title}>Materi Pembelajaran</Text>
          <Text variant="regular" size="md" style={styles.subtitle}>
            Pelajari vocabulary dan grammar Korea untuk EPS-TOPIK.
          </Text>

          <View style={styles.lessonList}>
            <Button
              title="Vocabulary Dasar"
              onPress={() => handleLessonPress("vocab-basic")}
              style={styles.lessonButton}
            />
            <Button
              title="Grammar Dasar"
              onPress={() => handleLessonPress("grammar-basic")}
              style={styles.lessonButton}
            />
            <Button
              title="Percakapan Sehari-hari"
              onPress={() => handleLessonPress("conversation")}
              style={styles.lessonButton}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
