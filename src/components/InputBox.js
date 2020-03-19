import React, { useState, useEffect, useImperativeHandle } from "react";
import { Flex, Content, color, Text, CardFlex, View, SVG, radius, CoinIcon, Input, TextTypesetting } from "./Styles"
import { ReactComponent as IconV } from "../images/V-39.svg";
import Modal from "./Modal"
import Format from './Format'
import Children from './Children'
const InputBox = ({ type, abbr, tradeSwitch, exChangeRate, TokenBalance, vTokenBalance, cRef, api, polkadotAccount }) => {
    // 输入框切换
    const [inputSwitching, setInputSwitching] = useState(true)
    //  输入框值
    const [inputValue, setInputValue] = useState("")
    //    输出框值
    const [transformation, setTransformation] = useState("")
    // 模态框
    const [showModal, setShowModal] = useState(false)
    const [redeemDate, setRedeemDate] = useState('')
    // 获取输入框值
    const FocusEvents = (e) => {
        setInputValue(e.target.value.replace(/\-/g, ""))

    }
    useEffect(() => {
        console.log('输出', transformation)
    }, [transformation])
    useImperativeHandle(cRef, () => ({
        ClearingValue: () => {
            setTransformation('')
            setInputValue('')
            setInputSwitching(true)
            console.log('调用子组件方法')
        }
    }))
    useEffect(() => {
        console.log('dot', TokenBalance)
    }, [TokenBalance])
    const ExchangeAssignment = () => {
        if (type === 'Exchange') {
            setTransformation(Format.ride(inputValue, exChangeRate))
        }
        else if (type === 'Trade') {
            setTransformation(0)
        }
    }
    const TradeAssignment = () => {
        if (type === 'Exchange') {
            if (exChangeRate === 0) {
                setTransformation(0)
            }
            else {
                setTransformation(Format.ride(inputValue, Format.backwards(exChangeRate)))
            }
        }
        else if (type === 'Trade') {
            setTransformation(0)
        }
    }
    // 转换后的值
    useEffect(() => {
        console.log('input', inputValue)
        if (inputValue !== '') {
            if ((inputSwitching && tradeSwitch) || (tradeSwitch === false && inputSwitching === false)) {
                ExchangeAssignment()
            }
            else if ((inputSwitching === false && tradeSwitch) || (tradeSwitch === false && inputSwitching)) {
                TradeAssignment()
            }
        }
        else if (inputValue === '') {
            setTransformation("")
        }

    }, [inputValue])
    const ModalBoxEvents = () => {
        setShowModal(true)
        let Date1 = new Date();
        let now = new Date(Date1.getTime() + 24 * 7 * 60 * 60 * 1000)
        let Minutes = now.getMinutes()
        let Seconds = now.getSeconds()
        if (Minutes < 10) {
            Minutes = `0${Minutes}`
        }
        if (Seconds < 10) {
            Seconds = `0${Seconds}`
        }
        setRedeemDate(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${Minutes}:${Seconds}`)
    }
    const InputSwitching = () => {
        setInputSwitching(!inputSwitching)
        setTransformation("")
        setInputValue('')

    }

    return (<>
        <Flex mx={4.5} jcsb mt={1}>
            <Flex>
                <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} mr={0.5}>
                    输入</Text>
                <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} color={color.gray}>

                    {type === "Exchange" ? `1 ${abbr} =${Format.decimalTwo(exChangeRate)} v${abbr}` : 0}
                </Text></Flex>
            <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}>
                {`余额：${Format.decimalFormattingNumbers(TokenBalance)}${abbr}`}</Text>
        </Flex>
        <Flex onClick={inputSwitching ? null : InputSwitching} aic jcsb my={0.5}
            w={inputSwitching ? 30 : 26.9375} mx={inputSwitching ? 3 : 4.5} h={inputSwitching ? 5 : 3}
            style={inputSwitching ? { boxSizing: 'border-box' } : { cursor: 'pointer' }} pl={inputSwitching ? 1.25 : null} pr={inputSwitching ? 1.5 : null}
            b={inputSwitching ? color.fontGray : null} bg={inputSwitching ? color.washedGray : null} r={inputSwitching ? radius.xsm : null}>
            {tradeSwitch ? <CoinIcon abbr={abbr} bg={color.white}
                w1={2.5} h1={2.5} w2={2} h2={2} h={2} /> :
                <Flex w={2} h={2} aic jcc >
                    <Flex aic jcc w={1.6669} h={1.6669} style={{ position: "relative" }}>
                        <CoinIcon h={1.3331} h2={1.3331} w2={1.3331} abbr={abbr} bg={color.lightGray} />
                        <Flex h={0.5} w={0.5} style={{ position: "absolute", bottom: '0', right: '0' }}>
                            <SVG height={0.5} svg={IconV} /></Flex>
                    </Flex></Flex>}

            {inputSwitching ?
                <Input onChange={FocusEvents} value={inputValue} type="number"
                    onInput={(e) => { if (e.target.value.length > 15) e.target.value = e.target.value.slice(0, 15) }}
                    onkeypress={(event) => { return (/[\d]/.test(String.fromCharCode(event.keyCode))) }}
                /> :
                <TextTypesetting w={13.8333} bold scale={1.5} paragraph={2} ls={0.0416} >
                    {transformation}
                </TextTypesetting>}
            <Text bold paragraph={1.5} ls={0.06}>
                {tradeSwitch ? abbr : `v${abbr}`}
            </Text>
        </Flex>
        <Flex mx={4.5} jcsb my={0.5}>
            <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}> 输出(预计)</Text>
            <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}>
                {`余额：${Format.decimalFormattingNumbers(vTokenBalance)}v${abbr}`}</Text>
        </Flex>
        <Flex aic jcsb onClick={inputSwitching ? InputSwitching : null}
            w={inputSwitching ? 26.9375 : 30} mx={inputSwitching ? 4.5 : 3} h={inputSwitching ? 3 : 5}
            style={inputSwitching ? { cursor: 'pointer' } : { boxSizing: 'border-box' }} pl={inputSwitching ? null : 1.25} pr={inputSwitching ? null : 1.5}
            b={inputSwitching ? null : color.fontGray} bg={inputSwitching ? null : color.washedGray} r={inputSwitching ? null : radius.xsm}>
            {tradeSwitch ? <Flex w={2} h={2} aic jcc mr={1.375}>
                <Flex aic jcc w={1.6669} h={1.6669} style={{ position: "relative" }}>
                    <CoinIcon h={1.3331} h2={1.3331} w2={1.3331} abbr={abbr} bg={color.lightGray} />
                    <Flex h={0.5} w={0.5} style={{ position: "absolute", bottom: '0', right: '0' }}>
                        <SVG height={0.5} svg={IconV} /></Flex>
                </Flex>
            </Flex> : <CoinIcon abbr={abbr} bg={color.white}
                w1={2.5} h1={2.5} w2={2} h2={2} h={2} />}

            {inputSwitching ? <TextTypesetting w={13.8333} bold scale={1.5} paragraph={2} ls={0.0416} >
                {transformation}
            </TextTypesetting> :
                <Input onChange={FocusEvents} value={inputValue} type="number"
                    onInput={(e) => { if (e.target.value.length > 15) e.target.value = e.target.value.slice(0, 15) }}
                    onkeypress={(event) => { return (/[\d]/.test(String.fromCharCode(event.keyCode))) }}
                />}
            <Text bold paragraph={1.5} ls={0.06}>
                {tradeSwitch ? `v${abbr}` : abbr}
            </Text>
        </Flex>
        <Flex mt={2.5} mb={1} mx={3} reverse aic>
            <Flex w={10.9375} h={4} aic jcc r={radius.xsm} bg={color.blue} onClick={ModalBoxEvents} style={{ cursor: 'pointer' }}>
                <Text ff="Noto Sans SC" scale={1.5} paragraph={2} ls={0.0416} color={color.white}>
                    {type === 'Exchange' ? tradeSwitch ? "兑换" : '赎回' : "交易"}</Text>
            </Flex>
        </Flex>
        <Modal
            show={showModal}
            close={() => setShowModal(false)}
            title={type === 'Exchange' ? tradeSwitch ? "兑换" : '赎回' : "交易"}
        >
            <Children type={type} tradeSwitch={tradeSwitch} inputValue={inputValue} api={api} polkadotAccount={polkadotAccount}
                transformation={transformation} abbr={abbr} exChangeRate={exChangeRate} redeemDate={redeemDate} />

        </Modal>
    </>)
}
export default InputBox