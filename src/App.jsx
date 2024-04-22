// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth,outerWidth } = window;
      // 根据窗口宽度动态计算字体大小
      const fontSize = innerWidth / outerWidth; // 假设小于 768px 使用 16px，否则使用 18px
      document.documentElement.style.fontSize = `${fontSize}px`;
    };

    // 监听窗口尺寸变化
    window.addEventListener('resize', handleResize);

    // 组件卸载时移除事件监听
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <Nav />
        <Outlet />
    </>
  )
}

export default App
