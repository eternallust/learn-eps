import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../Text";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftComponent,
  rightComponent,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        <View style={styles.leftSection}>{leftComponent}</View>
        <View style={styles.centerSection}>
          <Text variant="bold" size="lg" style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.rightSection}>{rightComponent}</View>
      </View>
    </View>
  );
};
