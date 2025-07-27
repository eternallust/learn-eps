import { COLORS, FONTS } from "@constants/theme";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

interface TextProps extends RNTextProps {
  variant?: "regular" | "medium" | "bold";
  size?: keyof typeof FONTS.sizes;
}

export const Text: React.FC<TextProps> = ({
  children,
  style,
  variant = "regular",
  size = "md",
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          fontFamily: FONTS.family[variant],
          fontSize: FONTS.sizes[size],
          color: COLORS.primarydark,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000000",
  },
});
