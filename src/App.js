// 主组件
import React, { lazy, Suspense, useState, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route, withRouter, Switch
} from "react-router-dom";
import { View,color,Text } from "./components/Styles"
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
const App = () => {
  // 当前屏幕尺寸
  const [screen, setScreen] = useState("")
  const [fontSize, setFontSize] = useState("")
  // 翻译文件
  const { t } = useTranslation()
  useEffect(()=>{
    let css = window.getComputedStyle(document.getElementById('root')).fontSize;
    setFontSize(css)
  },[])
  // 获取浏览器当前宽度
  useEffect(() => {
    console.log('宽度', document.documentElement.clientWidth)
    if (document.documentElement.clientWidth < 720) {
      setScreen("mobile");
    }
    else if ((document.documentElement.clientWidth > 720
      || document.documentElement.clientWidth === 720)
      && document.documentElement.clientWidth < 1280) {
      setScreen("Tablet");
    }
    else if (document.documentElement.clientWidth > 1280
      || document.documentElement.clientWidth === 1280) {
      setScreen("laptop");
    }
    console.log('自适应', screen)
  }, [screen]);


  return (
    <>
      <Header />
      <Content screen={screen} fontSize={fontSize} />
      <Footer />
    </>
  )
};
export default React.memo(App)



