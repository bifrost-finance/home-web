import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, View, TextTypesetting, Arrow, Hidden, SubjectText } from "./Styles"
import { useTranslation } from "react-i18next";
const Problem = ({ screen }) => {
    const { t, i18n } = useTranslation();
    const ProblemItem = ({ leftContent, rightContent, ml }) => {
        return (
            <Flex mt={6} column={screen === 'laptop' ? false : true}>
                <View ml={ml && screen === 'laptop' ? 8.75 : 0} >{leftContent}</View>
                <View ml={[0, 2.75, 0]}>{rightContent}</View>
            </Flex>
        )
    }
    const IMG_Content = ({ }) => {
        return (<>
            <View
                r='8px'
                w={[17.728, 20, 37.24]}
                h={[11.364, 20, 23.81]}
                bg={color.lightColor} >我是图片</View>
        </>)
    }
    const TEXT_Content = ({ }) => {
        return (
            <>
                <Flex
                    column
                >
                    <View
                        mt={2, 0, 2}
                    >
                        <SubjectText
                            scale={2.625}
                            bold
                        >
                            Lorem Ipsum
                    </SubjectText>
                    </View>
                    <View
                        w={[17.728, 36.75, 37.24]}
                        mt={1.25}
                    >
                        <SubjectText
                            scale={1.5}
                        >
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </SubjectText>
                    </View>
                </Flex>

            </>)
    }
    return (<>
        <ContentPage w={[20, 80, 42]} >
            <Flex column
                mt={5}
                w={[17.728, 68.75, 37.24]}
                mx={[1.136, 5.625, 2.38]}
                mb={[5, 12.3125, 5]}
            >
                <View
                    style={screen === 'mobile' ?
                        { wordWrap: 'normal', wordBreak: 'break-all', width: '17.728em' }
                        : screen === 'Tablet' ? { wordWrap: 'normal', wordBreak: 'break-all', width: '37.24em' }
                            : { wordWrap: 'normal', wordBreak: 'break-all', width: '54.6875em' }}
                    mb={[3.871, 4, 8.11]}
                >
                    <SubjectText scale={2.625} color={color.white} ls={-0.042} >
                        It is a long established fact that a reader will
                        be distracted by the readable content of a page when looking at its layout.
                    </SubjectText>
                </View>
                <SubjectText bold scale={4.5} color={color.white} ls={-0.042} >
                    Bifrost is here.
                </SubjectText>
                <ProblemItem leftContent={<IMG_Content />} rightContent={<TEXT_Content />} />
                <ProblemItem leftContent={screen === 'laptop' ? <TEXT_Content /> : <IMG_Content />}
                    rightContent={screen === 'laptop' ? <IMG_Content /> : <TEXT_Content />} ml />
                <ProblemItem leftContent={<IMG_Content />} rightContent={<TEXT_Content />} />
            </Flex>
        </ContentPage>
    </>)
};
export default React.memo(Problem)
