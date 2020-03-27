import React, { useState, useEffect, useRef } from "react";
import { Flex, color, Text, CardFlex, View, SVG, Hidden, CoinIcon, Input, TextTypesetting } from "../components/Styles"
import { ReactComponent as Switch } from "../images/switch-25.svg";
import { ReactComponent as Ico } from "../images/ico-23.svg";
import { ReactComponent as Info } from "../images/info-27.svg";
import InputBox from './InputBox'
import Format from './Format'
export default ({ abbr, type, exChangeRate, TokeninVariant, TokenBalance, vTokenBalance, api,
    polkadotAccount, InVariantPool, vTokeninVariant,screen }) => {
    // 交易状态切换
    const [tradeSwitch, setTradeSwitch] = useState(true)
    const childRef = useRef()
    const FComp = () => {
        childRef.current.ClearingValue()

    }
    return (
        <CardFlex w={[20.5, 36, 42]} mb={[1.5, 3, 3]} column>
            <Flex w={[16, 33, 33]} h={[6, 9, 9]} bb={color.darkGray} aic pl={[2.25, 3, 3]} >
                <Text ff="Noto Sans SC" bold scale={3} paragraph={3}>
                    {type === 'Exchange' ? tradeSwitch ? "兑换" : '赎回' : "交易"}</Text>
            </Flex>
            <Flex mx={[2, 3, 3]} w={[16.5, 30, 36]} aic jcsb mt={[1, 3, 3]}>
                <Flex w={[12, 16, 16]} h={3} jcsb aic>
                    <Text bold scale={1.5} paragraph={2} ls={0.06}>
                        {tradeSwitch ? abbr : `v${abbr}`}
                    </Text>
                    <SVG svg={Ico} height={3} />
                    <Text bold scale={1.5} paragraph={2} ls={0.06}>
                        {tradeSwitch ? `v${abbr}` : abbr}
                    </Text>
                    <Hidden mobile> <Text scale={1.125} paragraph={2.5} color={color.gray}>
                        {tradeSwitch ? '即时' : '等待7天'}
                    </Text></Hidden>
                </Flex>
                <View style={{ cursor: 'pointer' }} onClick={() => { setTradeSwitch(!tradeSwitch); FComp() }}>
                    <SVG svg={Switch} height={3} />
                </View>
            </Flex>
            <Hidden tablet desktop>
                <Flex column pl={3}>
                    <Text scale={0.6} color={color.gray}>
                        {tradeSwitch ? '即时' : '等待7天'}
                    </Text>
                    <Text scale={0.05} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} color={color.gray}>
                        {type === "Exchange" ? `1 ${abbr} =${Format.decimalTwo(exChangeRate)} v${abbr}` : '不考虑手续费'}
                    </Text>
                </Flex>
            </Hidden>
            <InputBox cRef={childRef} type={type} abbr={abbr} tradeSwitch={tradeSwitch} exChangeRate={exChangeRate}
                TokenBalance={TokenBalance} vTokenBalance={vTokenBalance} vTokeninVariant={vTokeninVariant}
                api={api} polkadotAccount={polkadotAccount} InVariantPool={InVariantPool} 
                TokeninVariant={TokeninVariant}screen={screen} />
            <Flex h={2.5} w={[16.5, 30, 36]} aic jcsb mx={[2, 3, 3]} my={[1, 3, 3]}>
                <Text ff="Noto Sans SC" scale={1.125} paragraph={2.222} color={color.gray}>
                    {type === 'Exchange' ? "赎回中" : "交易池"}
                </Text>
                <Flex aic>
                    {type === 'Exchange' ?
                        <SVG svg={Info} height={1.5} /> : null}
                    <TextTypesetting maxWidth={[6, 10, 13]} ml={[0.2,0.5,0.5]} scale={1.125} paragraph={2.222} color={color.gray}>
                        {type === 'Exchange' ? `1111111111111111111111111111111.121` :
                            `${Format.decimalFormattingNumbers(TokeninVariant)}`}
                    </TextTypesetting>
                    <Text scale={1.125} paragraph={2.222} color={color.gray}>{`${abbr}`}</Text>
                </Flex>
            </Flex>

        </CardFlex>
    )
}