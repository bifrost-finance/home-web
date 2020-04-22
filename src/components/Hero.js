import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, CardFlex, View, Button, Hidden, OfficialWebsiteText } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Hero = ({ screen }) => {
    const { t, i18n } = useTranslation();
    return (<>
        <ContentPage w={[28.0625, 80, 42]} h={50}>
            <Flex column mt={8} w={[28.0625, 68.75, 42]}  h={50} mx={5.625}>
                <View style={{ wordWrap: 'normal',wordBreak: 'break-all',  width: '40.875em' }}>
                    <OfficialWebsiteText scale={10.7618} color={color.white}
                    >A parachain designed for stakinSSSSSSSSSSSSSg's liquidity </OfficialWebsiteText>
                </View>
                <Flex mt={2}>
                    <Button
                        w={9.9375}
                        h={3}
                        color={color.black}
                        bg={color.white}
                        text={'Get Started'}
                        scale={0.843}
                        radius={'4px'}

                    />
                    <Button />
                    <Button
                        ml={0.75}
                        w={9.9375}
                        h={3}
                        color={color.white}
                        bg={'#2C2C2C'}
                        text={'White Paper'}
                        scale={0.843}
                        radius={'4px'}
                    />
                    <Button />
                </Flex>
            </Flex>

        </ContentPage>
    </>)
};
export default React.memo(Hero)
