// 主页内容
import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, Content, CardFlex, View, Flex, color } from "../components/Styles"
import MenuItem from "../components/MenuItem"
export default ({state}) => {
  const Menu = () => {
    return (
      <Flex px={4.375} h={4} aic  by={color.darkGray} style={{ boxSizing: 'border-box' }}>
        <MenuText context="Token"   Mw={15.125}/>
        <MenuText context="已发行" Mw={14.5}/>
        <MenuText context="年化率" Mw={10.3125}/>
        <MenuText context="兑换价" Mw={9.4375}/>
        <MenuText context="可兑换" Mw={9.75}/>
        <MenuText context="交易池" />
      </Flex>
    )
  }
  const MenuText = ({ context ,Mw}) => {
    return (
      <Text bold w={Mw} color="#8E8E95" ff="Noto Sans SC" bpld scale={1}
        paragraph={1.5}>{context}</Text>
    )
  }

  return (
    <>
      <Content fd="column" mt={1.5} mb={9}>
        <CardFlex column w={75}>
          <Flex h={8} aic pl={4}>
            <Text scale={2.25} bold paragraph={3} ff="Product Sans"  >vToken</Text>
          </Flex>
          <Menu />
          <MenuItem abbr="eos"/>
          <MenuItem abbr="dot"/>
          <MenuItem abbr="ksm"/>
        </CardFlex>
      </Content>
    </>
  )
}
