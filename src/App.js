// 主组件
import React, { lazy, Suspense, useState, useEffect } from "react";
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { TypeRegistry } from '@polkadot/types';
import { encodeAddress, setSS58Format } from '@polkadot/util-crypto';
import {
  BrowserRouter as Router,
  Route, withRouter, Switch
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import NP from 'number-precision'
import parameter from './components/parameter'
import Header from "./components/Header"
// import HomePage from "./pages/HomePage"
import Details from "./pages/Details"
// const Details = lazy(() => import('./pages/Details'))
const HomePage = lazy(() => import('./pages/HomePage'))
const Loading = lazy(() => import('./components/Loading'))
export default () => {
  // 资产交易池
  const [TokeninVariant, setTokeninVariant] = useState('')
  // 用户资产余额
  const [vTokenBalance, setvTokenBalance] = useState('')
  const [TokenBalance, setTokenBalance] = useState('')
  // const [allBalance, setAllBalance] = useState('')
  // 资产汇率
  const [exchangeRate, setExchangeRate] = useState('')
  // 所有资产汇率
  const [exAllChangeRate, setAllExchangeRate] = useState('')
  // 资产总发行
  const [vTokens, setVtokens] = useState('')
  // 下一个要创建的资产类型
  const [nextAssetId, setNextAssetId] = useState('')
  const [totalAssets, setTotalAssets] = useState([])
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
  // 本地是否有钱包 默认有
  const [purseStatus, setPurseStatus] = useState(true)
  // 本地是否有账号 默认有
  const [accountStatus, setAccountStatus] = useState(true)
  // 准备api
  async function main() {
    const wsProvider = new WsProvider('ws://129.204.206.165:19944/');
    const polkadotApi = await ApiPromise.create({ provider: wsProvider, types: parameter })
    setApi(polkadotApi)
  }
  let timer
  useEffect(() => {
    if (api === null) {
      timer = setTimeout(() => {
        main()
      }, 100)
    }
    return () => {
      clearTimeout(timer)
      console.log('卸载')
    }
  }, [api])
  // 查询用户asset id 和下一个要创建的资产
  useEffect(() => {
    if (polkadotAccount !== '' && api !== null) {
      QueryAssets()
    }
  }, [polkadotAccount, api])
  async function QueryAssets() {
    console.log('正在查询', polkadotAccount)
    try {
      const [accountAssets, res] = await Promise.all([
        api.query.assets.accountAssetIds(polkadotAccount),
        api.query.assets.nextAssetId()
      ])
      setAccountAssets(accountAssets.toJSON())
      setNextAssetId(res.toString())
      // console.log('总资产', accountAssets.toJSON())
      // console.log('下一个要创建的asset id', res.toString())
    }
    catch (error) { console.log('错误', error) }
  }
  // 查询用户相关资产
  async function FindVToken() {
    let balance = []
    let exchangeRateParameter = []
    let vbalancesParameter = []
    let balancesParameter = []
    accountAssets.map((v) => {
      exchangeRateParameter.push([v])
      vbalancesParameter.push([v, 'vToken', polkadotAccount])
      balancesParameter.push([v, 'Token', polkadotAccount])
    })
    try {
      await Promise.all([
        api.query.assets.accountAssets.multi(vbalancesParameter, (res) => {
          // res.map((v) => { console.log('余额SassetID', balance.push(v.balance.toString())) })
          // console.log('余额', res)
          // console.log('余额和', balance)
          // setAllBalance(balance)
          setvTokenBalance(res)

        }),
        api.query.assets.accountAssets.multi(balancesParameter, (res) => {
          // res.map((v) => { console.log('余额SassetID', balance.push(v.balance.toString())) })
          // console.log('余额', res)
          // console.log('余额和', balance
          setTokenBalance(res)

        }),
        api.query.exchange.exchangeRate.multi(exchangeRateParameter, (res) => {
          // res.map((v) => { console.log('汇率assetID', v.toJSON()[0]) })
          // console.log('汇率数组', res)
          setExchangeRate(res)
        })
      ])

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (api !== null && polkadotAccount !== '') {
      FindVToken()
    }
  }, [api, polkadotAccount, accountAssets])
  useEffect(() => {
    if (nextAssetId !== '') {
      let AssetsID = Array.from({ length: nextAssetId }, (v, k) => k);
      setTotalAssets(AssetsID)
    }
  }, [nextAssetId])
  // 查找公共信息
  async function FindMarket() {
    let tokens = []
    let inVariant = []
    // let balancesParameter = []
    totalAssets.map((v) => {
      tokens.push([v])
      inVariant.push(v)
      // balancesParameter.push([v, 'vToken', polkadotAccount])
    })
    try {
      await Promise.all([
        api.query.assets.tokens.multi(tokens, (res) => {
          // res.map((i) => { console.log('assetID', i.vtoken.totalSupply.toString()) })
          // console.log('总发行', res)
          setVtokens(res)
        }),
        api.query.swap.inVariant.multi(inVariant, (res) => {
          // res.map((v) => { console.log('assetID交易池', v.toJSON()[0]) })
          // console.log('交易池', res)
          setTokeninVariant(res)
        }),
        api.query.exchange.exchangeRate.multi(tokens, (res) => {
          res.map((v) => { console.log('所有资产汇率assetID', v.toJSON()[0]) })
          console.log('所有汇率数组', res)
          setAllExchangeRate(res)
        })
      ])

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (api !== null && nextAssetId !== '' && totalAssets !== '') {
      FindMarket()
    }
  }, [api, nextAssetId, totalAssets])
  useEffect(() => {
    if (!purseStatus || !accountStatus) {
      setPolkadotAccount('5GjJNWYS6f2UQ9aiLexuB8qgjG8fRs2Ax4nHin1z1engpnNt')
    }
  }, [purseStatus, accountStatus])
  // 检测本地插件 插件是否有账号
  useEffect(() => {
    CheckWallet()
    CheckAddress()
  }, [])
  async function CheckAddress() {
    const allAccounts = await web3Accounts()
    if (allAccounts === []) { setAccountStatus(false) }
    else {
      let AddressArr = []
      let noPolkadotAddtess = []
      allAccounts.map((i) => {
        if (i.meta.source === "polkadot-js") {
          AddressArr.push({ address: i.address, name: i.meta.name })
        }
        else if (i.meta.source === "polkadot-js") {
          noPolkadotAddtess.push(i.meta.source)
        }
      })
      if (AddressArr.length !== 0) {
        console.log('有登陆账号', AddressArr)
        setPolkadotAccount(`${AddressArr[2].address}`)
      }
      if (noPolkadotAddtess.length === allAccounts.length) {
        setAccountStatus(false)
      }
    }
  }
  async function CheckWallet() {
    const allInjected = await web3Enable(' my cool dapp ');
    // 检测插件
    console.log(allInjected)
    if (allInjected === []) { setPurseStatus(false) }
    else {
      let nopurse = []
      allInjected.map((i) => {
        if (i.name !== 'polkadot-js') {
          nopurse.push(i.name)
        }
        if (nopurse.length === allInjected.length) {
          setPurseStatus(false)
        }
      })
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
  useEffect(() => { if (polkadotAccount !== '') { AddressTranscoding() } }, [polkadotAccount])
  // useEffect(() => { console.log('assets长度', accountAssets.length) }, [accountAssets])
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
      <><Switch>
        <Route exact
          path="/"
          key="1"
          render={() => (
            api !== null && polkadotAccount !== '' ?
              <HomePage state={state} api={api}
                polkadotAccount={polkadotAccount}
                account={account}
                accountAssets={accountAssets}
                vTokenBalance={vTokenBalance}
                exchangeRate={exchangeRate}
                vTokens={vTokens}
                totalAssets={totalAssets}
                TokeninVariant={TokeninVariant}
                exAllChangeRate={exAllChangeRate} /> : <Loading />
          )} />
        <Route
          path="/vdot"
          key="dot"
          render={() => (
            api === null || polkadotAccount === '' ?
              <Loading />
              : <Details abbr="DOT" api={api}
                polkadotAccount={polkadotAccount}
                exAllChangeRate={exAllChangeRate}
                TokeninVariant={TokeninVariant}
                TokenBalance={TokenBalance}
                vTokenBalance={vTokenBalance}
                accountAssets={accountAssets}
              />
          )} />
        <Route
          path="/vksm"
          key="kms"
          render={() => (
            api === null || polkadotAccount === '' ?
              <Loading />
              : <Details abbr="KSM" api={api}
                polkadotAccount={polkadotAccount}
                exAllChangeRate={exAllChangeRate}
                TokeninVariant={TokeninVariant} 
                TokenBalance={TokenBalance}
                vTokenBalance={vTokenBalance}
                accountAssets={accountAssets}/>
          )} />
        <Route
          path="/veos"
          key="eos"
          render={() => (
            api === null || polkadotAccount === '' ?
              <Loading />
              : <Details abbr="EOS" api={api}
                polkadotAccount={polkadotAccount}
                exAllChangeRate={exAllChangeRate}
                TokeninVariant={TokeninVariant}
                vTokenBalance={vTokenBalance} 
                TokenBalance={TokenBalance}
                accountAssets={accountAssets}
                />
          )} />
      </Switch>
      </>
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
          vTokenBalance={vTokenBalance}
          exchangeRate={exchangeRate}
          // allBalance={allBalance}
          polkadotAccount={polkadotAccount}
          account={account}
          ToggleUnitValue={ToggleUnitValue} state={state}
          unitState={unitState} SwitchingUnit={SwitchingUnit} />
        <Link />
      </Suspense>

    </Router>

  )
};



