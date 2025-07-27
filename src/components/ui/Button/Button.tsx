import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "../Text";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      {...props}
    >
      <Text variant="medium" size="md" style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};
