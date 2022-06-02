module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        alias: {
          '@navigations' : './src/navigations',
          '@core/views' : './src/core/presentation/views',
          '@core/layouts' : './src/core/presentation/layouts',
          '@core/components' : './src/core/presentation/components',
          '@core/data' : './src/core/data',
          '@core/domain' : './src/core/domain',
          '@redux' : './src/redux',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
