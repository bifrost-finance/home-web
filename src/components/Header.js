// 头部组件
import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, OfficialWebsiteText, BgView, View, Hidden, SVG } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ReactComponent as Down } from "../images/down.svg";
import { ReactComponent as Display } from "../images/display.svg";
import { ReactComponent as IconClose } from "../images/IconClose.svg";
const Header = ({ screen }) => {
    const { t, i18n } = useTranslation();
    const [display, setDisplay] = useState(false)
    const AnchorJump = () => {
        window.setTimeout(() => {
            setDisplay(false)
        }, 200);
    }
    const NavigationItem = ({ Text }) => {
        return (
            <View> <OfficialWebsiteText color={color.white} scale={1.125}>{t(`${Text}`)}</OfficialWebsiteText></View>
        )
    }
    const MobileNavigationItem = ({ Text, k }) => {
        return (
            <BgView w={[20, 0, 42]} pl={[2.8, 0, 4.985]} h={3.5} aic>
                <OfficialWebsiteText key={k} className='Item' color={color.white} bg={color.black} scale={1.25}
                >{t(`${Text}`)}</OfficialWebsiteText></BgView>
        )
    }
    return (<>
        {/* [17.3, 68.75, 36.345] */}
        <ContentPage w={[20, 80, 42]} >
            <Flex column>
                <Flex jcsb w={[20, 80, 42]} aic h={5.625} >
                    <Flex jcsb w={[0, 28.75, 0]} aic
                        ml={[0.603, 5.625, 1.265]}
                        onClick={screen === 'laptop' ? null : () => { setDisplay(!display) }}
                    >
                        <Hidden desktop >
                            <View mr={display ? [1.35, 0, 2.75] : [1.27841, 0, 2.6786]} ml={display ? [0.1, 0, 0.1] : null} >
                                {display ? <SVG svg={IconClose} height={0.62} />
                                    : <SVG svg={Display} height={0.4} />}
                            </View>
                        </Hidden>
                        <OfficialWebsiteText color={color.white} scale={1.375} ls={-0.042}  >Bifrost</OfficialWebsiteText>
                        <Hidden mobile tablet>
                            <Flex w={20} jcsb aic>
                                <NavigationItem Text='关于' />
                                <NavigationItem Text='Ever' />
                                <NavigationItem Text='You Want' />
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
                        mr={[2.952, 5.625, 4.39]}
                    >
                        <OfficialWebsiteText color={color.white} scale={1.125} mr={0.5}>
                            {i18n.language === "zh" ? "EN" : "中文"}
                        </OfficialWebsiteText>
                        <SVG svg={Down} height={0.8} />
                    </Flex>
                </Flex>

                <Hidden desktop >
                    {display ?
                        <Flex w={[20, 0, 42]} column onClick={AnchorJump}>
                            <MobileNavigationItem k={1} Text='关于' />
                            <MobileNavigationItem k={2} Text='关于' />
                            <MobileNavigationItem k={3} Text='关于' />
                        </Flex>
                        : null}
                </Hidden>
            </Flex>

        </ContentPage>

    </>)
};
export default React.memo(Header)
