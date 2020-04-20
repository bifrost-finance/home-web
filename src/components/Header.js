// 头部组件
import React, { useEffect, useState, useMemo } from "react";
import { Flex, Content, color, Text, CardFlex, TextTypesetting, Arrow, Hidden } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Header = ({ screen }) => {
    const { t, i18n } = useTranslation();
    return (
        <Content  w={[28.0625, 68.25, 42]}>
           
        </Content>

    )
};
export default React.memo(Header)
