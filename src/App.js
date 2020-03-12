// 主组件
import React, { lazy, Suspense, useState, useEffect } from "react";
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { TypeRegistry } from '@polkadot/types';
import { encodeAddress, setSS58Format } from '@polkadot/util-crypto';
import {
  BrowserRouter as Router,
  Route, withRouter
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import parameter from './components/parameter'
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import Details from "./pages/Details"
export default () => {
  // 创建的资产
  const [accountAssets, setAccountAssets] = useState([])
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
  // 本地登陆的polkadot账号(转码前)
  const [polkadotAccount, setPolkadotAccount] = useState('')
  // 本地登陆的polkadot账号(转码后)
  const [account, setAccount] = useState('')
  // 准备api
  useEffect(() => {
    if (api === null) {
      main()
    }
  }, [api])
  async function main() {
    const wsProvider = new WsProvider('ws://129.204.206.165:19944/');
    const polkadotApi = await ApiPromise.create({ provider: wsProvider, types: parameter })
    setApi(polkadotApi)
  }
  // 检测本地插件 插件是否有账号
  useEffect(() => {
    async function init() {
      const allInjected = await web3Enable(' my cool dapp ');
      const allAccounts = await web3Accounts()
      // 检测插件
      allInjected.map((i) => {
        if (i.name === 'polkadot-js') {
          console.log('本地有插件')
          // 插件是否有账号
          if (allAccounts.length !== 0) {
            let AddressArr = []
            allAccounts.map((i) => {
              if (i.meta.source === "polkadot-js") {
                AddressArr.push({ address: i.address, name: i.meta.name })
              }
            })
            console.log('有登陆账号', AddressArr)
            setPolkadotAccount(`${AddressArr[3].address}`)
            setSS58Format(6)
            try {
              let dotAccount = encodeAddress(`${AddressArr[3].address}`);
              setAccount(dotAccount)
            }
            catch (error) { console.log('转码地址错误', error) }
    
          }
        }
      })
     
    }
    init()
  }, [])
  async function QueryAssets() {
    console.log('正在查询')
    try {
      const res = await api.query.assets.accountAssets('5GjJNWYS6f2UQ9aiLexuB8qgjG8fRs2Ax4nHin1z1engpnNt')
      setAccountAssets(res.toJSON())
      console.log(res.toString())
    }
    catch (error) { console.log('错误', error) }
  }
  useEffect(() => {
    if (polkadotAccount !== '' && api !== null) {
      console.log('正在查询')
      QueryAssets()
    }
  }, [polkadotAccount, api])
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
            <HomePage state={state} api={api}
              polkadotAccount={polkadotAccount}
              account={account}
              accountAssets={accountAssets} />
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
        <Header
          polkadotAccount={polkadotAccount}
          account={account}
          ToggleUnitValue={ToggleUnitValue} state={state}
          unitState={unitState} SwitchingUnit={SwitchingUnit} />
        <Link />
      </Suspense>
    </Router>

  )
};



