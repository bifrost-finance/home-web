import React, { useState, useEffect } from "react";
import { Flex, color, Text, SVG, radius, TextTypesetting, View } from "./Styles"
import { ReactComponent as SingleArrowhead } from "../images/SingleArrowhead.svg";
import Format from './Format'
import MappingFile from '../pages/MappingFile.json'
import { web3FromAddress } from '@polkadot/extension-dapp';
export default ({ type, tradeSwitch, inputValue, transformation, abbr, exChangeRate, redeemDate, api, polkadotAccount }) => {
// 交易池交易
    const SubmissionSwap = () => {
        if (tradeSwitch) {
            SwapTokanToVToken()
        }
        else {
            SwapVTokanToToken()
        }
    }
    // 兑换交易
    const SubmissionExchange = () => {
        if (tradeSwitch) {
            ExchangeTokanToVToken()
        }
        else {
            ExchangeVTokanToToken()
        }
    }
    // 交易池VToken Token
    async function SwapVTokanToToken() {
        let token_amount = Format.exceptride(inputValue)
        let assets_ID = MappingFile.TOKEN[abbr]
        console.log('input值', token_amount, assets_ID)
        try {
            const injector = await web3FromAddress(polkadotAccount);
            api.setSigner(injector.signer)
            await api.tx.swap.swapVTokenTotoken(token_amount, assets_ID)
                // api.tx.exchange.exchangeTokenToVtoken(1000000000000,0)
                .signAndSend(polkadotAccount, ({ events = [], status }) => {
                    if (status.isFinalized) {
                        console.log('以上链')
                    } else {
                        console.log('Status of destroy: ' + status.type)
                    }
                    events.forEach(({ phase, event: { data, method, section } }) => {
                        console.log(method)
                        if (method === 'ExtrinsicSuccess') {
                            console.log('成功')
                        }
                        else if (method === 'ExtrinsicFailed') {
                            console.log('失败')
                        }
                        else { console.log('其他') }
                    })
                })
        }
        catch (error) {

        }
    }
    async function SwapTokanToVToken() {
        let token_amount = Format.exceptride(inputValue)
        let assets_ID = MappingFile.TOKEN[abbr]
        console.log('input值', token_amount, assets_ID)
        try {
            const injector = await web3FromAddress(polkadotAccount);
            api.setSigner(injector.signer)
            await api.tx.swap.swapTokenToVtoken(token_amount, assets_ID)
                // api.tx.exchange.exchangeTokenToVtoken(1000000000000,0)
                .signAndSend(polkadotAccount, ({ events = [], status }) => {
                    if (status.isFinalized) {
                        console.log('以上链')
                    } else {
                        console.log('Status of destroy: ' + status.type)
                    }
                    events.forEach(({ phase, event: { data, method, section } }) => {
                        console.log(method)
                        if (method === 'ExtrinsicSuccess') {
                            console.log('成功')
                        }
                        else if (method === 'ExtrinsicFailed') {
                            console.log('失败')
                        }
                        else { console.log('其他') }
                    })
                })
        }
        catch (error) {

        }
    }
    // 0 v100 90 1 80 70 2 60 50
    useEffect(() => { console.log('用户', polkadotAccount) }, [polkadotAccount])
    async function ExchangeTokanToVToken() {
        let token_amount = Format.exceptride(inputValue)
        let assets_ID = MappingFile.TOKEN[abbr]
        console.log('input值', token_amount, assets_ID)
        try {
            const injector = await web3FromAddress(polkadotAccount);
            api.setSigner(injector.signer)
            await api.tx.exchange.exchangeTokenToVtoken(token_amount, assets_ID)
                // api.tx.exchange.exchangeTokenToVtoken(1000000000000,0)
                .signAndSend(polkadotAccount, ({ events = [], status }) => {
                    if (status.isFinalized) {
                        console.log('以上链')
                    } else {
                        console.log('Status of destroy: ' + status.type)
                    }
                    events.forEach(({ phase, event: { data, method, section } }) => {
                        console.log(method)
                        if (method === 'ExtrinsicSuccess') {
                            console.log('成功')
                        }
                        else if (method === 'ExtrinsicFailed') {
                            console.log('失败')
                        }
                        else { console.log('其他') }
                    })
                })
        }
        catch (error) {

        }
    }
    async function ExchangeVTokanToToken() {
        let token_amount = Format.exceptride(inputValue)
        let assets_ID = MappingFile.TOKEN[abbr]
        console.log('input值', token_amount, assets_ID)
        try {
            const injector = await web3FromAddress(polkadotAccount);
            api.setSigner(injector.signer)
            await api.tx.exchange.exchangeVtokenToToken(token_amount, assets_ID)
                // api.tx.exchange.exchangeTokenToVtoken(1000000000000,0)
                .signAndSend(polkadotAccount, ({ events = [], status }) => {
                    if (status.isFinalized) {
                        console.log('Successful destroy of ' + ' vEOS')
                    } else {
                        console.log('Status of destroy: ' + status.type)
                    }

                    events.forEach(({ phase, event: { data, method, section } }) => {
                        console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString())
                        if (method === 'ExtrinsicSuccess') {
                            console.log('成功')
                        }
                        else if (method === 'ExtrinsicFailed') {
                            console.log('失败')
                        }

                    })
                })
        }
        catch (error) {

        }
    }
    const ContextItem = ({ left, right, maxWidth, bb, svg }) => {
        return (
            <Flex w={30} h={5} aic jcsb bb={bb} style={{ position: "relative" }}>
                <TextTypesetting maxWidth={maxWidth} scale={1.125} mr={0.5}>{left}</TextTypesetting>
                {svg ? <View style={{ position: "absolute", left: '14em', top: '1.5em' }}>
                    <SVG svg={SingleArrowhead} height={2} /></View> : null}
                <TextTypesetting maxWidth={maxWidth} scale={1.125} >{right}</TextTypesetting>
            </Flex>
        )
    }
    return (<>
        {type === 'Exchange' ? <ContextItem svg maxWidth={10}
            left={tradeSwitch ? `${Format.decimalTwo(inputValue)} ${abbr}` : `${Format.decimalTwo(inputValue)} v${abbr}`}
            right={tradeSwitch ? `${Format.decimalTwo(transformation)} v${abbr}` : `${Format.decimalTwo(transformation)} ${abbr}`} bb={color.darkGray} /> : null}
        {
            type === 'Exchange' ? null : <ContextItem left='方向'
                right={tradeSwitch?`${abbr} -> v${abbr}`:
            `v${abbr} -> ${abbr}` } bb={color.darkGray} />
        }
        {
            type === 'Exchange' ? null :
                <ContextItem left='市场价' right='2.03' bb={color.darkGray} />
        }
        <ContextItem left='兑换价' bb={type === 'Exchange' && tradeSwitch ? null : color.darkGray}
            right={type === 'Exchange' ? tradeSwitch ? Format.decimalTwo(exChangeRate) :
                exChangeRate === 0 ? 0 : Format.Reciprocal(exChangeRate)
                : 0}
        />
        {
            type === 'Exchange' && !tradeSwitch ? <ContextItem left='预计到账时间'
                right={redeemDate} /> : null
        }
        {
            type === 'Exchange' ? null :
                <ContextItem left='差价' right='-0.03' />
        }
        <Flex jcc w={30} mt={3}>
            <Flex onClick={type === 'Exchange' ? SubmissionExchange : SubmissionSwap}
                aic jcc bg={color.blue} r={radius.xsm} w={14.0625} h={4} style={{ cursor: 'pointer' }}>
                <Text ff="Noto Sans SC" scale={1.5} paragraph={2} ls={0.0416} color={color.white}
                >
                    {type === 'Exchange' ? tradeSwitch ? "确认兑换" : '确认赎回' : "确认交易"}</Text>
            </Flex>
        </Flex>
    </>)
}