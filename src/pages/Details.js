import React, { lazy, Suspense, useState, useEffect, memo, useMemo } from "react";
import { Flex, Content, color, Text, CardFlex, View, SVG, } from "../components/Styles"
import MappingFile from './MappingFile.json'
import Format from '../components/Format'
const CurvePage = lazy(() => import('../components/CurvePage'))
const ExchangePage = lazy(() => import('../components/ExchangePage'))
const DetailPage = lazy(() => import('../components/DetailPage'))
const Details = (({ abbr, exAllChangeRate, TokeninVariant, api, polkadotAccount, TokenBalance, accountAssets, vTokenBalance,vTokens }) => {
    useEffect(() => {
        if (accountAssets.length !== 0 && TokenBalance !== '' && TokenBalance.length !== 0) {
            console.log('余额', accountAssets.indexOf(parseInt(MappingFile.TOKEN[abbr])))
            console.log('余额', parseInt(MappingFile.TOKEN[abbr]))
        }

    }, [TokenBalance, accountAssets])
    return (
        <Content mt={3} mb={4.875}>
            <Flex jcsb w={75}>
                <Flex column>
                    <CurvePage abbr={abbr} api={api} polkadotAccount={polkadotAccount}
                        exChangeRate={exAllChangeRate === '' || exAllChangeRate.length === 0 ? 10 :
                            exAllChangeRate[MappingFile.TOKEN[abbr]].toJSON()[0]}
                            vTokens={vTokens === ''|| vTokens.length===0 ? 0 :vTokens[MappingFile.TOKEN[abbr]].vtoken.totalSupply.toString()}
                            />
                    <DetailPage abbr={abbr} />

                </Flex>
                <Flex column>
                    <ExchangePage abbr={abbr} type="Exchange" api={api} polkadotAccount={polkadotAccount}
                        exChangeRate={exAllChangeRate === '' || exAllChangeRate.length === 0 ? 10 :
                            exAllChangeRate[MappingFile.TOKEN[abbr]].toJSON()[0]}
                        TokenBalance={accountAssets.length === 0 || TokenBalance === '' || TokenBalance.length === 0
                            ? 0 : TokenBalance[accountAssets.indexOf(parseInt(MappingFile.TOKEN[abbr]))].balance.toString()}
                        vTokenBalance={accountAssets.length === 0 || vTokenBalance === '' || vTokenBalance.length === 0
                            ? 0 : vTokenBalance[accountAssets.indexOf(parseInt(MappingFile.TOKEN[abbr]))].balance.toString()}
                    />
                    <ExchangePage abbr={abbr} type="Trade" api={api} polkadotAccount={polkadotAccount}
                        TokeninVariant={TokeninVariant === '' || TokeninVariant.length === 0 ? 0 :
                            TokeninVariant[MappingFile.TOKEN[abbr]].toJSON()[0]}
                        vTokeninVariant={TokeninVariant === '' || TokeninVariant.length === 0 ? 0 :
                            TokeninVariant[MappingFile.TOKEN[abbr]].toJSON()[1]}
                        InVariantPool={TokeninVariant === '' || TokeninVariant.length === 0 ? 0 :
                            TokeninVariant[MappingFile.TOKEN[abbr]].toJSON()[2]}
                        TokenBalance={accountAssets.length === 0 || TokenBalance === '' || TokenBalance.length === 0
                            ? 0 : TokenBalance[accountAssets.indexOf(parseInt(MappingFile.TOKEN[abbr]))].balance.toString()}
                        vTokenBalance={accountAssets.length === 0 || vTokenBalance === '' || vTokenBalance.length === 0
                            ? 0 : vTokenBalance[accountAssets.indexOf(parseInt(MappingFile.TOKEN[abbr]))].balance.toString()}
                    />


                </Flex>
            </Flex>
        </Content>
    )
})
export default Details
