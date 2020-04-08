// 头部组件
import React, { useEffect, useState, useMemo } from "react";
import { Flex, Content, color, Text, CardFlex, TextTypesetting, Arrow, Hidden } from "./Styles"
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'
import Format from './Format'
import * as logo from "../images/13-5.png"
import styled from "styled-components";
const Header = ({ account, polkadotAccount, ToggleUnitValue, state, unitState, SwitchingUnit, accountAssets, screen, api }) => {
    const { t, i18n } = useTranslation();
    // 用户资产vToken余额
    const [vTokenBalance, setvTokenBalance] = useState('')
    // 资产汇率
    const [exchangeRate, setExchangeRate] = useState('')
    // 当前路由
    const [path, setPath] = useState("")
    // 获取当前路由
    const location = useLocation()
    let link = location.pathname
    useEffect(() => {
        setPath(link)
        window.scrollTo(0, 0)
    }, [link])
    useEffect(() => {
        if (api !== null && polkadotAccount !== '' && accountAssets !== []) {
            FindVToken()
        }
    }, [api, polkadotAccount, accountAssets])
    async function FindVToken() {
        console.log('头部',accountAssets)
        // let exchangeRateParameter = []
        // let vbalancesParameter = []
        // accountAssets.map((v) => {
        //     exchangeRateParameter.push([v])
        //     vbalancesParameter.push([v, 'vToken', polkadotAccount])
        // })
        // try {
        //     await Promise.all([
        //         api.query.assets.accountAssets.multi(vbalancesParameter, (res) => {
        //             console.log('Vtoken 余额数组', res)
        //             setvTokenBalance(res)
        //         }),
        //         api.query.exchange.exchangeRate.multi(exchangeRateParameter, (res) => {
        //             res.map((v) => { console.log('汇率assetID', v.toJSON()[0]) })
        //             console.log('汇率数组', res)
        //             setExchangeRate(res)
        //         }),
        //     ])

        // }
        // catch (error) {
        //     console.log(error);
        // }
    }
    const AddressLogin = () => {
        return (
            <Flex aic jcsb w={9}> <Text>
                {path === '/veos' ? 'EOS地址：' : path === '/vdot' ? 'DOT地址：' : "KSM地址："}</Text>
        <Text style={{ cursor: 'pointer' }} ml={1.1875} color={color.blue} ff="Noto Sans SC" fw={500} paragraph={1.5} ls={0.1}>登录</Text>
            </Flex>
        )
    }
    const Profit = () => {
        let ProfitValue = []
        vTokenBalance.map((v, index) => {
            ProfitValue.push(
                Format.Profit(v.toJSON().cost, v.toJSON().income, v.toJSON().balance, exchangeRate[index].toJSON()[0]))
        })
        return (<>
            ${Format.format(ProfitValue.reduce((n, m) => Format.Plus(n, m)))}
        </>)
    }
    const Asset = () => {
        let AssetValue = []
        vTokenBalance.map((v, index) => {
            AssetValue.push(
                Format.except(v.toJSON().balance))
        })
        return (<>
            ${Format.format(AssetValue.reduce((n, m) => Format.Plus(n, m)))}
        </>)
    }
    const Card = ({ text, value, numberColor, special }) => {
        return (
            <CardFlex bg={color.gray} column jcsb w={special ? [20.5, 23.5, 42] : [20.5, 23.5, 23.5]} h={[8.5, 10, 10]} pt={2} px={2.5} mb={[1.5, 3, 3]} >
                <Text ff="Noto Sans SC" paragraph={1.5} fw={500} ls={0.06}>{text}</Text>
                <TextTypesetting bold paragraph={3} scale={5} color={numberColor} maxWidth={22}>
                    {value === 'assets' ?
                        vTokenBalance === '' || vTokenBalance.length === 0 ? 0 :
                            <Asset />
                        : vTokenBalance === '' || vTokenBalance.length === 0 || exchangeRate === '' || exchangeRate.length === 0 ? 0 :
                            <Profit />
                    }
                </TextTypesetting>
            </CardFlex>
        )
    }
    const Company = () => {
        return (
            <Flex h={2.5} aic >
                <Flex style={{ position: "relative" }} >
                    <form >
                        <Select onChange={ToggleUnitValue} >
                            <option value="TOKEN">TOKEN</option>
                            <option value="USD">USD</option>
                        </Select>
                    </form>
                </Flex>

            </Flex>
        )
    }
    const LoginText = () => {
        let Login = `${account}`
        let shortLogin1 = Login.substring(0, 4);
        let LogLength = Login.length;
        let shortLogin2 = Login.substring(LogLength - 4, LogLength);
        return (
            <Text ff="Noto Sans SC" paragraph={1.5} fw={500} ls={0.1} mr={1}>
                {`${shortLogin1}...${shortLogin2}`}</Text>
        )
    }
    return (
        <Content mt={[2.5, 4.5, 4.5]} w={[20.5, 75, 42]}>
            <Flex column >
                <Flex jcsb={screen === 'mobile' ? false : true} jcc={screen !== 'mobile' ? false : true}
                    w={[20.5, 75, 42]}>
                    <Flex h={[8.5, 10, 10]} column jcsb={screen === 'mobile' ? false : true} jcc={screen !== 'mobile' ? false : true} >
                        <Flex column h={6.4375} jcsb={screen === 'mobile' ? false : true} jcc={screen !== 'mobile' ? false : true}>
                            <img src={logo} style={{ width: "10.625em", height: "2.5em" }} />
                            <Flex jcsb={screen === 'mobile' ? false : true} jcc={screen !== 'mobile' ? false : true} aic>
                                <LoginText />
                                {path === '' || path === '/' ? <Company /> : null} </Flex>
                            {path === '' || path === '/' ? null : <AddressLogin />}
                        </Flex>
                    </Flex>
                    <Hidden mobile tablet> <Card text="总资产" value="assets" numberColor="#002DC2" /></Hidden>
                    <Hidden mobile > <Card text="收益" value="profit" numberColor="#ED635E" /></Hidden>
                </Flex>
                <Hidden tablet desktop >  <Card text="收益" value="profit" numberColor="#ED635E" /></Hidden>
                <Hidden desktop> <Card special={screen === 'Tablet' ? true : false} text="总资产" value="assets" numberColor="#002DC2" /></Hidden>

            </Flex>
        </Content>

    )
};
export default React.memo(Header)
export const Select = styled.select`
 cursor: pointer;   
 outline:none;   
 backgrounk-color:#555;
 border-color:transparent;
`;