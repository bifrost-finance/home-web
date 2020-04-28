import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, View, Button, SubjectText } from "./Styles"
import { useTranslation } from "react-i18next";
const Hero = ({ screen }) => {
    const { t, i18n } = useTranslation();
    return (<>
        <ContentPage w={[20, 80, 42]} >
            <Flex
                column
                mt={[2.592, 8, 5.431]}
                w={[15.74, 68.75, 33.072]}
                mx={[2.13, 5.625, 4.464]}
                h={[, 50,]}
                mb={[7.10, 0, 14.88]}
            >
                <View
                    style={screen === 'mobile' ?
                        { wordWrap: 'normal', wordBreak: 'break-all', width: '15.74em' }
                        : screen === 'laptop' ? { wordWrap: 'normal', wordBreak: 'break-all', width: '40em' }
                            : { wordWrap: 'normal', wordBreak: 'break-all', width: '33.072em' }}
                >
                    <SubjectText
                        bold
                        scale={4.5}
                        ls={-0.042}
                    >
                        A parachain designed for staking's liquidity
                        </SubjectText>
                </View>
                <Flex
                    mt={[2.326, 2, 4.762]}
                    column={screen === 'laptop' ? false : true}
                >
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
                </Flex>
            </Flex>

        </ContentPage>
    </>)
};
export default React.memo(Hero)
