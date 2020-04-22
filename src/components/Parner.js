import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, CardFlex, TextTypesetting, Arrow, Hidden, OfficialWebsiteText } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Parner = ({ screen }) => {
    const { t, i18n } = useTranslation();
    return (<>
       <ContentPage w={[28.0625, 68.25, 42]} h={50}>
            <OfficialWebsiteText>partner</OfficialWebsiteText>
        </ContentPage>
    </>)
};
export default React.memo(Parner)
