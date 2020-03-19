import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, Content, CardFlex, View, Flex, color } from "../components/Styles"
export default ({ abbr, AssetID, api, polkadotAccount }) => {
    return (
        <Content fd="column" mt={1.5} mb={2}>
            <CardFlex column w={75} h={30} jcc aic>
                <Text color={color.darkGray} scale={3}>加载中...</Text>
            </CardFlex></Content>
    )
}