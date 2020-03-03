// 主组件
import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route, withRouter
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import Details from "./pages/Details"
export default () => {
  // 下拉框状态
  const [unitState, setUnitState] = useState(false)
  // 当前屏幕尺寸
  const [screen, setScreen] = useState("")
  // 翻译文件
  const { t } = useTranslation()
  // 当前单位
  const [state, setState] = useState(false)
  // 改变单位,关闭下拉框
  const ToggleUnitValue = () => {
    setState(!state)
    // console.log(state)
    setUnitState(false)
  }
  // 改变下拉框状态
  const SwitchingUnit = () => {
    setUnitState(!unitState)
  }
  const Link = () => {
    return (
      <>
        <Route exact
          path="/"
          render={() => (
            <HomePage state={state}/>
          )} />
        <Route
          path="/Detailseos"
          render={() => (
            <Details abbr="eos" />
          )} />
        <Route
          path="/Detailsdot"
          render={() => (
            <Details abbr="dot" />
          )} />
        <Route
          path="/Detailsksm"
          render={() => (
            <Details abbr="ksm" />
          )} />       </>
    )
  }
  useEffect(() => {
    if (document.documentElement.clientWidth < 720) {
      setScreen("mobile");
    }
    else {
      setScreen("laptop");

    } console.log('自适应', screen)
  }, [screen]);

  return (
    <Router>
      <Suspense fallback="">
        <Header ToggleUnitValue={ToggleUnitValue} state={state}
          unitState={unitState} SwitchingUnit={SwitchingUnit} />
        <Link />
      </Suspense>
    </Router>

  )
};



