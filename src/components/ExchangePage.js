import React, { lazy, Suspense, useState, useEffect } from "react";
import { Flex, Content, color, Text, CardFlex, View, SVG, radius, CoinIcon, Input, TextTypesetting } from "../components/Styles"
import { ReactComponent as Switch } from "../images/switch-25.svg";
import { ReactComponent as IconV } from "../images/V-39.svg";
import Modal from "./Modal"
export default ({ name, type }) => {
    // 兑换 输入框值
    const [inputValue, setInputValue] = useState("")
    // 交易页 交易输出值
    const [traInputValue, setTraInputValue] = useState("")
    // 兑换 兑换输出值
    const [exchangeValue, setExchangeValue] = useState("")
    // 交易 交易输出值
    const [tradeValue, setTradeValue] = useState("")
    // 模态框
    const [showModal, setShowModal] = useState(false)
    // 兑换 获取兑换值
    const ExcFocusEvents = (e) => {
        setInputValue(e.target.value)
    }
    // 兑换 兑换值转换后的值
    useEffect(() => {
        setExchangeValue(inputValue)
    }, [inputValue])
    // 交易 token =》vToken
    const TraFocusEvents = (e) => {
        setTraInputValue(e.target.value)
    }
    // 交易 交易值转换后的值
    useEffect(() => {
        setTradeValue(traInputValue)
    }, [traInputValue])
    const ModalBoxEvents = () => {
        setShowModal(true)
    }
    return (
        <CardFlex w={36} h={41.5} mb={3} column>
            <Flex w={36} h={9} bb={color.darkGray} aic>
                <Text ml={2} ff="Noto Sans SC" bold scale={1.5} paragraph={3}>{type === 'Exchange' ? "兑换" : "交易"}</Text>
            </Flex>
            <Flex mx={3} w={30} aic jcsb mt={3}>
                <Flex w={14.25} h={3} jcsb aife>
                    <Text bold scale={1.5} paragraph={2} ls={0.06}>
                        {name === "eos" ? "EOS" : name === "dot" ? "DOT" : "KSM"}
                    </Text>
                    <Text bold scale={1.5} paragraph={2} ls={0.06}> ></Text>
                    <Text bold scale={1.5} paragraph={2} ls={0.06}>
                        {name === "eos" ? "vEOS" : name === "dot" ? "vDOT" : "vKSM"}
                    </Text>
                    <Text scale={1.125} paragraph={2.5} color={color.gray}>
                        即时
           </Text></Flex>
                <SVG svg={Switch} height={3} />
            </Flex>
            <Flex mx={4.5} jcsb mt={1}>
                <Flex>
                    <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}> 输入</Text>
                    <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} color={color.gray}>
                        {name === "eos" ? "价格：1 EOS = 4623178895 vEOS" : name === "dot" ?
                            "价格：1 DOT = 4623178895 vDOT" : "价格：1 KSM = 4623178895 vKSM"}</Text></Flex>
                <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}>
                    {name === "eos" ? "余额：122，123 EOS" : name === "dot" ?
                        "余额：122，123 DOT" : "余额：122，123 KSM"}</Text>
            </Flex>
            <Flex aic jcsb w={30} mx={3} my={0.5} h={5} style={{ boxSizing: 'border-box' }} pl={1.25} pr={1.5}
                b={color.fontGray} bg={color.washedGray} r={radius.xsm}>
                <CoinIcon abbr={name} bg={color.white}
                    w1={2.5} h1={2.5} w2={2} h2={2} h={2} />
                <Input onChange={type === 'Exchange' ? ExcFocusEvents : TraFocusEvents} />
                <Text bold paragraph={1.5} ls={0.06}>
                    {name === "eos" ? "EOS" : name === "dot" ? "DOT" : "KSM"}
                </Text>

            </Flex>
            <Flex mx={4.5} jcsb my={0.5}>

                <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}> 输出(预计)</Text>

                <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}>
                    {name === "eos" ? "余额：122，123 " : name === "dot" ?
                        "余额：122，123 " : "余额：122，123 "}</Text>
            </Flex>
            <Flex w={26.9375} h={3} aic jcsb mx={4.5}>
                <Flex w={2} h={2} aic jcc mr={1.375}>
                    <Flex aic jcc w={1.6669} h={1.6669} style={{ position: "relative" }}>
                        <CoinIcon h={1.3331} h2={1.3331} w2={1.3331} abbr={name} bg={color.lightGray} />
                        <Flex h={0.5} w={0.5} style={{ position: "absolute", bottom: '0', right: '0' }}>
                            <SVG height={0.5} svg={IconV} /></Flex>
                    </Flex>
                </Flex>
                <TextTypesetting mw={13.8333} w={13.8333} bold scale={1.5} paragraph={2} ls={0.0416} >
                    {type === 'Exchange' ? exchangeValue : tradeValue}
                </TextTypesetting>
                <Text bold paragraph={1.5} ls={0.06}>
                    {name === "eos" ? "vEOS" : name === "dot" ? "vDOT" : "vKSM"}
                </Text>
            </Flex>
            <Flex mt={2.5} mb={1} mx={3} reverse aic>
                <Flex w={10.9375} h={4} aic jcc r={radius.xsm} bg={color.blue} onClick={ModalBoxEvents} style={{ cursor: 'pointer' }}>
                    <Text ff="Noto Sans SC" scale={1.5} paragraph={2} ls={0.0416} color={color.white}>{type === 'Exchange' ? "兑换" : "交易"}</Text>
                </Flex>
            </Flex>
            <Flex h={5} w={36} aic jcsb px={3} style={{ boxSizing: 'border-box' }} >
                <Text ff="Noto Sans SC" scale={1.125} paragraph={2.222} color={color.gray}>
                    {type === 'Exchange' ? "赎回中" : "交易池"}
                </Text>
                <Flex aic>
                    <Flex jcc aic w={1.375} h={1.375} r={radius.rounded} style={type === 'Exchange' ? { border: "2px solid #8E8E95" } : { display: 'none' }}
                    >
                        <Text scale={1.125} paragraph={2.222} color={color.gray}>i</Text>
                    </Flex>
                    <Text ml={1} scale={1.125} paragraph={2.222} color={color.gray}>11.121DOT</Text></Flex>
            </Flex>
            <Modal
                show={showModal}
                close={() => setShowModal(false)}
                title={type === 'Exchange' ? "兑换" : "交易"}
            >
                <Flex jcc w={30}>
                    <Flex aic jcc bg={color.blue} r={radius.xsm} w={14.0625} h={4} style={{ cursor: 'pointer' }}>
                        <Text ff="Noto Sans SC" scale={1.5} paragraph={2} ls={0.0416} color={color.white}>
                            {type === 'Exchange' ? "确认兑换" : "确认交易"}</Text>
                    </Flex>

                </Flex>
            </Modal>
        </CardFlex>
    )
}