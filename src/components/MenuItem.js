import React, { lazy, Suspense, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import Format from './Format'
import { Button, Text, radius, Flex, color, TextTypesetting, Hidden } from "./Styles"
import TokenLogo from "../components/TokenLogo"
export default ({ abbr, type, vTokenBalance, exchangeRate, vTokens, TokeninVariant, assetID, cost, income, exAllChangeRate, screen }) => {
    let history = useHistory();
    const JumpRouting = () => {
        history.push("/v" + abbr);
    }
    const MenuDecompose = ({ tokenLogo, vabbr, menuname, context, abbr, abbrCompany }) => {
        return (
            <Flex w={[9.25, 13.8, 7.49]} h={[5.5, 7.5, 7.5]}
                aic={screen !== 'mobile' ? true : false}
                column={screen === 'mobile' ? true : false}>
                {tokenLogo ?
                    <Hidden mobile><TokenLogo abbr={abbr} /></Hidden> : null}
                <Hidden desktop tablet>
                    <Text ff='Noto Sans SC' bold scale={1} color={color.gray} paragraph={2.22223}>{menuname}</Text></Hidden>
                <Flex aic>
                    <TextTypesetting scale={1} paragraph={2.22223} bold bg={color.yellow} maxWidth={[5, 8.5, 3]}>
                        {context}
                    </TextTypesetting>
                    {vabbr ?
                        <Text scale={1.5} paragraph={1.6667} bold>
                            {`v${abbr}`}
                        </Text> : null}
                    {abbrCompany ? <Text bold scale={1} paragraph={2.22223} >
                        {abbr}
                    </Text> : null}
                </Flex>

            </Flex >
        )
    }
    return (
        <Flex h={[16.5, 7.5, 7.5]} w={[20.5, 75, 42]} px={[1, 3, 2]}
            column={screen === 'mobile' ? true : false}
            aic={screen !== 'mobile' ? true : false}
            style={screen === 'mobile' ? { boxSizing: 'border-box' } : { boxSizing: 'border-box', cursor: "pointer" }}
            onClick={screen === 'mobile' ? null : JumpRouting}>
            {/* TOKEN */}
            < Flex aic >
                <MenuDecompose tokenLogo menuname='vToken' context={abbr} abbr={abbr} />
                {type === 'Market' ? <MenuDecompose menuname='已发行' vabbr abbr={abbr} context={Format.FormattingNumbers(vTokens)} />
                    : <MenuDecompose menuname='余额' vabbr abbr={abbr} context={Format.FormattingNumbers(vTokenBalance)} />}
            </ Flex>
            <Flex aic>
                {type === 'Market' ? <MenuDecompose menuname='年化率' context={2} />
                    : <MenuDecompose menuname='可兑换' abbrCompany abbr={abbr}
                        context={exchangeRate === 0 ? 0 :
                            Format.ride(Format.except(vTokenBalance), Format.Reciprocal(exchangeRate))} />}
                {type === 'Market' ? <MenuDecompose menuname='兑换价' context={Format.decimalTwo(exAllChangeRate)} />
                    : <MenuDecompose menuname='收益' abbrCompany abbr={abbr} context={Format.Profit(cost, income, vTokenBalance, exchangeRate)} />}
            </Flex>
            <Flex aic>
                {type === 'Market' ?
                    <MenuDecompose menuname='交易池' context={Format.FormattingNumbers(TokeninVariant)} abbrCompany />
                    : null}
            </Flex>
            <Hidden desktop tablet>
                <Button w={16.5} h={3} mx={1}  Event={JumpRouting} text='查看' />
            </Hidden>
        </Flex >
    )
}
