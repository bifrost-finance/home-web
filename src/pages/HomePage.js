// 主页内容
import React, { lazy, useMemo, useState, useEffect } from "react";
import UserAssets from "../components/UserAssets"
import Format from "../components/Format"
const HomePage = ({ state, polkadotAccount, api, screen, accountAssets, nextAssetId }) => {
  // 资产交易池
  const [TokeninVariant, setTokeninVariant] = useState('')
  const [AnnualizedRate, setAnnualizedRate] = useState('')
  // 用户资产vToken余额
  const [vTokenBalance, setvTokenBalance] = useState('')
  // 共有几种资产
  const [totalAssets, setTotalAssets] = useState([])
  // 资产汇率
  const [exchangeRate, setExchangeRate] = useState('')
  // 所有资产汇率
  const [exAllChangeRate, setAllExchangeRate] = useState('')
  // 资产总发行
  const [vTokens, setVtokens] = useState('')
  const [allBalance, setAllBalance] = useState('')
  // 块高度
  const [numberBlock, setNumberBlock] = useState('')
  // 过去七天出块
  const [sevenDayBlock, setSevenDayBlock] = useState([])
  // 过去七天出块哈希
  const [sevenDayHashBlock, setSevenDayHashBlock] = useState([])
  // 过去七天token 的汇率
  const [assetsSevenDayExchangeRate, setAssetsSevenDayExchangeRate] = useState([])
  // 查询几种资产类型
  useEffect(() => {
    if (nextAssetId !== '') {
      let AssetsID = Array.from({ length: nextAssetId }, (v, k) => k);
      setTotalAssets(AssetsID)
    }
  }, [nextAssetId])
  // 查找用户资产详情
  useEffect(() => {
    let isUnmounted = false
    if (api !== null && polkadotAccount !== '' && accountAssets.length !== 0) {
      (async () => {
        let exchangeRateParameter = []
        let vbalancesParameter = []
        accountAssets.map((v) => {
          exchangeRateParameter.push([v])
          vbalancesParameter.push([v, 'vToken', polkadotAccount])
        })
        try {
          console.log('请求得数组', vbalancesParameter)
          await Promise.all([
            // 没变
            api.query.assets.accountAssets.multi(vbalancesParameter, (res) => {
              console.log('Vtoken 余额数组', res)
              // setAllBalance(balance)
              if (!isUnmounted) { setvTokenBalance(res) }

            }),
            // v.toJSON()[0] => v.toJSON()
            api.query.exchange.exchangeRate.multi(exchangeRateParameter, (res) => {
              res.map((v) => { console.log('汇率assetID', v.toJSON()) })
              // res.map((v) => { console.log('汇率assetID', v.toJSON()[0]) })
              console.log('汇率数组', res)
              if (!isUnmounted) { setExchangeRate(res) }
            }),
          ])

        }
        catch (error) {
          console.log(error);
        }
      })();
    }
    return () => {
      isUnmounted = true
    }
  }, [api, polkadotAccount, accountAssets])
  //  查找公共信息
  useEffect(() => {
    let isUnmounted = false
    if (api !== null && nextAssetId !== '' && totalAssets !== '') {

      (async () => {
        // 查找公共信息
        console.log('重新查询了')
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
            // 没变
            api.query.assets.tokens.multi(tokens, (res) => {
              res.map((i) => { console.log('总发行assetID', i.vtoken.totalSupply.toString()) })
              console.log('总发行', res)
              if (!isUnmounted) { setVtokens(res) }
            }),
            // 没变
            api.query.swap.inVariant.multi(inVariant, (res) => {
              res.map((v) => {
                console.log('流通交易池', v.toJSON()[2])
                console.log('token交易池', v.toJSON()[0])
                console.log('vtoken交易池', v.toJSON()[1])

              })
              console.log('交易池', res)
              if (!isUnmounted) { setTokeninVariant(res) }
            }),
            api.query.exchange.exchangeRate.multi(tokens, (res) => {
              res.map((v) => { console.log('所有资产汇率assetID', v.toJSON()) })
              // res.map((v) => { console.log('所有资产汇率assetID', v.toJSON()[0]) })
              console.log('所有汇率数组', res)
              if (!isUnmounted) { setAllExchangeRate(res) }
            }),
            api.query.swap.fee.multi(tokens, (res) => {
              res.map((v) => {
                console.log('手续费', v.toJSON())
              })
            }),
          ])

        }
        catch (error) {
          console.log(error);
        }
      })();
      (async () => {
        try {
          const header = await api.rpc.chain.getHeader();
          console.log('出块高度', header.toJSON().number)
          if (!isUnmounted) { setNumberBlock(header.toJSON().number) }
        }
        catch (error) { console.log('api.rpc.chain.getHeader() error', error) }
      })();
    }
    return () => {
      isUnmounted = true
    }
  }, [api, nextAssetId, totalAssets])
  // 年化率
  useEffect(() => {
    if (numberBlock !== '') {
      let Date1 = new Date();
      let seconds = Date1.getHours() * 3600 + Date1.getMinutes() * 60 + Date1.getSeconds()
      // 零点出块多少 一天出28800个块
      let ZeroPointBlock = Format.minus(numberBlock, Format.BlockVelocity(seconds))
      let arr = [7, 6, 5, 4, 3, 2, 1, 0]
      let pastBlockArr = []
      arr.map((v) => {
        if (Format.minus(ZeroPointBlock, Format.times(28800, v)) < 0) {
          pastBlockArr.push(0)
        }
        else {
          pastBlockArr.push(Format.integer(Format.minus(ZeroPointBlock, Format.times(28800, v))))
        }
      })
      setSevenDayBlock(pastBlockArr)
      console.log('过去七天天0点块高', pastBlockArr)
    }
  }, [numberBlock])
  useEffect(() => {
    let isUnmounted = false
    if (sevenDayBlock !== []) {
      (async () => {
        try {
          let sevenDayHash = []
          for (let v of sevenDayBlock) {
            console.log('七块高', v)
            let res = await api.rpc.chain.getBlockHash(parseInt(v))
            sevenDayHash.push(res.toString())

          }
          console.log('七天哈希', sevenDayHash)
          if (!isUnmounted) { setSevenDayHashBlock(sevenDayHash) }
        }
        catch (error) { console.log(error) }
      })();
    }
    return () => {
      isUnmounted = true
    }
  }, [sevenDayBlock])

  useEffect(() => {
    let isUnmounted = false
    if (sevenDayHashBlock !== [] && totalAssets !== '') {
      (async () => {
        let exchangeArr = []
        for (let i of totalAssets) {
          let arr = await SevenDayExchangeRate(i)
          exchangeArr.push(arr)
        }
        if (!isUnmounted) { setAssetsSevenDayExchangeRate(exchangeArr) }
      })();
    }
    return () => {
      isUnmounted = true
    }
  }, [sevenDayHashBlock, totalAssets])
  useEffect(() => {
    let arr = []
    if (assetsSevenDayExchangeRate.length !== 0) {
      assetsSevenDayExchangeRate.map((v) => {
        arr.push(DatingRate(v))
      })
      console.log('三种年化率', arr)
      if (arr.length !== 0) {
        setAnnualizedRate(arr)
      }

    }
  }, [assetsSevenDayExchangeRate])
  const DatingRate = (v) => {
    let result = []
    v.map((i, index) => {
      if (index !== 0) {
        if (parseFloat(v[index - 1]) === 0) {
          result.push('-1')
        }
        else {
          result.push(`${Format.exchangeRatedivide(i, v[index - 1]) - 1}`)
        }
      }
    })
    if (result.length !== 0) {
      return Format.AnnualizedRate(result.reduce((n, m) => Format.Plus(n, m)))
    }
    else {
      return 0
    }
  }

  async function SevenDayExchangeRate(i) {
    try {
      let arr = []
      for (let [index, elem] of new Map(sevenDayHashBlock.map((item, i) => [i, item]))) {
        const exchange = await api.query.exchange.exchangeRate.at(elem, i);
        arr.push(exchange.toJSON())
        // arr.push(exchange.toJSON()[0])
      }
      console.log('k线汇率', arr)
      return arr
    }
    catch (error) { console.log(error) }

  }

  return (
    <>
      {accountAssets.length === 0
        ? null
        : <UserAssets
          vTokenBalance={vTokenBalance}
          polkadotAccount={polkadotAccount}
          exchangeRate={exchangeRate}
          state={state}
          type='vToken'
          accountAssets={accountAssets}
          api={api}
          screen={screen}
        />}
      {totalAssets.length === 0
        ? null
        : <UserAssets
          api={api}
          polkadotAccount={polkadotAccount}
          state={state}
          type='Market'
          totalAssets={totalAssets}
          vTokens={vTokens}
          TokeninVariant={TokeninVariant}
          exAllChangeRate={exAllChangeRate}
          screen={screen}
          AnnualizedRate={AnnualizedRate}
        />
      }
    </>
  )
};
export default React.memo(HomePage)
