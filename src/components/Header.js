// 头部组件
import React, { useEffect, useState, useContext } from "react";
import { Flex, Content, color, Text, CardFlex, View, Arrow } from "./Styles"
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'
import { StateContext } from '../App'
import * as logo from "../images/13-5.png"
export default (({ ToggleUnitValue, state, unitState,SwitchingUnit }) => {
    const { t, i18n } = useTranslation();
      // 当前路由
  const [path, setPath] = useState("")
      // 获取当前路由
  const location = useLocation()
  let link = location.pathname
  useEffect(() => {
    setPath(link)
    console.log(path)
    window.scrollTo(0, 0)
  }, [link])
    

    const AddressLogin = () => {
        return (
            <Flex aic> <Text>
                {path === '/Detailseos' ? 'EOS地址：' : path === '/Detailsdot' ? 'DOT地址：' : "KSM地址："}</Text>
                <Text style={{ cursor: 'pointer' }} ml={1.1875} color={color.blue} ff="Noto Sans SC" fw={500} paragraph={1.5} ls={0.1}>登录</Text>
            </Flex>
        )
    }
    const Card = ({ text, value, numberColor }) => {
        return (
            <CardFlex column jcsb w={23.5} h={10} pt={2} px={2.5} >
                <Text ff="Noto Sans SC" paragraph={1.5} fw={500} ls={0.06}>{text}</Text>
                <Text bold paragraph={3} scale={2} color={numberColor}>$123456789</Text>
            </CardFlex>
        )
    }
    const Company = () => {
        return (
            <Flex h={2.5} aic >
                <Flex style={{ position: "relative" }} w={4}>
                    <Text ff="Noto Sans SC" paragraph={1.5} fw={500} ls={0.06} mr={0.4375}>
                        {state ? 'USD' : 'TOKEN'}
                    </Text>
                    {unitState ?
                        <Text style={{ position: "absolute", bottom: '-1.5em', right: '0', cursor: 'pointer' }}
                            ff="Noto Sans SC" paragraph={1.5} fw={500} ls={0.06} mr={0.4375}
                            onClick={ToggleUnitValue}
                        >
                            {state ? 'TOKEN' : 'USD'}
                        </Text>
                        : null}
                </Flex>
                <Flex column onClick={SwitchingUnit} style={{ cursor: 'pointer' }}>
                    <Arrow bt br />
                    <Arrow bb bl />
                </Flex>
            </Flex>
        )
    }
    const LoginText = () => {
        let Login = `${12345678910}`
        let shortLogin1 = Login.substring(0, 4);
        let LogLength = Login.length;
        let shortLogin2 = Login.substring(LogLength - 4, LogLength);
        return (
            <Text ff="Noto Sans SC" paragraph={1.5} fw={500} ls={0.1} w={6.4375} mr={1}>
                {`${shortLogin1}...${shortLogin2}`}</Text>
        )
    }
    return (
        <Content h={10} mt={4.5}>
            <Flex h={10} column jcsb >
                <Flex column h={6.4375} jcsb>
                    <img src={logo} style={{ width: "10.625em", height: "2.5em" }} />
                    <Flex jcsb aic>
                        <LoginText />
                        {path === '' || path === '/' ? <Company /> : null} </Flex>
                    {path === '' || path === '/' ? null : <AddressLogin />}
                </Flex>
            </Flex>
            <Card text="总资产" value="assets" numberColor="#002DC2" />
            <Card text="收益" value="profit" numberColor="#ED635E" />

        </Content>

    )
})