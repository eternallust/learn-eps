import {
  Canvas,
  Circle,
  Group,
  Image as SkiaImage,
  RadialGradient,
  Skia,
  vec,
  useImage,
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { View } from "react-native";

import { LOGIN_HERO_SIZE, styles } from "./styles";

type Props = {
  accessibilityLabel?: string;
};

/**
 * Hero login: lingkaran ter-clip di Skia, gradien lavender, + ilustrasi `login.png`.
 */
export function LoginSkiaHero({
  accessibilityLabel = "Ilustrasi selamat datang Seori",
}: Props) {
  const size = LOGIN_HERO_SIZE;
  const skImage = useImage(require("../../assets/images/login.png"));
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2;

  const clipPath = useMemo(() => {
    const p = Skia.Path.Make();
    p.addCircle(cx, cy, r);
    return p;
  }, [cx, cy, r]);

  const imgSize = size * 0.88;
  const imgX = (size - imgSize) / 2;
  const imgY = (size - imgSize) / 2;

  return (
    <View
      style={[styles.loginSkiaHeroWrap, { width: size, height: size }]}
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
    >
      <Canvas style={{ width: size, height: size }} pointerEvents="none">
        <Group clip={clipPath}>
          <Circle cx={cx} cy={cy} r={r}>
            <RadialGradient
              c={vec(cx, cy)}
              r={size * 0.55}
              colors={["#EDE9FE", "#E8E4F8", "#EDE9FE"]}
            />
          </Circle>
          {skImage ? (
            <SkiaImage
              image={skImage}
              x={imgX}
              y={imgY}
              width={imgSize}
              height={imgSize}
              fit="contain"
            />
          ) : null}
        </Group>
      </Canvas>
    </View>
  );
}
