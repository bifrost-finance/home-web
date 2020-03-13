import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, Content, CardFlex, View, Flex, color } from "../components/Styles"
import MenuItem from './MenuItem'
import MappingFile from '../pages/MappingFile'
export default ({ state, type, accountAssets, vTokenBalance ,exchangeRate,vTokens,totalAssets,
  vTokeninVariant}) => {
  // const [assetID, setaSsetID] = useState('')
  const Vtoken = () => {
    return (<>
      {accountAssets.map((i, index) => {
          if(vTokenBalance !== ''){

            console.log('bv',vTokenBalance[accountAssets.indexOf(i)].toString() / 1000000000000)
          }
        return (<MenuItem abbr={MappingFile[i]} key={index} type={type}
          vTokenBalance={vTokenBalance === '' ? 0 : vTokenBalance[accountAssets.indexOf(i)].toString() / 1000000000000} 
          exchangeRate={exchangeRate === '' ? 0 : exchangeRate[accountAssets.indexOf(i)].toJSON()[0][1]}  
          />)
      })}
    </>)
  }
  const Market = () => {
    return (<>
      {totalAssets.map((i, index) => {
    //     if(vTokens !== '' && vTokens.length!==0 )
    // console.log('测试',)
       return (<MenuItem abbr={MappingFile[i]} key={index} type={type} 
          vTokens={vTokens === ''|| vTokens.length===0 ? 0 :vTokens[i].vtoken.totalSupply.toString()/1000000000000} 
          vTokeninVariant={vTokeninVariant === ''|| vTokeninVariant.length===0 ? 0 :vTokeninVariant[i].toJSON()[1]/1000000000000} 
          
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
