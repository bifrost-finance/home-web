import React, { lazy, Suspense, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import {
    Text, radius,
    Content, CardFlex, View, Flex, color, TextTypesetting, SVG
} from "../components/Styles"
import TokenLogo from "../components/TokenLogo"
export default ({ abbr }) => {
    let history = useHistory();
    const JumpRouting = () => {
        history.push("/Details" + abbr);
    }
    return (
        <Flex h={7.5} aic w={75} pl={4.25} style={{ boxSizing: 'border-box',cursor: "pointer"  }}
            onClick={JumpRouting}>
            <TokenLogo tokenAbbr={abbr} />
            <Flex jcc aic w={3.8125} mr={7.5}>
                <Text scale={1.5} paragraph={1.6667} bold>
                    {abbr === "eos" ? "vEOS" : abbr === "dot" ? "vDOT" : "vKSM"}
                </Text></Flex>
            <Flex w={14.6}>
                <TextTypesetting scale={1.125} bold mw={10} paragraph={2.22223} mr={0.1}>
                    {abbr === "eos" ? 1111111111111111 : abbr === "dot" ? 222222222 : 33333333}
                </TextTypesetting>
                <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                    {abbr === "eos" ? "vEOS" : abbr === "dot" ? "vDOT" : "vKSM"}
                </Text>
            </Flex>
            <Flex w={10.4}>
                <Text scale={1.125} paragraph={2.22223} bold >
                    {abbr === "eos" ? "10.00%" : abbr === "dot" ? "1.22%" : "0.33%"}
                </Text>
            </Flex>
            <Flex w={9.4375}>
                <Text scale={1.125} paragraph={2.22223} bold >
                    {abbr === "eos" ? 2.33 : abbr === "dot" ? 2.33 : 3.22}
                </Text>
            </Flex>
            <Flex w={9.75}>
                <TextTypesetting scale={1.125} bold mw={10} paragraph={2.22223} mr={0.1}>
                    {abbr === "eos" ? 1111111111111111 : abbr === "dot" ? 222222222 : 33333333}
                </TextTypesetting>
                <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                    {abbr === "eos" ? "vEOS" : abbr === "dot" ? "vDOT" : "vKSM"}
                </Text>
            </Flex>
            <Flex w={10.3125}>
                <TextTypesetting scale={1.125} bold mw={10} paragraph={2.22223} mr={0.1}>
                    {abbr === "eos" ? 1111111111111111 : abbr === "dot" ? 222222222 : 33333333}
                </TextTypesetting>
                <Text scale={1.125} paragraph={2.22223} bold mr={1.5}>
                    {abbr === "eos" ? "vEOS" : abbr === "dot" ? "vDOT" : "vKSM"}
                </Text>
            </Flex>
        </Flex>
    )
}
