import { COLORS, FONTS } from "@constants/theme";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

interface ObviaBoldProps extends RNTextProps {
  size?: keyof typeof FONTS.sizes;
}

export const ObviaBold: React.FC<ObviaBoldProps> = ({
  children,
  style,
  size = "md",
  ...props
}) => {
  return (
    <RNText
      style={[styles.text, { fontSize: FONTS.sizes[size] }, style]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.family.obviaBold,
    color: COLORS.primarydark,
  },
});
