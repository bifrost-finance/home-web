import React, { useState, useEffect } from "react";
import { Flex, Content, color, Text, CardFlex, View, SVG, radius, CoinIcon, Input, TextTypesetting } from "../components/Styles"
import { ReactComponent as IconV } from "../images/V-39.svg";
import { ReactComponent as SingleArrowhead } from "../images/SingleArrowhead.svg";
import Modal from "./Modal"
export default ({ type, abbr, tradeSwitch }) => {
    // 输入框切换
    const [inputSwitching, setInputSwitching] = useState(true)
    //  输入框值
    const [inputValue, setInputValue] = useState("")
    //    输出框值
    const [transformation, setTransformation] = useState("")
    // 模态框
    const [showModal, setShowModal] = useState(false)
    // 获取输入框值
    const FocusEvents = (e) => {
        setInputValue(e.target.value)
    }
    // 转换后的值
    useEffect(() => {
        setTransformation(inputValue)
    }, [inputValue])
    const ModalBoxEvents = () => {
        setShowModal(true)
    }
    const InputSwitching = () => {
        setInputSwitching(!inputSwitching)
        setTransformation("")
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
        <Flex mx={4.5} jcsb mt={1}>
            <Flex>
                <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} mr={0.5}>
                    输入</Text>
                <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} color={color.gray}>
                    { `价格：1${abbr}  = 4623178895 v${abbr}`}</Text></Flex>
            <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}>
                {`余额：122，123${abbr}` }</Text>
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

            {inputSwitching ? <Input onChange={FocusEvents} /> :
                <TextTypesetting w={13.8333} bold scale={1.5} paragraph={2} ls={0.0416} >
                    {transformation}
                </TextTypesetting>}
            <Text bold paragraph={1.5} ls={0.06}>
                {tradeSwitch ?abbr:`v${abbr}`}
            </Text>
        </Flex>
        <Flex mx={4.5} jcsb my={0.5}>
            <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}> 输出(预计)</Text>
            <Text scale={0.75} ff="Noto Sans SC" paragraph={1.333334} ls={0.06}>
                { "余额：122，123 "}</Text>
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
                <Input onChange={FocusEvents} />}
            <Text bold paragraph={1.5} ls={0.06}>
                {tradeSwitch ? `v${abbr}`:abbr}
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
            {type === 'Exchange' ? <ContextItem svg maxWidth={10} left={tradeSwitch ? '12111111111111 DOT' : '11,12 vDOT'}
                right={tradeSwitch ? '121 vDOT' : '11,12 DOT'} bb={color.darkGray} /> : null}
            {type === 'Exchange' ? null : <ContextItem left='方向'
                right='vDOT -> DOT' bb={color.darkGray} />}
            {type === 'Exchange' ? null :
                <ContextItem left='市场价' right='2.03' bb={color.darkGray} />}
            <ContextItem left='兑换价' right='0.2323' bb={type === 'Exchange' && tradeSwitch ? null : color.darkGray} />
            {type === 'Exchange' && !tradeSwitch ? <ContextItem left='预计到账时间'
                right='2020年1月1日 15：30' /> : null}
            {type === 'Exchange' ? null :
                <ContextItem left='差价' right='-0.03' />}
            <Flex jcc w={30} mt={3}>
                <Flex aic jcc bg={color.blue} r={radius.xsm} w={14.0625} h={4} style={{ cursor: 'pointer' }}>
                    <Text ff="Noto Sans SC" scale={1.5} paragraph={2} ls={0.0416} color={color.white}>
                        {type === 'Exchange' ? tradeSwitch ? "确认兑换" : '确认赎回' : "确认交易"}</Text>
                </Flex>
            </Flex>
        </Modal>
    </>)
}