import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, ThemeFlex, TextTypesetting, View, Hidden, SubjectText } from "./Styles"
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
                        bg={color.gray}
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
            <ThemeFlex
                h={[, 50,]}
                mb={[0.625, 0, 0.625]}
                w={[17.728, 68.75, 37.24]}
                mx={[1.136, 5.625, 2.38]}
                column 
                mt={5}  >
                <View mb={[1.705, 8, 3.571]} >
                    <SubjectText scale={4.5} color={color.white} ls={-0.042} >partner</SubjectText>
                </View>
                <Flex w={[17.728, 68.75, 37.24]} wrap='wrap'>
                    <Partner />
                </Flex>
            </ThemeFlex>

        </ContentPage>
    </>)
};
export default React.memo(Parner)
