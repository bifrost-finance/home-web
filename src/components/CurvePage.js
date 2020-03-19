// 折线图组件
import React, { lazy, Suspense, useState, useEffect, memo } from "react";
import ChartConfig from './ChartConfig'
import { Flex, Content, color, Text, CardFlex, View, SVG } from "../components/Styles"
import TokenLogo from "./TokenLogo"
import Format from './Format'
import MappingFile from '../pages/MappingFile.json'
export default ({ abbr, api, polkadotAccount, exChangeRate }) => {

    return (
        <CardFlex w={36} h={51} mb={3} column>
            <Flex w={33} h={9} bb={color.darkGray} aic pl={3}>
                <TokenLogo abbr={abbr} />
                <Text scale={1.5} paragraph={1.6667} bold>
                    v{abbr}
                </Text>
            </Flex>
            <Text ml={2} bold scale={1.5} paragraph={1.6666} color={color.blue}>
                {`1 v${abbr} =${exChangeRate === 0 ? 0 : Format.Reciprocal(exChangeRate)} ${abbr}`}
            </Text>
            <Text ml={3.4286} fw={500} scale={0.875} paragraph={1.7143} ls={0.1} color={color.gray}>
                {`Per v${abbr} Exchange Rate`}
            </Text>
            <View h={15}>
                <ChartConfig ></ChartConfig></View>
        </CardFlex>
    )
}