import React, { lazy, Suspense, useState, useEffect } from "react";
import { Flex, Content, color, Text, CardFlex, View, SVG } from "../components/Styles"
import CurvePage from "../components/CurvePage"
// 兑换页
import ExchangePage from "../components/ExchangePage"
// 明细页
import DetailPage from "../components/DetailPage"


export default ({ abbr }) => {
    console.log("传参", abbr)

    return (
        <Content mt={3} mb={4.875}>
            <Flex jcsb w={75}>
                <Flex column>
                    <CurvePage name={abbr}/>
                    <DetailPage name={abbr} />
                    
                </Flex>
                <Flex column>
                    <ExchangePage name={abbr} type="Exchange" />
                    <ExchangePage name={abbr} type="Trade" />
                    
                    
                </Flex>
            </Flex>
        </Content>
    )
}