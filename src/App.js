// 主组件
import React, { lazy, Suspense, useState, useEffect, useMemo } from "react";
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
// import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { encodeAddress, setSS58Format } from '@polkadot/util-crypto';
import {
  BrowserRouter as Router,
  Route, withRouter, Switch
} from "react-router-dom";
import parameter from './components/parameter'
const Details = lazy(() => import('./pages/Details'))
const HomePage = lazy(() => import('./pages/HomePage'))
const Loading = lazy(() => import('./components/Loading'))
const Header = lazy(() => import('./components/Header'))

const App = () => {
  // token 的prices
  const [tokenPrices, setTokenPrices] = useState('')
  // 用户创建的资产
  const [accountAssets, setAccountAssets] = useState([])
  // 下一个要创建的资产类型
  const [nextAssetId, setNextAssetId] = useState('')
  // 连接后端api
  const [api, setApi] = useState(null)
  // 当前屏幕尺寸
  const [screen, setScreen] = useState("")
  // 翻译文件
  const { t } = useTranslation()
  // 当前单位
  const [state, setState] = useState('TOKEN')
  // 本地登陆的polkadot账号(转码前)
  const [polkadotAccount, setPolkadotAccount] = useState('')
  // 本地登陆的polkadot账号(转码后)
  const [account, setAccount] = useState('')
  // 本地是否有钱包 默认有
  const [purseStatus, setPurseStatus] = useState(true)
  // 本地是否有账号 默认有
  const [accountStatus, setAccountStatus] = useState(true)
  // 准备api
  async function main() {
    //  const wsProvider = new WsProvider('ws://129.204.206.165:19944/');
    const wsProvider = new WsProvider('ws://172.16.200.159:9944/');
    const polkadotApi = await ApiPromise.create({ provider: wsProvider, types: parameter })
    setApi(polkadotApi)
  }
  let timer
  // 创建接口api 
  useEffect(() => {
    if (api === null) {
      timer = setTimeout(() => {
        main()
      }, 100)
    }
    //组件卸载生命周期
    return () => {
      clearTimeout(timer)
      console.log('卸载')
    }
  }, [api])
  // 检测本地插件 插件是否有账号
  useEffect(() => {
    CheckWallet()
  }, [])
  // 获取浏览器当前宽度
  useEffect(() => {
    console.log('宽度', document.documentElement.clientWidth)
    if (document.documentElement.clientWidth < 720) {
      setScreen("mobile");
    }
    else if ((document.documentElement.clientWidth > 720
      || document.documentElement.clientWidth === 720)
      && document.documentElement.clientWidth < 1200) {
      setScreen("Tablet");
    }
    else if (document.documentElement.clientWidth > 1200
      || document.documentElement.clientWidth === 1200) {
      setScreen("laptop");
    }
    console.log('自适应', screen)
  }, [screen]);
  useEffect(() => {
    if (!accountStatus) {
      setPolkadotAccount('5GjJNWYS6f2UQ9aiLexuB8qgjG8fRs2Ax4nHin1z1engpnNt')
    }
  }, [accountStatus])
  useEffect(() => {
    if (purseStatus === false) {
      setAccountStatus(false)
    }
  }, [purseStatus])
  useEffect(() => {
    if (polkadotAccount !== '' && api !== null) {
      console.log('登陆得地址',polkadotAccount)
      QueryAssets()
    }
  }, [polkadotAccount, api])
  useEffect(() => {
    if (polkadotAccount !== '') { AddressTranscoding() }
  }, [polkadotAccount])
  async function CheckAddress() {
    const allAccounts = await web3Accounts()
    console.log('地址', allAccounts)
    if (allAccounts.length === 0) { setAccountStatus(false) }
    else {
      const res = allAccounts.findIndex((i) => {
        return i.meta.source === "polkadot-js"
      })
      if (res === -1) {
        setAccountStatus(false)
      }
      else {
        // 获取 登陆地址数组
        const AddressArr = allAccounts.map((i) => {
          if (i.meta.source === "polkadot-js") {
            return { address: i.address, name: i.meta.name }
          }
        })
        console.log('地址', AddressArr[2].address)
        setPolkadotAccount(AddressArr[2].address)
      }
    }
  }
  const useHomePage = useMemo(() => {
    return <HomePage
      // state={state}
      api={api}
      polkadotAccount={polkadotAccount}
      screen={screen}
      accountAssets={accountAssets}
      nextAssetId={nextAssetId}
    />
  }, [api, polkadotAccount, screen, accountAssets, nextAssetId])
  async function CheckWallet() {
    const allInjected = await web3Enable(' my cool dapp ');
    if (allInjected.length === 0) {
      setPurseStatus(false)
    }
    else {
      const res = allInjected.findIndex((i) => {
        return i.name === 'polkadot-js'
      })
      if (res === -1) {
        setPurseStatus(false)
      }
      // 有插件再去检测有没有地址
      else {
        CheckAddress()
      }
    }
  }
  async function AddressTranscoding() {
    setSS58Format(6)
    try {
      let dotAccount = encodeAddress(polkadotAccount);
      setAccount(dotAccount)
    }
    catch (error) { console.log('转码地址错误', error) }

  }
  // 查询用户的资产类型和下一个要创建的资产
  async function QueryAssets() {
    console.log('正在查询', polkadotAccount)
    try {
      const [accountAssets, res] = await Promise.all([
        api.query.assets.accountAssetIds(polkadotAccount),
        api.query.assets.nextAssetId()
      ])
      setAccountAssets(accountAssets.toJSON())
      setNextAssetId(res.toString())
      console.log('总资产', accountAssets.toJSON())
      console.log('下一个要创建的asset id', res.toString())
    }
    catch (error) { console.log('错误', error) }
  }
  // useEffect(() => { console.log('assets长度', accountAssets.length) }, [accountAssets])
  // 改变单位,关闭下拉框
  const ToggleUnitValue = (e) => {
    setState(e.target.value)
    console.log('e.target', e.target.value)
  }

  const Link = () => {
    return (
      <><Switch>
        <Route exact
          path="/"
          key="home"
          render={() => (
            api !== null && polkadotAccount !== '' ?
              useHomePage : <Loading />
          )} />
        <Route
          path="/vdot"
          key="dot"
          render={() => (
            api === null || polkadotAccount === '' ?
              <Loading />
              : <Details
                abbr="DOT"
                api={api}
                polkadotAccount={polkadotAccount}
                screen={screen}
              />
          )} />
        <Route
          path="/vksm"
          key="kms"
          render={() => (
            api === null || polkadotAccount === '' ?
              <Loading />
              : <Details
                abbr="KSM"
                api={api}
                polkadotAccount={polkadotAccount}
                screen={screen}
              />
          )} />
        <Route
          path="/veos"
          key="eos"
          render={() => (
            api === null || polkadotAccount === '' ?
              <Loading />
              : <Details
                abbr="EOS"
                api={api}
                polkadotAccount={polkadotAccount}
                screen={screen}
              />
          )} />
      </Switch>
      </>
    )
  }


  return (
    <Router>
      <Suspense fallback="">
        <Header
          api={api}
          screen={screen}
          accountAssets={accountAssets}
          polkadotAccount={polkadotAccount}
          account={account}
          ToggleUnitValue={ToggleUnitValue}
          state={state} />
        <Link />
      </Suspense>

    </Router>

  )
};
export default React.memo(App)



