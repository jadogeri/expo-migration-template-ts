module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo','module:metro-react-native-babel-preset'],
    plugins: ["react-native-worklets/plugin",
      [
        'module-resolver',
        {
          root: ['./src'], // The root directory for your source files
          alias: {
            '@components': './src/components',
            '@navigations': './src/navigations', // Alias for navigation files
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@constants': './src/constants', // Alias for navigation files
            '@hooks': './src/hooks',
            '@types': './src/types',

            //'@/assets': './assets', // Example for assets outside src
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // Important for TypeScript/JSX
        },
      ],
      // If using Expo Router, ensure you also have its babel plugin
      // require.resolve("expo-router/babel"), 
    ],
  };
};


