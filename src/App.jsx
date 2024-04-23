// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import useWindowSize from "./hooks/useWindowSize";

function isPC() {
  const userAgent = navigator.userAgent;
  return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

function App() {
  const { width } = useWindowSize();
  useEffect(() => {

    // const handleResize = () => {
    //   const { innerWidth,outerWidth } = window;
    //   console.log('outerWidth: ', outerWidth);
    //   console.log('innerWidth: ', innerWidth);
    //   const ratio = innerWidth / outerWidth;
    //   let fontSize = innerWidth < 750 ? ratio +0.55 : ratio == 1 ? 1 : (ratio + 0.1);
    //   // if(isMobile()){
    //   //   fontSize = 
    //   // }
    //   document.documentElement.style.fontSize = `${fontSize}px`;
    // };
    // handleResize();
    
    const setRootFontSize = () => {
      const { innerWidth,outerWidth } = window;
      if(isPC()){
        const ratio = innerWidth / outerWidth;
        let fontSize = innerWidth < 750 ? ratio +0.55 : ratio == 1 ? 1 : (ratio + 0.1);
        document.documentElement.style.fontSize = `${fontSize}px`;
      }else{
        const designWidth = 750;
        let fontSize = width > designWidth ? designWidth / width : width / designWidth;
        if(isPC() && innerWidth == outerWidth){
          fontSize = 1
        }
        document.documentElement.style.fontSize = fontSize + 'px';
      }
      
    }
    setRootFontSize()
    window.addEventListener('resize', setRootFontSize);
    return () => {
      window.removeEventListener('resize', setRootFontSize);
    };
  }, []);

  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
