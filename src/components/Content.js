import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, CardFlex, TextTypesetting, Arrow, Hidden, OfficialWebsiteText } from "./Styles"
import Hero from './Hero'
import Problem from './Problem'
import Roadmap from './Roadmap'
import Parner from './Parner'
import Contact from './Contact'
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Content = ({ screen }) => {
    const { t, i18n } = useTranslation();
    return (<>
        <Flex column>
            <Hero />
            <Problem />
            <Roadmap screen={screen} />
            <Parner />
            <Contact />
        </Flex>
    </>)
};
export default React.memo(Content)
