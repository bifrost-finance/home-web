import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, Content, CardFlex, Flex, color, Hidden, } from "./Styles"
const Footer = () => {
  return (
    <>
      <Content fd="column" w={[28.0625, 68.25, 42]} >
        <Flex>脚</Flex>
      </Content>
    </>
  )
};

export default React.memo(Footer)
