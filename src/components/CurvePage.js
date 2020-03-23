// 折线图组件
import React, { lazy, Suspense, useState, useEffect, memo } from "react";
import ChartConfig from './ChartConfig'
import { Flex, Content, color, Text, CardFlex, View, SVG } from "../components/Styles"
import TokenLogo from "./TokenLogo"
import Format from './Format'
import MappingFile from '../pages/MappingFile.json'
export default ({ abbr, api, polkadotAccount, exChangeRate,vTokens }) => {
    const AssetDetails = ({ Name, NumericalValue }) => {
        return (
            <Flex h={5} aic jcsb mx={3} bb={color.darkGray}>
                <Text scale={1.125} ff='Noto Sans SC' color={color.gray}>{Name}</Text>
                <Text scale={1.125} color={color.gray}>{NumericalValue}</Text>
            </Flex>
        )
    }
    return (
        <CardFlex w={36} h={51} mb={3} column>
            <Flex w={33} h={9} bb={color.darkGray} aic pl={3} >
                <TokenLogo abbr={abbr} />
                <Text scale={1.5} paragraph={1.6667} bold>
                    v{abbr}
                </Text>
            </Flex>
            <Text ml={2} bold scale={1.5} paragraph={1.6666} color={color.blue} mt={2}>
                {`1 v${abbr} =${exChangeRate === 0 ? 0 : Format.Reciprocal(exChangeRate)} ${abbr}`}
            </Text>
            <Text ml={3.4286} fw={500} scale={0.875} paragraph={1.7143} ls={0.1} color={color.gray}>
                {`Per v${abbr} Exchange Rate`}
            </Text>
            <View h={15}>
                <ChartConfig ></ChartConfig></View>
            <AssetDetails Name='价格' NumericalValue='$90' />
            <AssetDetails Name='兑换价' NumericalValue={`${exChangeRate === 0 ? 0 : Format.Reciprocal(exChangeRate)} ${abbr}`} />
            <AssetDetails Name='年化率' NumericalValue='14.5%' />
            <AssetDetails Name='总发行' NumericalValue={`${Format.FormattingNumbers(vTokens)} v${abbr}`} />
        </CardFlex>
    )
}