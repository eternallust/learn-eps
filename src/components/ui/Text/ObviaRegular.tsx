import React from "react";
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from "react-native";
import { FONTS, COLORS } from "@constants/theme";

interface ObviaRegularProps extends RNTextProps {
  size?: keyof typeof FONTS.sizes;
}

export const ObviaRegular: React.FC<ObviaRegularProps> = ({
  children,
  style,
  size = "md",
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        { fontSize: FONTS.sizes[size] },
        style
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.family.obvia,
    color: COLORS.text,
  },
});