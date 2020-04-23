import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, radius, Input, View, Button, OfficialWebsiteText } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Contact = ({ screen }) => {
    const { t, i18n } = useTranslation();
    let arr = [
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},
        {name:'iost',img:''},

    ]
    const Connect = ()=>{
        return(
            arr.map((i,index)=>{
                return(
                    <Flex jcc aic w={4} h={4} bg='#F0F0F0' r={radius.rounded} key={index} mr={2} mt={1}></Flex>
                )
            })
        )
    }
    return (<>
        <ContentPage w={[28.0625, 80, 42]} h={50}>
            <Flex w={68.75} column bg='#000' mt={4} mx={5.625} >
                <View mb={4} >
                    <OfficialWebsiteText scale={10.7618} color={color.white}>contact</OfficialWebsiteText>
                </View>
                <OfficialWebsiteText color='rgba(f, f, f, 0.63)' scale={2.902}>The point of using Lorem Ipsum is</OfficialWebsiteText>
                <Flex mt={1} mb={4}>
                    <Input w={30} h={4}
                    placeholder='Email'
                    style={{paddingLeft:'1em'}}
                    />
                    <Button
                        ml={0.5}
                        w={10.4375}
                        h={4}
                        color={'#000'}
                        bg={color.white}
                        text={'Subscribe'}
                        scale={2.902}
                        radius={'8px'}
                    />
                </Flex>
                <OfficialWebsiteText color='rgba(f, f, f, 0.63)' scale={2.902}>or connect with us</OfficialWebsiteText>
                <Flex w={68.75}  wrap >
                    <Connect />
                </Flex>
            </Flex>
        </ContentPage>
    </>)
};
export default React.memo(Contact)
