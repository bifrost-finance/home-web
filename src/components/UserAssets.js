import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, Content, CardFlex, View, Flex, color } from "../components/Styles"
import MenuItem from './MenuItem'
export default ({ state,type }) => {
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
        <MenuText context={type==='Market'?"已发行":'余额'} Mw={14.5} />
        <MenuText context={type==='Market'?"年化率":'可兑换'} Mw={10.3125} />
        <MenuText context={type==='Market'?"兑换价":'收益'} />
        </Flex>
        {type==='Market'? <MenuText context='交易池' Mw={10.3125}/>:null}
       
      </Flex>
    )
  }


  return (
    <>
      <Content fd="column" mt={1.5} mb={type === 'Market' ?9:2}>
        <CardFlex column w={75}>
          <Flex h={8} aic pl={4}>
  <Text scale={2.25} bold paragraph={3} ff="Product Sans"  >{type}</Text>
          </Flex>
          <Menu />
          <MenuItem abbr="eos" type={type}/>
          <MenuItem abbr="dot" type={type}/>
          {type==='Market'?<MenuItem abbr="ksm" type={type}/>:null}
          
        </CardFlex>
      </Content>
    </>
  )
};
