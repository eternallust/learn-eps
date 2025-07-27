import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface BinderCardProps {
  onPress: () => void;
  showBinderHole?: boolean;
  children: React.ReactNode;
  style?: any;
}

export const BinderCard: React.FC<BinderCardProps> = ({
  onPress,
  showBinderHole = false,
  children,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.featuredCard,
        {
          backgroundColor: "#ffffff",
        },
        style,
      ]}
      activeOpacity={0.8}
    >
      {/* Binder Holes with Rings - Conditional */}
      {showBinderHole && (
        <View style={styles.binderHoles}>
          <View style={styles.binderHole}>
            <View style={styles.binderRing} />
          </View>
          <View style={styles.binderHole}>
            <View style={styles.binderRing} />
          </View>
          <View style={styles.binderHole}>
            <View style={styles.binderRing} />
          </View>
          <View style={styles.binderHole}>
            <View style={styles.binderRing} />
          </View>
        </View>
      )}

      <View style={[styles.moduleContent]}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  featuredCard: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "column",
    marginBottom: 8,
    width: "48%",
    minHeight: 180,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  binderHoles: {
    position: "absolute",
    left: 4,
    top: 0,
    bottom: 0,
    width: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 15,
  },
  binderHole: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#cfe8fc",
    justifyContent: "center",
    alignItems: "center",
  },
  binderRing: {
    position: "absolute",
    left: -7,
    width: 12,
    height: 6,
    borderRadius: 4,
    marginRight: 4,
    backgroundColor: "#cfe8fc",
  },

  moduleContent: {
    alignItems: "flex-start",
  },
  moduleContentNoBinder: {
    paddingTop: 16,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 2,
    textAlign: "left",
  },
  moduleSubtitle: {
    fontSize: 12,
    color: "#a0a0b8",
    marginBottom: 0,
    textAlign: "left",
  },
  startButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  startButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
