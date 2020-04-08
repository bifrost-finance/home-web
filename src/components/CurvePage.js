// 折线图组件
import React from "react";
import ChartConfig from './ChartConfig'
import { Flex, color, Text, CardFlex, View, TextTypesetting } from "./Styles"
import TokenLogo from "./TokenLogo"
import Format from './Format'
const CurvePage = ({ abbr, api, polkadotAccount, screen, vTokens, exChangeRate, prices, sevenDayExchangeRate, AnnualizedRate }) => {

    const AssetDetails = ({ Name, NumericalValue, vabbrcompany, abbrcompany }) => {
        return (
            <Flex h={[4, 5, 5]} aic jcsb mx={[2, 3, 3]} bb={color.darkGray}>
                <Text scale={1.125} ff='Noto Sans SC' color={color.gray}>{Name}</Text>
                <Flex aic jcfe>
                    <TextTypesetting scale={1.125} maxWidth={[8, 10, 13]} color={color.gray}>{NumericalValue}</TextTypesetting>
                    {vabbrcompany ? <Text scale={1.125} color={color.gray}>{`v${abbr}`}</Text> : null}
                    {abbrcompany ? <Text scale={1.125} color={color.gray}>{abbr}</Text> : null}
                </Flex>
            </Flex>
        )
    }

    return (
        <CardFlex w={[20.5, 36, 42]} mb={[1.5, 3, 3]} column bg={color.yellow}>
            <Flex w={[15, 30, 30]} h={[6, 9, 9]} bb={color.darkGray} aic pl={[2.25, 3, 3]} >
                <TokenLogo abbr={abbr} />
                <Text scale={3} paragraph={1.6667} bold>
                    v{abbr}
                </Text>
            </Flex>

            <Flex pl={[2, 3, 3]} column>
                <Flex aic>
                    <Text bold scale={3} paragraph={1.6666} color={color.blue} mt={2}>
                        {`1 v${abbr} = `}
                    </Text>
                    <TextTypesetting maxWidth={[5, 13, 13]} bold scale={3} paragraph={1.6666} color={color.blue} mt={2}>{`${exChangeRate === 0 ? 0 : Format.Reciprocal(exChangeRate)}`}</TextTypesetting>
                    <Text bold scale={3} paragraph={1.6666} color={color.blue} mt={2}>{`${abbr}`}</Text>
                </Flex>
                <Text fw={500} scale={0.875} paragraph={1.7143} ls={0.1} color={color.gray}>
                    {`Per v${abbr} Exchange Rate`}
                </Text>
            </Flex>
            <View h={15}>
                <ChartConfig SevenDayExchangeRate={sevenDayExchangeRate} />
            </View>
            <AssetDetails Name='价格' NumericalValue={`$${prices}`} />
            <AssetDetails Name='兑换价' abbrcompany NumericalValue={`${exChangeRate === 0 ? 0 : Format.Reciprocal(exChangeRate)}`} />
            <AssetDetails Name='年化率' NumericalValue={`${AnnualizedRate}%`} />
            <AssetDetails Name='总发行' vabbrcompany NumericalValue={`${Format.FormattingNumbers(vTokens)} `} />
        </CardFlex>
    )
}
export default React.memo(CurvePage)