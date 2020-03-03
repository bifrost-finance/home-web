// 明细页
import React, { lazy, Suspense, useState, useEffect } from "react";
import { Flex, ScrollPage, color, Text, CardFlex, View, SVG, radius, TextTypesetting } from "../components/Styles"
import TokenLogo from "./TokenLogo"
import { ReactComponent as tranfer1 } from "../images/tranfer1-29.svg";
import { ReactComponent as tranfer2 } from "../images/tranfer2-31.svg";
import { ReactComponent as tranfer3 } from "../images/tranfer3-33.svg";
import { ReactComponent as tranfer4 } from "../images/tranfer4-35.svg";
import { ReactComponent as tranfer5 } from "../images/tranfer5-37.svg";
import Modal from './Modal'
export default ({ name }) => {
    const [showModal,setShowModal] =useState(false)
    const [detailType,setDetailType] = useState('')
    const DisplayDetails =(e)=>{
        setShowModal(true)
        setDetailType(e.currentTarget.getAttribute('data-value'))
}
    let json = [
        { key: "exchange", content: "10000000000000000", date: '2020年1月1日', time: '15:30' },
        { key: "Redeem", content: "10000000", date: '2020年1月1日', time: '15:30' },
        { key: "Purchase", content: "10", date: '2020年10月10日', time: '15:30' },
        { key: "SellOut", content: "1000000000000", date: '2020年1月1日', time: '15:30' },
        { key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { key: "SellOut", content: "10", date: '2020年1月1日', time: '15:30' },
        { key: "Transfer", content: "10", date: '2020年1月1日', time: '15:30' }
    ]
    const JsonContent = () => {
        return (
            <ScrollPage column>
                {json.map((u, index) => {
                    return (
                        <Flex h={5} bb={color.darkGray} aic jcsb style={{cursor:'pointer'}} data-value={u.key}
                        onClick={DisplayDetails}>
                            <Flex aic>
                                <SVG svg={u.key === 'exchange' ? tranfer1 : u.key === 'Redeem' ? tranfer2 :
                                    u.key === 'Purchase' ? tranfer3 : u.key === 'SellOut' ? tranfer4 : tranfer5} height={1.5} />
                                <Text fw={500} w={2} mr={0.2} ml={1.125} ff="Noto Sans SC" scale={1.125} paragraph={2.222}>
                                    {u.key === 'exchange' ? "兑换" : u.key === 'Redeem' ? "赎回" :
                                        u.key === 'Purchase' ? "买入" : u.key === 'SellOut' ? "卖出" : "转账"} </Text>
                                <Text mr={0.2} maxWidth={5} fw={500} ff="Noto Sans SC" scale={1.125} paragraph={2.222}
                                style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis' }} >{u.content}</Text>
                                <Text fw={500} ff="Noto Sans SC" scale={1.125} paragraph={2.222}>{u.key === 'Redeem' ? name === "eos" ? "EOS" : name === "dot" ? "DOT" : "KSM" :
                                    name === "eos" ? "vEOS" : name === "dot" ? "vDOT" : "vKSM"}</Text>
                                {u.key === 'Redeem' ?
                                    <Flex aic jcc ml={1} bg={color.washedGray} r={radius.sm1} h={1.375} w={3.25}>
                                        <Text fw={500} ff="Noto Sans SC" scale={0.75} paragraph={1.333} color={color.gray}>
                                            赎回中 </Text>
                                    </Flex>
                                    : null}
                            </Flex>
                            <Flex reverse w={11} h={5}>
                                <Text scale={0.875} paragraph={5.7143} color={color.gray}>{u.date}&nbsp;{u.time}</Text>
                            </Flex>
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
             title={detailType === 'exchange' ? "兑换" :detailType === 'Redeem' ? "赎回" :
             detailType === 'Purchase' ? "买入" : detailType === 'SellOut' ? "卖出" : "转账"}>

            </Modal>
        </CardFlex>
    )
}