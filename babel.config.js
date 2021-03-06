module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [ 
      "module:react-native-dotenv",
      {
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }
    ],
    [
      'module-resolver',
      {
        root: './src',
        alias: {
          '@navigations' : './src/navigations',
          '@views' : './src/core/presentation/views',
          '@layouts' : './src/core/presentation/layouts',
          '@components' : './src/core/presentation/components',
          '@data' : './src/core/data',
          '@domain' : './src/core/domain',
          '@redux' : './src/redux',
          '@core' : './src/core',
          '@constants' : './src/constants',
          '@http' : './src/http',
          '@utils' : './src/utils',
          '@database' : './src/database',
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
