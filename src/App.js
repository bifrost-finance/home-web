// 主组件
import React, { lazy, Suspense, useState, useEffect } from "react";
import { ApiPromise, WsProvider } from '@polkadot/api';
import {
  BrowserRouter as Router,
  Route, withRouter
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import Details from "./pages/Details"
export default () => {
  // 连接后端api
  const [api, setApi] = useState(null)
  // 下拉框状态
  const [unitState, setUnitState] = useState(false)
  // 当前屏幕尺寸
  const [screen, setScreen] = useState("")
  // 翻译文件
  const { t } = useTranslation()
  // 当前单位
  const [state, setState] = useState(false)
  useEffect(() => {
    if (api === null) {
      main()
    }
  }, [api])
  async function main() {
    const polkadotApi = await ApiPromise.create({ provider: new WsProvider('ws://106.15.185.17:19944/') })
    setApi(polkadotApi)
  }
  let tryTimes = 25;
  useEffect(()=>{
  let timer;
  function init() {
    tryTimes--;
    if (tryTimes > 0) {
      timer = setTimeout(() => {
        if (window.IWalletJS) {
          console.log(window.IWalletJS)
        } else {
          init();
        }
      }, 100)
    }
  }
init();
return()=>{
  clearTimeout(timer)
}
},[tryTimes])
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
            <HomePage state={state} api={api} />
          )} />
        <Route
          path="/veos"
          render={() => (
            <Details abbr="EOS" api={api} />
          )} />
        <Route
          path="/vdot"
          render={() => (
            <Details abbr="DOT" api={api} />
          )} />
        <Route
          path="/vksm"
          render={() => (
            <Details abbr="KSM" api={api} />
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



