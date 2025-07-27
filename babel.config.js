module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@hooks": "./src/hooks",
            "@app-types": "./src/types",
            "@constants": "./src/constants",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
