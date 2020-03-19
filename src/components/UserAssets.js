import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, Content, CardFlex, View, Flex, color } from "../components/Styles"
import MenuItem from './MenuItem'
import MappingFile from '../pages/MappingFile.json'
export default ({ state, type, accountAssets, vTokenBalance ,exchangeRate,vTokens,totalAssets,exAllChangeRate,
  TokeninVariant}) => {
  // const [assetID, setaSsetID] = useState('')
  const Vtoken = () => {
    return (<>
      {accountAssets.map((i, index) => {
        return (<MenuItem abbr={MappingFile.ID[i]} key={index} type={type} assetID={i}
          vTokenBalance={vTokenBalance === ''|| vTokenBalance.length===0 ? 0 :
           vTokenBalance[accountAssets.indexOf(i)].balance.toString()} 
          cost={vTokenBalance === ''|| vTokenBalance.length===0 ? 0 :
           vTokenBalance[accountAssets.indexOf(i)].cost.toString()} 
          income={vTokenBalance === ''|| vTokenBalance.length===0 ? 0 :
           vTokenBalance[accountAssets.indexOf(i)].income.toString()} 
          exchangeRate={exchangeRate === ''||exchangeRate.length===0 ? 0 :
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
       return (<MenuItem abbr={MappingFile.ID[i]} key={index} type={type} assetID={i} 
          vTokens={vTokens === ''|| vTokens.length===0 ? 0 :vTokens[i].vtoken.totalSupply.toString()} 
          TokeninVariant={TokeninVariant === ''|| TokeninVariant.length===0 ? 0 :TokeninVariant[i].toJSON()[0]} 
          exAllChangeRate={exAllChangeRate === ''||exAllChangeRate.length===0 ? 0 :exAllChangeRate[i].toJSON()[0]} 
          />)
      })}
    </>)
  }
  const MenuText = ({ context, Mw }) => {
    return (
      <Text bold w={Mw} color="#8E8E95" ff="Noto Sans SC" bpld scale={1}
        paragraph={1.5}>{context}</Text>
    )
  }
  const Menu = () => {
    return (
      <Flex jcsb px={4.375} h={4} aic by={color.darkGray} style={{ boxSizing: 'border-box' }}>
        <Flex>
          <MenuText context="Token" Mw={15.125} />
          <MenuText context={type === 'Market' ? "已发行" : '余额'} Mw={14.5} />
          <MenuText context={type === 'Market' ? "年化率" : '可兑换'} Mw={10.3125} />
          <MenuText context={type === 'Market' ? "兑换价" : '收益'} />
        </Flex>
        {type === 'Market' ? <MenuText context='交易池' Mw={10.3125} /> : null}

      </Flex>
    )
  }


  return (
    <>
      <Content fd="column" mt={1.5} mb={type === 'Market' ? 9 : 2}>
        <CardFlex column w={75}>
          <Flex h={8} aic pl={4}>
            <Text scale={2.25} bold paragraph={3} ff="Product Sans"  >{type}</Text>
          </Flex>
          <Menu />
          {type === 'Market' ?
          <Market /> :
            <Vtoken />
          }


        </CardFlex>
      </Content>
    </>
  )
};
