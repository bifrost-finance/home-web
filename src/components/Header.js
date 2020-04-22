// 头部组件
import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, OfficialWebsiteText, CardFlex, TextTypesetting, View, Hidden, SVG } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ReactComponent as Down } from "../images/down.svg";
const Header = ({ screen }) => {
    const { t, i18n } = useTranslation();
    return (<>

        <ContentPage w={80} h={5.625}>
            <Flex jcsb w={[28.0625, 68.75, 42]} aic h={5.625} mx={5.625}>
                <Flex jcsb w={28.75} aic>
                    <OfficialWebsiteText color={color.white} scale={2.2785}>Bifrost</OfficialWebsiteText>
                    <Hidden mobile >
                        <Flex w={20} jcsb aic>
                            <View> <OfficialWebsiteText color={color.white} scale={0.843}>What</OfficialWebsiteText></View>
                            <View> <OfficialWebsiteText color={color.white} scale={0.843}>Ever</OfficialWebsiteText></View>
                            <View> <OfficialWebsiteText color={color.white} scale={0.843}>You Want</OfficialWebsiteText></View>
                        </Flex>
                    </Hidden>
                </Flex>
                <Flex
                    onClick={() => {
                        i18n.changeLanguage(i18n.language === "zh" ? "en" : "zh");
                        localStorage.setItem("userLangStorage", i18n.language);
                    }}
                    style={{ cursor: "pointer" }}
                    aic
                >
                    <OfficialWebsiteText color={color.white} scale={0.843} mr={0.5}>
                        {i18n.language === "zh" ? "EN" : "中文"}
                    </OfficialWebsiteText>
                    <SVG svg={Down} height={0.8} />
                </Flex>
            </Flex>

        </ContentPage>

    </>)
};
export default React.memo(Header)
