import React, { lazy, Suspense, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import Format from './Format'
import {
    Text, radius,
    Content, CardFlex, View, Flex, color, TextTypesetting, SVG
} from "./Styles"
import TokenLogo from "../components/TokenLogo"
export default ({ abbr, type, vTokenBalance, exchangeRate, vTokens, TokeninVariant, assetID, cost, income, exAllChangeRate }) => {
    let history = useHistory();
    const JumpRouting = () => {
        history.push("/v" + abbr);
    }
    return (
        <Flex h={7.5} jcsb aic w={75} px={4.25} style={{ boxSizing: 'border-box', cursor: "pointer" }}
            onClick={JumpRouting}>
            <Flex>
                <TokenLogo abbr={abbr} />
                <Flex jcc aic w={3.8125} mr={7.3}>
                    <Text scale={1.5} paragraph={1.6667} bold>
                        {`v${abbr}`}
                    </Text></Flex>
                <Flex w={14.6} pr={2} style={{ boxSizing: 'border-box' }} aic>
                    <TextTypesetting scale={1.125} bold maxWidth={10} paragraph={2.22223} mr={0.2}>
                        {type === 'Market' ? Format.FormattingNumbers(vTokens) : Format.FormattingNumbers(vTokenBalance)}
                        {/* {type === 'Market' ? numeral(vTokens).format('0,0') :numeral(vTokenBalance).format('0,0')} */}
                    </TextTypesetting>
                    <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                        {`v${abbr}`}
                    </Text>
                </Flex>
                <Flex w={10.4} aic>
                    <TextTypesetting scale={1.125} bold maxWidth={10} paragraph={2.22223} ml={0.1}>
                        {/* {type === 'Market' ? 1 :  numeral(NP.times(exchangeRate, vTokenBalance)).format('0,0')} */}
                        {type === 'Market' ? 2 :
                        exchangeRate===0?0:
                        Format.ride(Format.except(vTokenBalance),Format.Reciprocal(exchangeRate))}
                        {/* <Ride number1={vTokenBalance} number2={exchangeRate}/> */}
                    </TextTypesetting>
                    {type === 'Market' ? null :
                        <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                            {abbr}
                        </Text>}
                </Flex>
                <Flex w={9.4375} aic>
                    <Text scale={1.125} paragraph={2.22223} bold >
                        {type === 'Market' ?Format.decimalTwo(exAllChangeRate):
                            // Format.Profit(0, 0, 100000000000000, 0)}
                            Format.Profit(cost, income, vTokenBalance, exchangeRate)}
                    </Text>
                </Flex></Flex>
            {type === 'Market' ?
                <Flex w={10.3125}>
                    <TextTypesetting scale={1.125} bold maxWidth={10} paragraph={2.22223} mr={0.5}>
                        {Format.FormattingNumbers(TokeninVariant)}
                    </TextTypesetting>
                    <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                        {`${abbr}`}
                    </Text>
                </Flex> : null}
        </Flex>
    )
}
