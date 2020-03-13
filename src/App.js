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
  // 资产交易池
  const [vTokeninVariant,setVTokeninVariant] =useState('')
  // 用户资产余额
  const [vTokenBalance, setvTokenBalance] = useState('')
  // 资产汇率
  const [exchangeRate, setExchangeRate] = useState('')
  // 资产总发行
  const [vTokens, setVtokens] = useState('')
  // 下一个要创建的资产类型
  const [nextAssetId, setNextAssetId] = useState('')
  const [totalAssets,setTotalAssets] = useState([])
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
    const wsProvider = new WsProvider('wss://testnet.liebi.com/');
    const polkadotApi = await ApiPromise.create({ provider: wsProvider,types:parameter})
    setApi(polkadotApi)
  }
  useEffect(() => {
    if (api === null) {
      main()
    }
  }, [api])
  // 查询用户asset id 和下一个要创建的资产
  useEffect(() => {
    if (polkadotAccount !== '' && api !== null) {
      QueryAssets()
    }
  }, [polkadotAccount, api])
  async function QueryAssets() {
    console.log('正在查询')
    try {
      await api.query.assets.accountAssets(polkadotAccount,(res)=>{
        console.log(res)
      })
      // const [accountAssets, res] = await Promise.all([
      //   api.query.assets.accountAssets(polkadotAccount),
      //   api.query.assets.nextAssetId()
      // ])
      // setAccountAssets(accountAssets.toJSON())
      // setNextAssetId(res.toString())
      // console.log(accountAssets.toJSON())
      // console.log('下一个要创建的asset id', res.toString())
    }
    catch (error) { console.log('错误', error) }
  }
  // 查询用户相关资产
  async function FindVToken() {
    let exchangeRateParameter = []
    let balancesParameter = []
    accountAssets.map((v) => {
      exchangeRateParameter.push([v])
      balancesParameter.push([v, 'vToken', polkadotAccount])
    })
    console.log('数组', exchangeRateParameter, balancesParameter)

    try {
      await Promise.all([
        // api.query.assets.balances.multi(balancesParameter, (res) => {
        //   res.map((v) => { console.log('assetID', v.toString() / 1000000000000) })
        //   console.log('余额', res)
        //   setvTokenBalance(res)

        // }),
        // api.query.exchange.exchangeRate.multi(exchangeRateParameter, (res) => {
        //   res.map((v) => { console.log('assetID', v.toJSON()) })
        //   console.log('汇率', res)
        //   setExchangeRate(res)
        // })
      ])

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (api !== null && accountAssets.length !== 0 && polkadotAccount !== '') {
      FindVToken()
    }
  }, [api, polkadotAccount, accountAssets])
  useEffect(()=>{
    if(nextAssetId!==''){
      let AssetsID = Array.from({ length: nextAssetId }, (v, k) => k);
      setTotalAssets(AssetsID)
    }
  },[nextAssetId])
// 查找公共信息
async function FindMarket() {
  let tokens = []
  let inVariant=[]
  // let balancesParameter = []
  totalAssets.map((v) => {
    tokens.push([v])
    inVariant.push([v,v])
    // balancesParameter.push([v, 'vToken', polkadotAccount])
  })
 try {
    await Promise.all([
    //   api.query.assets.tokens.multi(tokens, (res) => {
    //     res.map((i) => { console.log('assetID', i.vtoken.totalSupply.toString()/1000000000000) })
    //     console.log('总发行', res)
    //     setVtokens(res)
    // }),
      // api.query.swap.inVariant.multi(tokens, (res) => {
      //   res.map((v) => { console.log('assetID交易池', v.toJSON()[1]/1000000000000) })
      //   console.log('交易池', res)
      //   setVTokeninVariant(res)
      // })
    ])

  }
  catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  if (api !== null  && nextAssetId !== ''&&totalAssets!=='') {
    FindMarket()
  }
}, [api, nextAssetId,totalAssets])
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
        setPolkadotAccount(`${AddressArr[3].address}`)
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

  useEffect(() => { console.log('assets长度', accountAssets.length) }, [accountAssets])

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
              accountAssets={accountAssets}
              vTokenBalance={vTokenBalance}
              exchangeRate={exchangeRate}
              vTokens={vTokens}
              totalAssets={totalAssets}
              vTokeninVariant={vTokeninVariant}
              />
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



