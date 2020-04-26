import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, CardFlex, TextTypesetting, View, Hidden, OfficialWebsiteText } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Parner = ({ screen }) => {
    const { t, i18n } = useTranslation();
    let arr = [
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' }
    ]
    const Partner = () => {
        return (
            arr.map((i, index) => {
                return (
                    <Flex jcc aic
                        w={[17.728, 11, 37.24]}
                        h={[8, 5, 8]}
                        bg='#F0F0F0'
                        r='8px'
                        key={index}
                        mb={1, 4, 1}
                        mr={[0, 4, 0]} ></Flex>
                )
            })
        )
    }
    return (<>
        <ContentPage w={[20.5, 80, 42]} >
            <Flex
                h={[, 50,]}
                mb={[0.625, 0, 0.625]}
                w={[17.728, 68.75, 37.24]}
                mx={[1.136, 5.625, 2.38]}
                column bg={color.black} mt={5}  >
                <View mb={[1.705, 8, 3.571]} >
                    <OfficialWebsiteText scale={4.5} color={color.white} ls={-0.042} >partner</OfficialWebsiteText>
                </View>
                <Flex w={[17.728, 68.75, 37.24]} wrap='wrap'>
                    <Partner />
                </Flex>
            </Flex>

        </ContentPage>
    </>)
};
export default React.memo(Parner)
