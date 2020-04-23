import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, CardFlex, TextTypesetting, View, Hidden, OfficialWebsiteText } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Parner = ({ screen }) => {
    const { t, i18n } = useTranslation();
    let arr = [
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''}
    ]
    const Partner = ()=>{
        return(
            arr.map((i,index)=>{
                return(
                    <Flex jcc aic w={11} h={5} bg='#F0F0F0' r='8px' key={index} mb={4} mr={4} ></Flex>
                )
            })
        )
    }
    return (<>
        <ContentPage w={[28.0625, 80, 42]} h={50}>
            <Flex w={68.75} column bg='#000' mt={4} mx={5.625} >
                <View mb={8} >
                    <OfficialWebsiteText scale={10.7618} color={color.white}>partner</OfficialWebsiteText>
                </View>
                <Flex w={68.75}  wrap>
                    <Partner />
                </Flex>
            </Flex>

        </ContentPage>
    </>)
};
export default React.memo(Parner)
