// 折线图组件
import React, { lazy, Suspense, useState, useEffect } from "react";
import ChartConfig from './ChartConfig' 
import { Flex, Content, color, Text, CardFlex, View, SVG } from "../components/Styles"
import TokenLogo from "./TokenLogo"
export default ({ name }) => {

    return (
        <CardFlex w={36} h={51} mb={3} column>
            <Flex w={36} h={9} bb={color.darkGray} aic pl={3}>
                <TokenLogo tokenAbbr={name} />
                <Text scale={1.5} paragraph={1.6667} bold>
                    {name === "eos" ? "vEOS" : name === "dot" ? "vDOT" : "vKSM"}
                </Text>
            </Flex>
            <Text ml={2} bold scale={1.5} paragraph={1.6666} color={color.blue}>
                { name === "eos" ? "1 vEOS = 0.232112121 EOS" : name === "dot" ?
                 "1 vDOT = 0.232112121 DOT" : "1 vKSM = 0.232112121 KSM"}
            </Text>
            <Text ml={3.4286} fw={500} scale={0.875} paragraph={1.7143} ls={0.1} color={color.gray}>
                { name === "eos" ? "Per vEOS Exchange Rate" : name === "dot" ?
                 "Per vDOT Exchange Rate" : "Per vKSM Exchange Rate"}
            </Text>
            <View h={15}>
        <ChartConfig ></ChartConfig></View>
        </CardFlex>
    )
}