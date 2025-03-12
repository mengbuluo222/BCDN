import { createTheme } from '@ant-design/cssinjs';

// 自定义主题颜色
const customTheme = {
  token: {
    colorPrimary: '#FF5722', // 可替换为你想要的主题颜色
  },
  // 如果你需要使用特定的算法，这里可以通过其他方式处理，而不是依赖旧的 theme 对象
};

const themeInstance = createTheme(customTheme);

export default themeInstance;