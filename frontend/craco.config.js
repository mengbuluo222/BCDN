const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: {
    //           '@primary-color': '#ffd100', // 替换为你想要的主题颜色
    //         },
    //         javascriptEnabled: true,
    //       },
    //     },
    //   },
    // },
  ],
};