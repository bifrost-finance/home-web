// 明细页
import React, { useState, useEffect } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Flex, ScrollPage, color, Text, CardFlex, View, SVG, radius, TextTypesetting, DetailText, Hidden, } from "../components/Styles"
import { ReactComponent as tranfer1 } from "../images/tranfer1-29.svg";
import { ReactComponent as tranfer2 } from "../images/tranfer2-31.svg";
import { ReactComponent as tranfer3 } from "../images/tranfer3-33.svg";
import { ReactComponent as tranfer4 } from "../images/tranfer4-35.svg";
import { ReactComponent as tranfer5 } from "../images/tranfer5-37.svg";
import { ReactComponent as SingleArrowhead } from "../images/SingleArrowhead.svg";
import Modal from './Modal'
import Format from './Format'
const DetailPage = ({ polkadotAccount, screen }) => {
    const [ListOfTransactions, setListOfTransactions] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [detailType, setDetailType] = useState('')
    const DisplayDetails = (e) => {
        setShowModal(true)
        let res = ListOfTransactions.find((u) => {
            return u.id = e.currentTarget.getAttribute('data-value')
        })
        setDetailType(res)
    }
    useEffect(() => {
        console.log('detailType', detailType)
    }, [detailType])
    // let json = [
    //     { id: '1', key: "exchange", content: "10000000000000000", date: '2020年1月1日', time: '15:30' },
    //     { id: '2', key: "Redeem", content: "10000000000000000000", date: '2020年1月1日', time: '15:30' },
    //     { id: '3', key: "Purchase", content: "10", date: '2020年10月10日', time: '15:30' },
    //     { id: '4', key: "SellOut", content: "1000000000000", date: '2020年1月1日', time: '15:30' },
    //     { id: '5', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
    //     { id: '6', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
    //     { id: '7', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
    //     { id: '8', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
    //     { id: '9', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
    //     { id: '10', key: "Transfer", content: "10", date: '2020年1月1日', time: '15:30' }
    // ]
    const ContextItem = ({ left, right, limit, bb, svg }) => {
        return (
            <Flex w={[16, 30, 30]} h={5} aic jcsb bb={bb} style={{ position: "relative" }}>
                <TextTypesetting maxWidth={limit ? [8, 11, 11] : 6} scale={[-1, 1.125, 1.125]} >{left}</TextTypesetting>
                {svg ? <View style={screen === 'mobile' ? { position: "absolute", left: '7em', top: '1.5em' }
                    : { position: "absolute", left: '14em', top: '1.5em' }}>
                    <SVG svg={SingleArrowhead} height={2} /></View> : null}
                <TextTypesetting maxWidth={limit ? [8, 11, 11] : [11, 11, 16]} scale={[-1, 1.125, 1.125]} >{right}</TextTypesetting>
            </Flex>
        )
    }
    const TransactionDetails = ({ Detailskey, content }) => {
        return (<>
            <Flex aic >
                <DetailText mx={[0.05, 0.2, 0.2]} scale={0.7} >
                    {Detailskey === 'exchange' ? "兑换" : Detailskey === 'Redeem' ? "赎回" :
                        Detailskey === 'Purchase' ? "买入" : Detailskey === 'SellOut' ? "卖出" : "转账"} </DetailText>
                <TextTypesetting mr={[0.05, 0.1, 0.2]} maxWidth={[4.5, 9, 9]} scale={0.7} >{content}</TextTypesetting>
                {/* <DetailText scale={0.7} >{Detailskey === 'Redeem' ? abbr : `v${abbr}`}</DetailText> */}
            </Flex>
        </>)
    }
    const RedemptionMark = ({ Detailskey }) => {
        return (<>
            {Detailskey === 'Redeem' ?
                <Flex aic jcc ml={[0, 0.3, 1]} bg={color.washedGray} r={radius.sm1} h={[0.6, 1.375, 1.375]} w={3.25}>
                    <DetailText scale={0.03} color={color.gray}>
                        赎回中 </DetailText>
                </Flex> : null}
        </>)
    }
    const TransactionDate = ({ date, time }) => {
        return (
            <Flex jcfe={screen === 'mobile' ? false : true} aic w={12} h={[2, 5, 5]}>
                <Text paragraph={2} scale={0.875} color={color.gray}>{date}&nbsp;{time}</Text>
            </Flex>
        )
    }
    const QUERY_TRANSACTION_DETAILS = gql`
   query trxListByAccount($polkadotAccount : String!){
    trxListByAccount(account:$polkadotAccount, count:10) {
      id
      from
      to
      amount
      token_type
    }
  }`;
    const JsonContent = () => {
        console.log('polkadotAccount值', polkadotAccount)
        return (
            <ScrollPage column w={[20.5, 36, 42]} h={[43, 25, 25]} px={[2, 1, 3]}>
                <Query query={QUERY_TRANSACTION_DETAILS} variables={{ polkadotAccount }}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return null
                        }
                        if (error) {
                            return null
                        }
                        console.log('详情值', data)
                        setListOfTransactions(data.trxListByAccount)
                        return null
                    }}

                </Query>
                {ListOfTransactions.map((u, index) => {
                    return (<>
                        {/* PC 平板 */}
                        < Hidden mobile >
                            <Flex onClick={DisplayDetails} bb={color.darkGray} style={{ cursor: 'pointer' }} h={[6.625, 5, 5]} aic jcsb
                                key={u.id}
                                data-value={u.id}
                            >
                                <Flex aic>
                                    <SVG svg={u.__typename === 'exchange' ? tranfer1 : u.__typename === 'Redeem' ? tranfer2 :
                                        u.__typename === 'Purchase' ? tranfer3 : u.__typename === 'SellOut' ? tranfer4 : tranfer5} height={1.5} />
                                    <TransactionDetails Detailskey={u.__typename} content={Format.FormattingNumbers(u.amount)} />
                                    <RedemptionMark Detailskey={u.__typename} />
                                </Flex>
                                {/* <Flex> <TransactionDate date={u.date} time={u.time} /></Flex> */}
                            </Flex>
                        </Hidden>

                        {/* 手机端 */}
                        <Hidden desktop tablet>
                            <Flex onClick={DisplayDetails} bb={color.darkGray} style={{ cursor: 'pointer' }} h={6.625} aic jcsb
                                key={u.id}
                                data-value={u.id}
                            >
                                <Flex aifs my={1}>
                                    <SVG svg={u.__typename === 'exchange' ? tranfer1 : u.__typename === 'Redeem' ? tranfer2 :
                                        u.__typename === 'Purchase' ? tranfer3 : u.__typename === 'SellOut' ? tranfer4 : tranfer5} height={1.5} />
                                    <Flex column jcsb h={4} ml={1}>
                                        <Flex aic><TransactionDetails Detailskey={u.__typename} content={Format.FormattingNumbers(u.amount)} />
                                            <RedemptionMark Detailskey={u.__typename} /></Flex>
                                        {/* <TransactionDate date={u.date} time={u.time} /> */}
                                    </Flex>
                                </Flex></Flex>
                        </Hidden>

                    </>)
                }
                )}
            </ScrollPage >
        )
    }
    return (
        <CardFlex w={[20.5, 36, 42]} h={34} column >
            <Flex w={[16, 33, 33]} h={[6, 9, 9]} bb={color.darkGray} aic pl={[2.25, 3, 3]} >
                <Text ff="Noto Sans SC" bold scale={3} paragraph={3}>明细</Text>
            </Flex>

            {<JsonContent />}

            <Modal
                show={showModal}
                close={() => setShowModal(false)}
                title={detailType.__typename === 'exchange' ? "兑换" : detailType.__typename === 'Redeem' ? "赎回" :
                    detailType.__typename === 'Purchase' ? "买入" : detailType.__typename === 'SellOut' ? "卖出" : "转账"}>
                <Flex w={[16, 30, 30]} h={5} aic bb={color.darkGray} >
                    <Text scale={1.125} mr={0.5}>
                        {detailType.__typename === 'Redeem' || detailType.__typename === 'SellOut' ? '-' : '+'}{Format.FormattingNumbers(detailType.amount)}
                        {detailType.token_type}
                    </Text>
                    {detailType.__typename === 'Redeem' ?
                        <Flex w={5.625} aic jcc style={{ borderRadius: '5px' }} h={1.825} bg={color.yellow}>
                            <Text scale={0.75} color={color.white}>赎回中</Text>
                        </Flex> : null}
                </Flex>
                {detailType.__typename === 'Transfer'
                    ? <ContextItem svg limit left={screen === 'mobile' ? `${detailType.from.slice(1, 5)}...${detailType.from.slice(42)}` : `${detailType.from.slice(1, 5)}...${detailType.from.slice(37)}`}
                        right={screen === 'mobile' ? `${detailType.to.slice(1, 5)}...${detailType.to.slice(42)}` : `${detailType.to.slice(1, 5)}...${detailType.to.slice(37)}`} bb={color.darkGray} />
                    : <ContextItem svg limit left='account' right={Format.FormattingNumbers(detailType.amount)} bb={color.darkGray} />}
                {detailType.__typename === 'Transfer' ? null : <ContextItem left={detailType.__typename === 'exchange' ? "兑换价" :
                    detailType.__typename === 'Redeem' ? "赎回价" : detailType.__typename === 'Purchase' ? "买入价" : '卖出价'} right='0.030' bb={color.darkGray} />}
                {detailType.__typename === 'Transfer' ? null : <ContextItem left={detailType.__typename === 'exchange' ? "兑换数量" :
                    detailType.__typename === 'Redeem' ? "赎回数量" : detailType.__typename === 'Purchase' ? "买入数量" : '卖出数量'} right='12' bb={color.darkGray} />}
                {detailType.__typename === 'Transfer' ? <ContextItem left='交易类型' right='转账' bb={color.darkGray} /> : null}
                {detailType.__typename === 'Redeem' ?
                    <ContextItem left='赎回到账时间' right='2020年1月1日 15:30' bb={color.darkGray} /> : null}
                <ContextItem left='交易时间' right='2020年1月1日 15：30' bb={color.darkGray} />
                <ContextItem left='交易ID' right={detailType.id} bb={color.darkGray} />
                <ContextItem left='备注' right='备注' />

            </Modal>

        </CardFlex>
    )
};

export default React.memo(DetailPage) 