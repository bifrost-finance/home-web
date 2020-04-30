import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, View, Button, SubjectText, AdaptiveFlex, ColumnFlex } from "./Styles"
import { useTranslation } from "react-i18next";
import { CSSTransition } from 'react-transition-group';
import './BottomToTop.scss';
const Hero = ({ screen }) => {
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
    return (<>
        <ContentPage w={[20, 80, 42]} >
            <CSSTransition
                in={inProp}
                timeout={5000}
                classNames='hero'
                onEnter={() => setShowButton(true)}
                onExited={() => setShowButton(false)}
            >

                <Flex
                    column
                    mt={[2.592, 8, 5.431]}
                    w={[15.74, 68.75, 33.072]}
                    mx={[2.13, 5.625, 4.464]}
                    h={[40, 50, 35]}
                    mb={[7.10, 0, 14.88]}
                >
                    <AdaptiveFlex
                        className="hero"
                        w={[15.74, 40, 33.072]}

                    >

                        <SubjectText
                            bold
                            scale={4.5}
                            ls={-0.042}
                        >
                            {showButton && `A parachain designed for staking's liquidity`}
                        </SubjectText>

                    </AdaptiveFlex>
                    <ColumnFlex
                        mt={[2.326, 2, 4.762]}
                    >
                        {showButton && (<>
                            <Button
                                w={[15.74, 9.9375, 33.072]}
                                h={3}
                                FontlightColor={color.black}
                                FontdarkColor={color.black}
                                lightColor={color.lightColor}
                                darkColor={color.white}
                                text={'Get Started'}
                                scale={1.125}
                                radius={'4px'}

                            />
                            <Button
                                mt={[1.167, 0, 1.171]}
                                ml={[0, 0.75, 0]}
                                w={[15.74, 9.9375, 33.072]}
                                h={3}
                                FontlightColor={color.white}
                                FontdarkColor={color.white}
                                lightColor={color.black}
                                darkColor={color.darkColor}
                                text={'White Paper'}
                                scale={1.125}
                                radius={'4px'}
                            />
                        </>)}

                    </ColumnFlex>
                </Flex>
            </CSSTransition>
        </ContentPage >
    </>)
};
export default React.memo(Hero)
