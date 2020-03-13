import React, { lazy, Suspense, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import {
    Text, radius,
    Content, CardFlex, View, Flex, color, TextTypesetting, SVG
} from "../components/Styles"
import TokenLogo from "../components/TokenLogo"
export default ({ abbr, type,vTokenBalance,exchangeRate,vTokens,vTokeninVariant }) => {

    let history = useHistory();
    const JumpRouting = () => {
        history.push("/v" + abbr);
    }
    // useEffect(()=>{setConvertible(vTokenBalance*exchangeRate)},[vTokenBalance,exchangeRate])
    return (
        <Flex h={7.5} jcsb aic w={75} px={4.25} style={{ boxSizing: 'border-box', cursor: "pointer" }}
            onClick={JumpRouting}>
            <Flex>
                <TokenLogo abbr={abbr} />
                <Flex jcc aic w={3.8125} mr={7.3}>
                    <Text scale={1.5} paragraph={1.6667} bold>
                        {`v${abbr}`}
                    </Text></Flex>
                <Flex w={14.6} pr={2} style={{ boxSizing: 'border-box' }}>
                    <TextTypesetting scale={1.125} bold maxWidth={10} paragraph={2.22223} mr={0.2}>
                        {type === 'Market' ? vTokens : vTokenBalance}
                    </TextTypesetting>
                    <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                        {`v${abbr}`}
                    </Text>
                </Flex>
                <Flex w={10.4}>
                    <TextTypesetting scale={1.125} bold maxWidth={10} paragraph={2.22223} mr={0.1}>
                        {type=== 'Market'?1:parseFloat(exchangeRate) *parseFloat(vTokenBalance)}
                    </TextTypesetting>
                    {type === 'Market' ? null :
                        <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                            {abbr}
                        </Text>}
                </Flex>
                <Flex w={9.4375}>
                    <Text scale={1.125} paragraph={2.22223} bold >
                        {abbr === "EOS" ? 2.33 : abbr === "DOT" ? 2.33 : 3.22}
                    </Text>
                </Flex></Flex>
            {type === 'Market' ?
                <Flex w={10.3125}>
                    <TextTypesetting scale={1.125} bold maxWidth={10} paragraph={2.22223} mr={0.5}>
                        {vTokeninVariant}
                    </TextTypesetting>
                    <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                        {`v${abbr}`}
                    </Text>
                </Flex> : null}
        </Flex>
    )
}
