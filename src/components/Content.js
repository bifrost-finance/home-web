import React, { useState, useEffect, useImperativeHandle } from "react";
import { Flex, Button, color, Text, Hidden, SVG, radius, CoinIcon, Input, TextTypesetting } from "./Styles"
const Content = ({screen }) => {
  
return (<>
        <Flex w={[14.5, 27, 33]} jcsb mt={[0.2, 1, 1]} mx={[3, 4.5, 4.5]}>
            <Flex>
                <Text scale={0.09} ff="Noto Sans SC" ls={0.06} mr={0.5}>
                    输入</Text>
                <Hidden mobile>
                    <Text scale={0.09} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} color={color.gray}>
                        {type === "Exchange" ? `1 ${abbr} =${Format.decimalTwo(exChangeRate)} v${abbr}` : '不考虑手续费'}
                    </Text>
                </Hidden>
            </Flex>
            <Flex jcfe>
                <TextTypesetting maxWidth={[6, 10, 10]} scale={0.09} ff="Noto Sans SC" ls={0.06}>
                    {`余额：${Format.decimalFormattingNumbers(TokenBalance)}`}</TextTypesetting>
                <Text scale={0.09} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} >{`${abbr}`}</Text>
            </Flex></Flex>
        <Flex w={[20.5, 36, 42]} jcc>
            <Flex onClick={inputSwitching ? null : InputSwitching} aic jcsb my={0.5}
                w={inputSwitching ? [16.5, 30, 36] : [16.5, 27, 32]}
                mx={inputSwitching ? [2, 3, 3] : [1, 3, 3]}
                h={inputSwitching ? [3.5, 5, 5] : [2.5, 3.5, 3.5]}
                style={inputSwitching ? { boxSizing: 'border-box' } : { cursor: 'pointer' }} pl={inputSwitching ? 1.25 : null} pr={inputSwitching ? 1.5 : null}
                b={inputSwitching ? color.fontGray : null} bg={inputSwitching ? color.washedGray : null} r={inputSwitching ? radius.xsm : null}>
                {tradeSwitch ?
                    <CoinIcon abbr={abbr} bg={color.white}
                        w1={2.5} h1={2.5} w2={2} h2={2} h={2} /> :
                    <Flex w={2} h={2} aic jcc >
                        <Flex aic jcc w={1.6669} h={1.6669} style={{ position: "relative" }}>
                            <CoinIcon h={1.3331} h2={1.3331} w2={1.3331} abbr={abbr} bg={color.lightGray} />
                            <Flex h={0.5} w={0.5} style={{ position: "absolute", bottom: '0', right: '0' }}>
                                <SVG height={0.5} svg={IconV} /></Flex>
                        </Flex></Flex>}

                {inputSwitching ?
                    <Input onChange={FocusEvents} value={inputValue} type="number" w={[10, 27, 32]} m={[0.5, 1, 1]}
                        // onInput={(e) => { if (e.target.value.length > 15) e.target.value = e.target.value.slice(0, 15) }}
                        onkeypress={(event) => { return (/[\d]/.test(String.fromCharCode(event.keyCode))) }}
                    /> :
                    <TextTypesetting w={[9, 26, 31]} bold scale={1.5} paragraph={2} ls={0.0416} >
                        {transformation}
                    </TextTypesetting>}
                <Text bold paragraph={1.5} ls={0.06}>
                    {tradeSwitch ? abbr : `v${abbr}`}
                </Text>
            </Flex></Flex>
        <Flex w={[14.5, 27, 33]} mx={[3, 4.5, 4.5]} jcsb my={0.5}>
            <Text scale={0.09} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} > 输出(预计)</Text>
            <Flex jcfe> <TextTypesetting scale={0.09} ff="Noto Sans SC" paragraph={1.333334} maxWidth={[6, 10, 10]} ls={0.06} >
                {`余额：${Format.decimalFormattingNumbers(vTokenBalance)}`}
            </TextTypesetting>
                <Text scale={0.09} ff="Noto Sans SC" paragraph={1.333334} ls={0.06} >{`v${abbr}`}</Text>
            </Flex></Flex>
        <Flex w={[20.5, 36, 42]} jcc>
            <Flex aic jcsb onClick={inputSwitching ? InputSwitching : null}
                w={inputSwitching ? [16.5, 27, 32] : [16.5, 30, 36]}
                mx={inputSwitching ? [1, 3, 3] : [2, 3, 3]}
                h={inputSwitching ? [2.5, 3.5, 3.5] : [3.5, 5, 5]}
                style={inputSwitching ? { cursor: 'pointer' } : { boxSizing: 'border-box' }} pl={inputSwitching ? null : 1.25} pr={inputSwitching ? null : 1.5}
                b={inputSwitching ? null : color.fontGray} bg={inputSwitching ? null : color.washedGray} r={inputSwitching ? null : radius.xsm}>
                {tradeSwitch ? <Flex w={2} h={2} aic jcc mr={[0.5, 1.375, 1.375]}>
                    <Flex aic jcc w={1.6669} h={1.6669} style={{ position: "relative" }}>
                        <CoinIcon h={1.3331} h2={1.3331} w2={1.3331} abbr={abbr} bg={color.lightGray} />
                        <Flex h={0.5} w={0.5} style={{ position: "absolute", bottom: '0', right: '0' }}>
                            <SVG height={0.5} svg={IconV} /></Flex>
                    </Flex>
                </Flex> : <CoinIcon abbr={abbr} bg={color.white}
                    w1={2.5} h1={2.5} w2={2} h2={2} h={2} />}

                {inputSwitching ? <TextTypesetting w={[9, 26, 31]} bold scale={1.5} paragraph={2} ls={0.0416} >
                    {transformation}
                </TextTypesetting> :
                    <Input onChange={FocusEvents} value={inputValue} type="number" w={[10, 27, 32]} m={[0.5, 1, 1]}
                        // onInput={(e) => { if (e.target.value.length > 15) e.target.value = e.target.value.slice(0, 15) }}
                        onkeypress={(event) => { return (/[\d]/.test(String.fromCharCode(event.keyCode))) }}
                    />}
                <Text bold paragraph={1.5} ls={0.06}>
                    {tradeSwitch ? `v${abbr}` : abbr}
                </Text>
            </Flex>
        </Flex>
        <Flex mt={[1.5, 2.5, 2.5]} mb={1} mx={[2, 3, 3]} reverse aic>
            <Button w={[16.5, 10.9375, 10.9375]} h={[3, 4, 4]} Event={ModalBoxEvents}
                text={type === 'Exchange' ? tradeSwitch ? "兑换" : '赎回' : "交易"}
            />
        </Flex>

    </>)
};
export default React.memo(Content) 