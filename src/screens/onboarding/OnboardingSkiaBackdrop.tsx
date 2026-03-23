import {
  Canvas,
  Circle,
  RadialGradient,
  vec,
} from "@shopify/react-native-skia";
import React, { useEffect } from "react";
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type Props = {
  size: number;
};

/**
 * Latar hero onboarding: gradient ungu lembut berdenyut + titik orbit halus (Skia + Reanimated).
 */
export function OnboardingSkiaBackdrop({ size }: Props) {
  const cx = size / 2;
  const cy = size / 2;

  const pulse = useSharedValue(1);
  const orbit = useSharedValue(0);

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1.07, {
        duration: 3400,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }),
      -1,
      true,
    );
    orbit.value = withRepeat(
      withTiming(1, { duration: 20000, easing: Easing.linear }),
      -1,
      false,
    );
  }, [orbit, pulse]);

  const mainR = useDerivedValue(() => size * 0.45 * pulse.value);

  const orbitR = size * 0.38;
  const dotR = Math.max(size * 0.035, 10);

  const dot1Cx = useDerivedValue(
    () => cx + Math.cos(orbit.value * Math.PI * 2) * orbitR,
  );
  const dot1Cy = useDerivedValue(
    () => cy + Math.sin(orbit.value * Math.PI * 2) * orbitR,
  );
  const dot2Cx = useDerivedValue(
    () => cx + Math.cos(orbit.value * Math.PI * 2 + 2.4) * orbitR * 0.72,
  );
  const dot2Cy = useDerivedValue(
    () => cy + Math.sin(orbit.value * Math.PI * 2 + 2.4) * orbitR * 0.72,
  );
  const dot3Cx = useDerivedValue(
    () =>
      cx + Math.cos(-orbit.value * Math.PI * 2 * 1.5 + 0.8) * orbitR * 0.5,
  );
  const dot3Cy = useDerivedValue(
    () =>
      cy + Math.sin(-orbit.value * Math.PI * 2 * 1.5 + 0.8) * orbitR * 0.5,
  );

  const dot3Opacity = useDerivedValue(() => {
    const t = (pulse.value - 1) / 0.07;
    return 0.32 + 0.22 * Math.min(1, Math.max(0, t));
  });

  return (
    <Canvas style={{ width: size, height: size }} pointerEvents="none">
      <Circle cx={cx} cy={cy} r={mainR}>
        <RadialGradient
          c={vec(cx, cy)}
          r={size * 0.55}
          colors={["#EDE8F5", "#EDE8F5", "#EDE8F5"]}
        />
      </Circle>
      <Circle
        cx={dot1Cx}
        cy={dot1Cy}
        r={dotR}
        color="rgba(123,104,238,0.45)"
      />
      <Circle
        cx={dot2Cx}
        cy={dot2Cy}
        r={dotR * 0.75}
        color="rgba(33,116,242,0.28)"
      />
      <Circle
        cx={dot3Cx}
        cy={dot3Cy}
        r={dotR * 0.55}
        color="rgba(123,104,238,0.4)"
        opacity={dot3Opacity}
      />
    </Canvas>
  );
}
