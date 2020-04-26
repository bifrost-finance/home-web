import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, ContentPage, Flex, color } from "./Styles"
const Footer = () => {
  return (
    <>
      <ContentPage w={[20, 80, 42]} >
        <Flex
          h={[5.3125, 7.875, 5.3125]} aic
          w={[17.728, 68.75, 37.24]}
          mx={[1.136, 5.625, 2.38]}>
          <Text ff='SF Pro Text' color={color.white}>Bifrost Network © 2019</Text></Flex>
      </ContentPage>
    </>
  )
};

export default React.memo(Footer)
