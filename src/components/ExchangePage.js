import React, { useState, useEffect } from "react";
import { Flex, Content, color, Text, CardFlex, View, SVG, radius, CoinIcon, Input, TextTypesetting } from "../components/Styles"
import { ReactComponent as Switch } from "../images/switch-25.svg";
import { ReactComponent as Ico } from "../images/ico-23.svg";
import { ReactComponent as Info } from "../images/info-27.svg";
import InputBox from './InputBox'
export default ({ name, type }) => {
    // 交易状态切换
    const [tradeSwitch, setTradeSwitch] = useState(true)
    return (
        <CardFlex w={36} h={41.5} mb={3} column>
            <Flex w={36} h={9} bb={color.darkGray} aic>
                <Text ml={2} ff="Noto Sans SC" bold scale={1.5} paragraph={3}>
                    {type === 'Exchange' ? tradeSwitch ? "兑换" : '赎回' : "交易"}</Text>
            </Flex>
            <Flex mx={3} w={30} aic jcsb mt={3}>
                <Flex w={15} h={3} jcsb aic>
                    <Text bold scale={1.5} paragraph={2} ls={0.06}>
                        {tradeSwitch ? name === "eos" ? "EOS" : name === "dot" ? "DOT" : "KSM" :
                            name === "eos" ? "vEOS" : name === "dot" ? "vDOT" : "vKSM"}
                    </Text>
                    <SVG svg={Ico} height={3} />
                    <Text bold scale={1.5} paragraph={2} ls={0.06}>
                        {tradeSwitch ? name === "eos" ? "vEOS" : name === "dot" ? "vDOT" : "vKSM" :
                            name === "eos" ? "EOS" : name === "dot" ? "DOT" : "KSM"}
                    </Text>
                    <Text scale={1.125} paragraph={2.5} color={color.gray}>
                        {tradeSwitch ? '即时' : '等待7天'}
                    </Text></Flex>
                <View style={{ cursor: 'pointer' }} onClick={() => { setTradeSwitch(!tradeSwitch) }}>
                    <SVG svg={Switch} height={3} />
                </View>
            </Flex>

            <InputBox type={type} name={name} tradeSwitch={tradeSwitch} />
            <Flex h={5} w={36} aic jcsb px={3} style={{ boxSizing: 'border-box' }} >
                <Text ff="Noto Sans SC" scale={1.125} paragraph={2.222} color={color.gray}>
                    {type === 'Exchange' ? "赎回中" : "交易池"}
                </Text>
                <Flex aic>
                    {type === 'Exchange' ?
                    <SVG svg={Info} height={1.5}/>: null}
                    <Text ml={1} scale={1.125} paragraph={2.222} color={color.gray}>11.121DOT</Text></Flex>
            </Flex>

        </CardFlex>
    )
}