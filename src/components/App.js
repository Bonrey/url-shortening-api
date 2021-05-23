import React, { useState, useEffect } from 'react';
import { globalStyle as GlobalStyle } from '../styles/globalStyle';

import InitialPopup from './Other/InitialPopup';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


const App = () => {
  if (!localStorage.getItem('firstLaunch')) {
    localStorage.setItem('firstLaunch', true);
  }

  const initial = localStorage.getItem('firstLaunch') === 'true';
  const [initialPopupVisible, setInitialPopupVisible] = useState(initial);
  const [menuVisible, setMenuVisible] = useState(false);
  const width = useWindowWidth();

  const [scrollable, setScrollable] = useState(true);
  useEffect(() => {
    if (initial) {
      localStorage.setItem('firstLaunch', false);
      setTimeout(() => setScrollable(false), 2000);
    }
  }, [initial]);

  return (
    <>
      <GlobalStyle scrollable={scrollable} menuVisible={menuVisible} />
      <InitialPopup
        onClick={() => {
          setInitialPopupVisible(false);
          setScrollable(true);
        }}
        isVisible={initialPopupVisible}
      />
      <Header
        onClick={() => setMenuVisible(!menuVisible)}
        menuVisible={menuVisible}
        width={width}
      />
      <Main width={width} />
      <Footer />
    </>
  );
}

export default App;


function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
