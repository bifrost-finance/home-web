// 明细页
import React, { lazy, Suspense, useState, useEffect } from "react";
import { Flex, ScrollPage, color, Text, CardFlex, View, SVG, radius, TextTypesetting, DetailText } from "../components/Styles"
import TokenLogo from "./TokenLogo"
import { ReactComponent as tranfer1 } from "../images/tranfer1-29.svg";
import { ReactComponent as tranfer2 } from "../images/tranfer2-31.svg";
import { ReactComponent as tranfer3 } from "../images/tranfer3-33.svg";
import { ReactComponent as tranfer4 } from "../images/tranfer4-35.svg";
import { ReactComponent as tranfer5 } from "../images/tranfer5-37.svg";
import { ReactComponent as SingleArrowhead } from "../images/SingleArrowhead.svg";
import Modal from './Modal'
export default ({ abbr }) => {
    const [showModal, setShowModal] = useState(false)
    const [detailType, setDetailType] = useState('')
    const DisplayDetails = (e) => {
        setShowModal(true)
        setDetailType(e.currentTarget.getAttribute('data-value'))
    }
    let json = [
        { id: '1', key: "exchange", content: "10000000000000000", date: '2020年1月1日', time: '15:30' },
        { id: '2', key: "Redeem", content: "10000000", date: '2020年1月1日', time: '15:30' },
        { id: '3', key: "Purchase", content: "10", date: '2020年10月10日', time: '15:30' },
        { id: '4', key: "SellOut", content: "1000000000000", date: '2020年1月1日', time: '15:30' },
        { id: '5', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { id: '6', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { id: '7', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { id: '8', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { id: '9', key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { id: '10', key: "Transfer", content: "10", date: '2020年1月1日', time: '15:30' }
    ]
    const ContextItem = ({ left, right, maxWidth, bb, svg }) => {
        return (
            <Flex w={30} h={5} aic jcsb bb={bb} style={{ position: "relative" }}>
                <TextTypesetting maxWidth={maxWidth} scale={1.125} mr={0.5}>{left}</TextTypesetting>
                {svg ? <View style={{ position: "absolute", left: '14em', top: '1.5em' }}>
                    <SVG svg={SingleArrowhead} height={2} /></View> : null}
                <TextTypesetting maxWidth={maxWidth} scale={1.125} >{right}</TextTypesetting>
            </Flex>
        )
    }
    const TransactionDetails = ({ Detailskey, content }) => {
        return (<>
            <SVG svg={Detailskey === 'exchange' ? tranfer1 : Detailskey === 'Redeem' ? tranfer2 :
                Detailskey === 'Purchase' ? tranfer3 : Detailskey === 'SellOut' ? tranfer4 : tranfer5} height={1.5} />
            <DetailText w={2} mr={0.2} ml={1.125} scale={1.125} paragraph={2.222}>
                {Detailskey === 'exchange' ? "兑换" : Detailskey === 'Redeem' ? "赎回" :
                    Detailskey === 'Purchase' ? "买入" : Detailskey === 'SellOut' ? "卖出" : "转账"} </DetailText>
            <TextTypesetting mr={0.2} maxWidth={5} scale={1.125} paragraph={2.222}>{content}</TextTypesetting>
            <DetailText scale={1.125} paragraph={2.222}>{Detailskey === 'Redeem' ? abbr : `v${abbr}`}</DetailText>
        </>)
    }
    const RedemptionMark = ({ Detailskey }) => {
        return (<>
            {Detailskey === 'Redeem' ?
                <Flex aic jcc ml={1} bg={color.washedGray} r={radius.sm1} h={1.375} w={3.25}>
                    <DetailText scale={0.75} paragraph={1.333} color={color.gray}>
                        赎回中 </DetailText>
                </Flex> : null}
        </>)
    }
    const TransactionDate = ({ date, time }) => {
        return (
            <Flex reverse w={11} h={5}>
                <Text scale={0.875} paragraph={5.7143} color={color.gray}>{date}&nbsp;{time}</Text>
            </Flex>
        )
    }
    const JsonContent = () => {
        return (
            <ScrollPage column>
                {json.map((u, index) => {
                    return (
                        <Flex key={index} h={5} bb={color.darkGray} aic jcsb style={{ cursor: 'pointer' }} data-value={u.key}
                            onClick={DisplayDetails}>
                            <Flex aic>
                                <TransactionDetails Detailskey={u.key} content={u.content} />
                                <RedemptionMark Detailskey={u.key} />
                            </Flex>
                            <TransactionDate date={u.date} time={u.time} />
                        </Flex>
                    )
                })}</ScrollPage>
        )

    }
    return (
        <CardFlex w={36} h={34} column >
            <Flex w={36} h={9} bb={color.darkGray} aic>
                <Text ml={2} ff="Noto Sans SC" bold scale={1.5} paragraph={3}>明细</Text>
            </Flex>
            <JsonContent />
            <Modal
                show={showModal}
                close={() => setShowModal(false)}
                title={detailType === 'exchange' ? "兑换" : detailType === 'Redeem' ? "赎回" :
                    detailType === 'Purchase' ? "买入" : detailType === 'SellOut' ? "卖出" : "转账"}>
                <Flex w={30} h={5} aic bb={color.darkGray} >
                    <Text scale={1.125} mr={0.5}>
                        {detailType === 'Redeem' || detailType === 'SellOut' ? '-' : '+'}1000
                    {`v${abbr}`}
                    </Text>
                    {detailType === 'Redeem' ?
                        <Flex w={5.625} aic jcc style={{ borderRadius: '5px' }} h={1.825} bg={color.yellow}>
                            <Text scale={0.75} color={color.white}>赎回中</Text>
                        </Flex> : null}
                </Flex>
                <ContextItem svg maxWidth={10} left='account' right='1111111111111111111111111' bb={color.darkGray} />
                {detailType === 'Transfer' ? null : <ContextItem left={detailType === 'exchange' ? "兑换价" :
                    detailType === 'Redeem' ? "赎回价" : detailType === 'Purchase' ? "买入价" : '卖出价'} right='0.030' bb={color.darkGray} />}
                {detailType === 'Transfer' ? null : <ContextItem left={detailType === 'exchange' ? "兑换数量" :
                    detailType === 'Redeem' ? "赎回数量" : detailType === 'Purchase' ? "买入数量" : '卖出数量'} right='12' bb={color.darkGray} />}
                {detailType === 'Transfer' ? <ContextItem left='交易类型' right='转账' bb={color.darkGray} /> : null}
                {detailType === 'Redeem' ?
                    <ContextItem left='赎回到账时间' right='2020年1月1日 15：30' bb={color.darkGray} /> : null}
                <ContextItem left='交易时间' right='2020年1月1日 15：30' bb={color.darkGray} />
                <ContextItem left='交易ID' right='bbbjihhhhhhhjhhojooii' bb={color.darkGray} />
                <ContextItem left='备注' right='备注' />

            </Modal>

        </CardFlex>
    )
}