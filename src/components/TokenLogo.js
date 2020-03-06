// logo组件
import React, { lazy, Suspense, useState, useEffect } from "react";
import {
    CoinIcon,  View, Flex, color, SVG
} from "../components/Styles"
import { ReactComponent as IconV } from "../images/V-39.svg";
export default ({ tokenAbbr }) => {
    return (
        <Flex w={3} h={3} mr={1} aic jcc>
            <Flex w={2.5} h={2.5} style={{ position: "relative" }} aic jcc>
                <CoinIcon abbr={tokenAbbr} bg={color.lightGray} 
                w1={2.5} h1={2.5} w2={2} h2={2} h={2}/>
                <Flex h={0.75} w={0.75}
                    style={{ position: "absolute", bottom: '0em', right: '0em' }}>
                    <SVG height={0.75} svg={IconV} /></Flex>
            </Flex></Flex>
    )
}