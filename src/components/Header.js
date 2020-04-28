// 头部组件
import React, { useState } from "react";
import { Flex, ContentPage, color, SubjectText, MobileThemeMenu, View, Hidden, SVG, Text } from "./Styles"
import { useTranslation } from "react-i18next";
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
            <View> <SubjectText bold scale={1.125}>{t(`${Text}`)}</SubjectText></View>
        )
    }
    const MobileNavigationItem = ({ Text, k }) => {
        return (
            <MobileThemeMenu
                w={[22.223, 0, 41.482]}
                pl={[2.8, 0, 4.985]}
                h={[3.89, 0, 3.46]}
                key={k}
                scale={1.125}
                paragraph={[3.89, 0, 3.46]}
            >
                {t(`${Text}`)}
            </MobileThemeMenu>
        )
    }
    return (<>
        <ContentPage w={[20, 80, 42]} >
            <Flex column >
                <Flex
                    jcsb
                    aic
                    w={[20, 80, 42]}
                    h={5.625}
                >
                    <Flex
                        jcsb
                        aic
                        w={[0, 28.75, 0]}
                        ml={[0.603, 5.625, 1.265]}
                        onClick={screen === 'laptop' ? null : () => { setDisplay(!display) }}
                    >
                        <Hidden desktop >
                            <View
                                mr={display ? [1.35, 0, 2.75] : [1.27841, 0, 2.6786]}
                                ml={display ? [0.1, 0, 0.1] : null}
                            >
                                {display ? <SVG svg={IconClose} height={0.62} />
                                    : <SVG svg={Display} height={0.4} />}
                            </View>
                        </Hidden>
                        <SubjectText
                            bold
                            scale={1.375}
                            ls={-0.042}
                        >
                            Bifrost
                            </SubjectText>
                        <Hidden
                            mobile
                            tablet
                        >
                            <Flex
                                w={20}
                                jcsb
                                aic>
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
                        <SubjectText
                            bold
                            scale={1.125}
                            mr={0.5}
                        >
                            {i18n.language === "zh" ? "EN" : "中文"}
                        </SubjectText>
                        <SVG
                            svg={Down}
                            height={0.8}
                        />
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
