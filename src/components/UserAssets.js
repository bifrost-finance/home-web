import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, Content, CardFlex, View, Flex, color, Hidden, } from "../components/Styles"
import MenuItem from './MenuItem'
import MappingFile from '../pages/MappingFile.json'
import TokenLogo from './TokenLogo'
import Format from './Format'
export default ({ state, type, accountAssets, vTokenBalance, exchangeRate, vTokens, totalAssets, exAllChangeRate,
  TokeninVariant, screen }) => {
  // vtoken 选中的
  const [vtokenSelectionAbbr, setVtokenSelectionAbbr] = useState('')
  // market 选中的
  const [selectionAbbr, setSelectionAbbr] = useState('')
  // const [assetID, setaSsetID] = useState('')
  useEffect(() => {
    if (accountAssets !== [] && type === 'vToken') {
      setVtokenSelectionAbbr(accountAssets[0])
    }
  }, [accountAssets, type])
  useEffect(() => {
    if (totalAssets !== [] && type === 'Market') {
      setSelectionAbbr(totalAssets[0])
      console.log('asset zhonglei', totalAssets)
    }
  }, [totalAssets, type])
  const Vtoken = () => {
    return (<>
      {accountAssets.map((i, index) => {
        return (<MenuItem screen={screen} abbr={MappingFile.ID[i]} key={index} type={type} assetID={i}
          vTokenBalance={vTokenBalance === '' || vTokenBalance.length === 0 ? 0 :
            vTokenBalance[accountAssets.indexOf(i)].balance.toString()}
          cost={vTokenBalance === '' || vTokenBalance.length === 0 ? 0 :
            vTokenBalance[accountAssets.indexOf(i)].cost.toString()}
          income={vTokenBalance === '' || vTokenBalance.length === 0 ? 0 :
            vTokenBalance[accountAssets.indexOf(i)].income.toString()}
          exchangeRate={exchangeRate === '' || exchangeRate.length === 0 ? 0 :
            exchangeRate[accountAssets.indexOf(i)].toJSON()[0]}
        />)
      })}
    </>)
  }
  const Market = () => {
    return (<>
      {totalAssets.map((i, index) => {
        //     if(vTokens !== '' && vTokens.length!==0 )
        // console.log('测试',)
        return (<MenuItem screen={screen} abbr={MappingFile.ID[i]} key={index} type={type} assetID={i}
          vTokens={vTokens === '' || vTokens.length === 0 ? 0 : vTokens[i].vtoken.totalSupply.toString()}
          TokeninVariant={TokeninVariant === '' || TokeninVariant.length === 0 ? 0 : TokeninVariant[i].toJSON()[0]}
          exAllChangeRate={exAllChangeRate === '' || exAllChangeRate.length === 0 ? 0 : exAllChangeRate[i].toJSON()[0]}
        />)
      })}
    </>)
  }
  const MobileMarket = () => {
    if (selectionAbbr !== '') {
      return (<MenuItem screen={screen} abbr={MappingFile.ID[selectionAbbr]} type={type} assetID={selectionAbbr}
        vTokens={vTokens === '' || vTokens.length === 0 ? 0 : vTokens[selectionAbbr].vtoken.totalSupply.toString()}
        TokeninVariant={TokeninVariant === '' || TokeninVariant.length === 0 ? 0 : TokeninVariant[selectionAbbr].toJSON()[0]}
        exAllChangeRate={exAllChangeRate === '' || exAllChangeRate.length === 0 ? 0 : exAllChangeRate[selectionAbbr].toJSON()[0]}
      />)
    }
    else {
      return null
    }
  }
  const MobileVtoken = () => {
    if (vtokenSelectionAbbr !== '') {
      return (<MenuItem screen={screen} abbr={MappingFile.ID[vtokenSelectionAbbr]} type={type} assetID={vtokenSelectionAbbr}
        vTokenBalance={vTokenBalance === '' || vTokenBalance.length === 0 ? 0 :
          vTokenBalance[accountAssets.indexOf(vtokenSelectionAbbr)].balance.toString()}
        cost={vTokenBalance === '' || vTokenBalance.length === 0 ? 0 :
          vTokenBalance[accountAssets.indexOf(vtokenSelectionAbbr)].cost.toString()}
        income={vTokenBalance === '' || vTokenBalance.length === 0 ? 0 :
          vTokenBalance[accountAssets.indexOf(vtokenSelectionAbbr)].income.toString()}
        exchangeRate={exchangeRate === '' || exchangeRate.length === 0 ? 0 :
          exchangeRate[accountAssets.indexOf(vtokenSelectionAbbr)].toJSON()[0]}
      />)
    }
    else {
      return null
    }
  }
  const MarketLogo = () => {
    return (<>
      <Flex w={20.5} h={6} aic jcsa>
        {totalAssets.map((i, index) => {
          return (<Flex key={index} onClick={() => { setSelectionAbbr(i) }}><TokenLogo abbr={MappingFile.ID[i]} /></Flex>)
        })}</Flex>
    </>)
  }
  const VtokenLogo = () => {
    return (<>
      <Flex w={20.5} h={6} aic jcsa>
        {accountAssets.map((i, index) => {
          return (
            <Flex key={index} onClick={() => { setVtokenSelectionAbbr(i) }}>
              <TokenLogo abbr={MappingFile.ID[i]} key={index} />
            </Flex>
          )
        })}</Flex>
    </>)
  }
  const MenuText = ({ context }) => {
    return (
      <Text bold w={[0, 11.1, 6.05]} color="#8E8E95" ff="Noto Sans SC" scale={1.5}
        paragraph={1.5}>{context}</Text>
    )
  }
  const Menu = () => {
    return (
      <Flex px={[0, 3, 2]} h={4} aic by={color.darkGray} style={{ boxSizing: 'border-box' }}>
        <Flex>
          <MenuText context="Token" />
          <MenuText context={type === 'Market' ? "已发行" : '余额'} />
          <MenuText context={type === 'Market' ? "年化率" : '可兑换'} />
          <MenuText context={type === 'Market' ? "兑换价" : '收益'} />
        </Flex>
        {type === 'Market' ? <MenuText context='交易池' /> : null}

      </Flex>
    )
  }


  return (
    <>
      <Content fd="column" w={[20.5, 75, 42]} mb={type === 'Market' ? 9 : 2}>
        <CardFlex column w={[20.5, 75, 42]}>
          <Flex h={[6, 8, 8]} aic pl={[1, 4, 4]}>
            <Text scale={2.25} bold paragraph={3} ff="Product Sans"  >{type}</Text>
          </Flex>
          <Hidden desktop tablet >
            {type === 'Market' ?
              <MarketLogo /> :
              <VtokenLogo />
            }
            {type === 'Market' ?
              <MobileMarket /> :
              <MobileVtoken />
            }
          </Hidden>
          <Hidden mobile><Menu />
            {type === 'Market' ?
              <Market /> :
              <Vtoken />
            }
          </Hidden>

        </CardFlex>
      </Content>
    </>
  )
};
