import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, View, TextTypesetting, ColumnFlex, Hidden, SubjectText, AdaptiveFlex } from "./Styles"
import { useTranslation } from "react-i18next";
import { CSSTransition } from 'react-transition-group';
import './BottomToTop.scss';
const Problem = ({ screen, fontSize }) => {
    const { t, i18n } = useTranslation();
    const [inProp, setInProp] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const handleLoad = () => {
        setInProp(true);
    };
    useEffect(() => {
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    const ProblemItem = ({ leftContent, rightContent, ml }) => {
        return (
            <ColumnFlex mt={6} >
                <View ml={ml && [0, 8.75, 0]} >{leftContent}</View>
                <View ml={[0, 2.75, 0]}>{rightContent}</View>
            </ColumnFlex>
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
                    <AdaptiveFlex
                        w={[17.728, 36.75, 37.24]}
                        mt={1.25}
                    >
                        <SubjectText
                            scale={1.5}
                        >
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </SubjectText>
                    </AdaptiveFlex>
                </Flex>

            </>)
    }
    return (<>
        <ContentPage w={[20, 80, 42]} >
            <CSSTransition
                in={inProp}
                timeout={5000}
                classNames='problem'
                onEnter={() => setShowButton(true)}
                onExited={() => setShowButton(false)}
            >
                <Flex column
                    mt={5}
                    w={[17.728, 68.75, 37.24]}
                    mx={[1.136, 5.625, 2.38]}
                    mb={[5, 12.3125, 5]}
                    className='problem' >

                    <AdaptiveFlex
                        w={[17.728, 54.6875, 37.24]}
                        mb={[3.871, 4, 8.11]} >

                        <SubjectText
                            scale={2.625}
                            color={color.white}
                            ls={-0.042} >
                            {showButton && `It is a long established fact that a reader will
                        be distracted by the readable content of a page when looking at its layout.`}
                        </SubjectText>
                    </AdaptiveFlex>
                    <SubjectText bold
                        scale={4.5}
                        color={color.white}
                        ls={-0.042} >
                        {showButton && `Bifrost is here.`}

                    </SubjectText>
                    {showButton && <ProblemItem leftContent={<IMG_Content />} rightContent={<TEXT_Content />} />}

                    <Hidden desktop>
                        {showButton && <ProblemItem leftContent={<IMG_Content />} rightContent={<TEXT_Content />} />}
                    </Hidden>
                    <Hidden mobile tablet >
                        {showButton && <ProblemItem leftContent={<TEXT_Content />} rightContent={<IMG_Content ml />} />}
                    </Hidden>

                    {showButton && <ProblemItem leftContent={<IMG_Content />} rightContent={<TEXT_Content />} />}
                </Flex>
            </CSSTransition>
        </ContentPage>
    </>)
};
export default React.memo(Problem)
