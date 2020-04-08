import React, { lazy, Suspense, useState, useEffect, memo, useMemo } from "react";
import { Flex, Content, Hidden, Text, CardFlex, View, SVG, } from "../components/Styles"
import MappingFile from './MappingFile.json'
import Format from '../components/Format'
const CurvePage = lazy(() => import('../components/CurvePage'))
const ExchangePage = lazy(() => import('../components/ExchangePage'))
const DetailPage = lazy(() => import('../components/DetailPage'))
const CrossPage = lazy(() => import('../components/CrossPage'))
const Details = (props) => {
    const [prices, setPrices] = useState(0)
    const [exChangeRate, setExChangeRate] = useState(0)
    const [TokeninVariant, setTokeninVariant] = useState(0)
    const [VTokeninVariant, setVTokeninVariant] = useState(0)
    const [InVariantPool, setInVariantPool] = useState(0)
    const [AnnualizedRate, setAnnualizedRate] = useState(0)
    const [vTokens, setVTokens] = useState(0)
    const [vTokenBalance, setvTokenBalance] = useState(0)
    const [TokenBalance, setTokenBalance] = useState(0)
    const [sevenDayExchangeRate, setSevenDayExchangeRate] = useState([])
    // 块高度
    const [numberBlock, setNumberBlock] = useState('')
    // 过去七天出块
    const [sevenDayBlock, setSevenDayBlock] = useState([])
    // 过去七天出块哈希
    const [sevenDayHashBlock, setSevenDayHashBlock] = useState([])
    useEffect(() => {
        let isUnmounted = false;
        if (props.api !== null) {
            (async () => {
                try {
                    await Promise.all([
                        props.api.query.assets.prices(MappingFile.TOKEN[props.abbr], 'Token', (res) => {
                            let $prices = Format.except(res.toJSON())
                            if (!isUnmounted) {
                                setPrices($prices)
                                console.log('价钱', $prices)
                            }
                        }),
                        props.api.query.assets.tokens(MappingFile.TOKEN[props.abbr], (res) => {
                            if (!isUnmounted) {
                                console.log('总发行', res.vtoken.totalSupply.toString())
                                let $tokens = res.vtoken.totalSupply.toString()
                                setVTokens($tokens)
                            }

                        }),
                        props.api.query.exchange.exchangeRate(MappingFile.TOKEN[props.abbr], (res) => {
                            if (!isUnmounted) {
                                let $exchangeRate = res.toJSON()[0]
                                setExChangeRate($exchangeRate)
                                console.log('单个汇率', res.toJSON()[0])
                            }
                        }),
                        props.api.query.swap.inVariant(MappingFile.TOKEN[props.abbr], (res) => {
                            if (!isUnmounted) {
                                console.log('流通交易池', res.toJSON()[2])
                                console.log('token交易池', res.toJSON()[0])
                                console.log('vtoken交易池', res.toJSON()[1])
                                console.log('交易池', res)
                                setTokeninVariant(res.toJSON()[0])
                                setInVariantPool(res.toJSON()[2])
                                setVTokeninVariant(res.toJSON()[1])
                            }
                        }),
                        props.api.query.assets.accountAssets([MappingFile.TOKEN[props.abbr], 'vToken', props.polkadotAccount], (res) => {
                            console.log('Vtoken 余额', res.toJSON())
                            if (!isUnmounted) {
                                console.log('isUnmounted', isUnmounted)
                                setvTokenBalance(res.toJSON().balance)
                            }
                        }),
                        props.api.query.assets.accountAssets([MappingFile.TOKEN[props.abbr], 'Token', props.polkadotAccount], (res) => {
                            console.log('token 余额', res.toJSON())
                            if (!isUnmounted) {
                                setTokenBalance(res.toJSON().balance)
                            }

                        }),

                    ])

                }
                catch (error) { }
            })();
            // 现在的出块高度
            (async () => {
                try {
                    const header = await props.api.rpc.chain.getHeader();
                    if (!isUnmounted) {
                        console.log('出块高度', header.toJSON().number)
                        setNumberBlock(header.toJSON().number)
                    }
                }
                catch (error) {

                }
            })();

        }
        return () => {
            isUnmounted = true;
        }
    }, [props.api])
    // 7天零点的出块高度
    useEffect(() => {
        if (numberBlock !== '') {
            let Date1 = new Date();
            let seconds = Date1.getHours() * 3600 + Date1.getMinutes() * 60 + Date1.getSeconds()
            // 零点出块多少 一天出28800个块
            let ZeroPointBlock = Format.minus(numberBlock, Format.BlockVelocity(seconds))
            let arr = [7, 6, 5, 4, 3, 2, 1, 0]
            let pastBlockArr = []
            arr.map((v) => {
                if (Format.minus(ZeroPointBlock, Format.times(28800, v)) < 0) {
                    pastBlockArr.push(0)
                }
                else {
                    pastBlockArr.push(Format.integer(Format.minus(ZeroPointBlock, Format.times(28800, v))))
                }
            })
            setSevenDayBlock(pastBlockArr)
            console.log('过去七天天0点块高', pastBlockArr)
        }
    }, [numberBlock])
    // 7天零点的哈希值
    useEffect(() => {
        let isUnmounted = false
        if (sevenDayBlock !== []) {
            (async () => {
                try {
                    let sevenDayHash = []
                    for (let v of sevenDayBlock) {
                        console.log('v', v)
                        let res = await props.api.rpc.chain.getBlockHash(parseInt(v))
                        sevenDayHash.push(res.toString())
                    }
                    if (!isUnmounted) {
                        console.log('七天哈希', sevenDayHash)
                        setSevenDayHashBlock(sevenDayHash)
                    }
                }
                catch (error) { console.log(error) }
            })();
        }
        return () => {
            isUnmounted = true
        }
    }, [sevenDayBlock])
    // 7天零点的汇率
    useEffect(() => {
        let isUnmounted = false
        if (sevenDayHashBlock !== []) {
            (async () => {
                try {
                    let arr = []
                    for (let [index, elem] of new Map(sevenDayHashBlock.map((item, i) => [i, item]))) {
                        console.log('索引', index)
                        let day = new Date((new Date).getTime() - (7 - index) * 24 * 60 * 60 * 1000);
                        console.log('现在的时间', day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate())
                        const exchange = await props.api.query.exchange.exchangeRate.at(elem, MappingFile.TOKEN[props.abbr]);
                        arr.push({
                            'date': day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate(),
                            'value': exchange.toJSON()[0]
                        })
                    }
                    console.log('k线汇率', arr)
                    setSevenDayExchangeRate(arr)
                }
                catch (error) { console.log(error) }
            })();

        }
        return () => {
            isUnmounted = true
        }
    }, [sevenDayHashBlock])
    // 每天出块 28800，用当天兑换率处以昨天兑换率 -1 为当天日利率。需计算最近 7 天平均日收益 * 365 则为年化收益
    useEffect(() => {
        let result = []
        if (sevenDayExchangeRate.length !== 0) {
            // let result = sevenDayExchangeRate.reverse()
            console.log('数组倒序', result)
            sevenDayExchangeRate.map((v, index) => {
                if (index !== 0) {
                    if (parseFloat(sevenDayExchangeRate[index - 1].value) === 0) {
                        result.push('-1')
                    }
                    else {
                        result.push(`${Format.exchangeRatedivide(v.value, sevenDayExchangeRate[index - 1].value) - 1}`)
                    }
                }
            })
            console.log('年化率', Format.AnnualizedRate(result.reduce((n, m) => Format.Plus(n, m))))
            setAnnualizedRate(Format.AnnualizedRate(result.reduce((n, m) => Format.Plus(n, m))))
            console.log('年化率', result)
        }
    }, [sevenDayExchangeRate])
    const Transaction = () => {
        return (
            <Flex column>
                <CrossPage
                    screen={props.screen}
                    abbr={props.abbr}
                    TokenBalance={TokenBalance}
                />
                <ExchangePage
                    screen={props.screen}
                    abbr={props.abbr}
                    type="Exchange"
                    api={props.api}
                    polkadotAccount={props.polkadotAccount}
                    exChangeRate={exChangeRate}
                    vTokenBalance={vTokenBalance}
                    TokenBalance={TokenBalance}
                />
                <ExchangePage
                    screen={props.screen}
                    abbr={props.abbr}
                    type="Trade"
                    api={props.api}
                    polkadotAccount={props.polkadotAccount}
                    TokeninVariant={TokeninVariant}
                    vTokeninVariant={VTokeninVariant}
                    InVariantPool={InVariantPool}
                    vTokenBalance={vTokenBalance}
                    TokenBalance={TokenBalance}
                />
            </Flex>
        )
    }
    return (
        <Content mt={[1.5, 3, 3]} mb={4.875} w={[20.5, 75, 42]}>
            <Flex jcsb w={[20.5, 75, 42]}>
                <Flex column>
                    <CurvePage
                        abbr={props.abbr}
                        api={props.api}
                        polkadotAccount={props.polkadotAccount}
                        screen={props.screen} prices={prices}
                        exChangeRate={exChangeRate}
                        vTokens={vTokens}
                        sevenDayExchangeRate={sevenDayExchangeRate}
                        AnnualizedRate={AnnualizedRate}
                    />
                    <Hidden mobile tablet>
                        <DetailPage
                            abbr={props.abbr}
                            screen={props.screen} />
                    </Hidden>
                    <Hidden desktop><Transaction />
                    </Hidden>
                    <Hidden desktop>
                        <DetailPage
                            abbr={props.abbr}
                            screen={props.screen} />
                    </Hidden>
                </Flex>
                <Hidden mobile tablet> <Transaction /></Hidden>

            </Flex>
        </Content>
    )
}
const areEqual = (prevProps, nextProps) => {
    if (prevProps.SevenDayExchangeRate === nextProps.SevenDayExchangeRate) {
        return true
    } else {
        return false
    }

}
export default React.memo(Details, areEqual) 
