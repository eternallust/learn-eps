import {
  Canvas,
  Group,
  Image as SkiaImage,
  processTransform2d,
  useImage,
} from "@shopify/react-native-skia";
import React, { useEffect } from "react";
import { View } from "react-native";
import {
  Easing,
  cancelAnimation,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  source: number;
  width: number;
  height: number;
  /** Saat true, mainkan animasi kemunculan (opacity + scale). */
  isActive: boolean;
  accessibilityLabel?: string;
};

/**
 * Ilustrasi onboarding di Skia + animasi masuk halus saat slide aktif.
 */
export function OnboardingSkiaHeroImage({
  source,
  width,
  height,
  isActive,
  accessibilityLabel,
}: Props) {
  const skImage = useImage(source);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);
  const translateY = useSharedValue(14);

  useEffect(() => {
    if (!isActive) {
      cancelAnimation(opacity);
      cancelAnimation(scale);
      cancelAnimation(translateY);
      opacity.value = 0;
      scale.value = 0.9;
      translateY.value = 14;
      return;
    }

    if (!skImage) {
      return;
    }

    cancelAnimation(opacity);
    cancelAnimation(scale);
    cancelAnimation(translateY);

    opacity.value = 0;
    scale.value = 0.9;
    translateY.value = 14;

    const easing = Easing.out(Easing.cubic);
    opacity.value = withTiming(1, { duration: 520, easing });
    scale.value = withTiming(1, { duration: 560, easing });
    translateY.value = withTiming(0, { duration: 560, easing });
  }, [isActive, skImage, opacity, scale, translateY]);

  const ox = width / 2;
  const oy = height / 2;

  const imageMatrix = useDerivedValue(() => {
    "worklet";
    const ty = translateY.value;
    const s = scale.value;
    return processTransform2d([
      { translateY: ty },
      { translateX: ox },
      { translateY: oy },
      { scale: s },
      { translateX: -ox },
      { translateY: -oy },
    ]);
  });

  return (
    <View
      style={{ width, height }}
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
    >
      <Canvas style={{ width, height }} pointerEvents="none">
        {skImage ? (
          <Group matrix={imageMatrix} opacity={opacity}>
            <SkiaImage
              image={skImage}
              x={0}
              y={0}
              width={width}
              height={height}
              fit="contain"
            />
          </Group>
        ) : null}
      </Canvas>
    </View>
  );
}
