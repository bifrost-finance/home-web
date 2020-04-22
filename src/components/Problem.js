import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, View, TextTypesetting, Arrow, Hidden, OfficialWebsiteText } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Problem = ({ screen }) => {
    const { t, i18n } = useTranslation();
    const ProblemItem = ({ leftContent, rightContent, ml }) => {
        return (
            <Flex  mt={6}>
                <View mr={2.75} ml={ml ? 8.75 : 0} >{leftContent}</View>
                <View>{rightContent}</View>
            </Flex>
        )
    }
    const IMG_Content = ({ }) => {
        return (<>
            <View w={20} h={20} bg={color.white} >我是图片</View>
        </>)
    }
    const TEXT_Content = ({ }) => {
        return (
            <>
                <Flex column >
                    <OfficialWebsiteText scale={6.9055} color={color.white}>
                        Lorem Ipsum
                    </OfficialWebsiteText>
                    <View w={36.75} mt={1.25}>
                        <OfficialWebsiteText scale={2.902} color={color.white}>
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </OfficialWebsiteText>
                    </View>
                </Flex>

            </>)
    }
    return (<>
        <ContentPage w={[28.0625, 80, 42]} h={114.0625}>
            <Flex column mt={5} w={[28.0625, 68.75, 42]}  h={114.0625} mx={5.625}>
                <View style={{ wordWrap: 'normal', wordBreak: 'break-all', width: '54.6875em' }} mb={4}>
                    <OfficialWebsiteText scale={6.9055} color={color.white}>
                        It is a long established fact that a reader will
                        be distracted by the readable content of a page when looking at its layout.
                    </OfficialWebsiteText>
                </View>
                <OfficialWebsiteText scale={10.7618} color={color.white}  >
                    Bifrost is here.
                </OfficialWebsiteText>
                <ProblemItem leftContent={<IMG_Content />} rightContent={<TEXT_Content />} />
                <ProblemItem leftContent={<TEXT_Content />} rightContent={<IMG_Content />} ml />
                <ProblemItem leftContent={<IMG_Content />} rightContent={<TEXT_Content />} />
                <Flex mt={6}>

                </Flex>
            </Flex>
        </ContentPage>
    </>)
};
export default React.memo(Problem)
