import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, radius, Input, View, Button, SubjectText ,ContactSubjectText ,ThemeFlex} from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Contact = ({ screen }) => {
    const { t, i18n } = useTranslation();
    let arr = [
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },
        { name: 'iost', img: '' },

    ]
    const Connect = () => {
        return (
            arr.map((i, index) => {
                return (
                    <Flex jcc aic w={4} h={4} bg='#F0F0F0' r={radius.rounded} key={index} mr={[1.136,2,2.381]} mt={1}></Flex>
                )
            })
        )
    }
    return (<>
        <ContentPage
            w={[20.5, 80, 42]}
            h={[,50,]}>
            <ThemeFlex
                w={[17.728, 68.75, 37.24]}
                mx={[1.136, 5.625, 2.38]}
                mb={[7.3,0,15]}
                column  mt={5}  >
                <View mb={4} >
                    <SubjectText scale={4.5} color={color.white} ls={-0.042} >contact</SubjectText>
                </View>
                <ContactSubjectText color={color.fontBlack} ls={-0.042} scale={1.5}>The point of using Lorem Ipsum is</ContactSubjectText>
                <Flex mt={1} mb={4} column={screen === 'laptop' ? false : true}>
                    <Input w={[17.728, 30, 37.24]} h={4}
                        placeholder='Email'
                        style={{ paddingLeft: '1em', boxSizing: 'border-box' }}
                    />
                    <Button
                        mt={[1, 0, 1]}
                        ml={[0, 0.5, 0]}
                        w={[17.728, 10.4375,  37.24]}
                        h={4}
                        lightColor={color.black}
                        darkColor={color.white}
                        FontlightColor={color.white}
                        FontdarkColor={color.black}
                        text={'Subscribe'}
                        scale={1.5}
                        radius={'8px'}
                    />
                </Flex>
                <ContactSubjectText color={color.fontBlack} ls={-0.042} scale={1.5}>or connect with us</ContactSubjectText>
                <Flex w={[17.728, 68.75, 37.24]} wrap='wrap'  >
                    <Connect />
                </Flex>
            </ThemeFlex>
        </ContentPage>
    </>)
};
export default React.memo(Contact)
