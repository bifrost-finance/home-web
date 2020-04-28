import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, ContentPage, Flex, FooterSubjectText } from "./Styles"
const Footer = () => {
  return (
    <>
      <ContentPage w={[20, 80, 42]} >
        <Flex
          h={[5.3125, 7.875, 5.3125]} aic
          w={[17.728, 68.75, 37.24]}
          mx={[1.136, 5.625, 2.38]}>
          <FooterSubjectText ff='SF Pro Text' >Bifrost Network © 2019</FooterSubjectText></Flex>
      </ContentPage>
    </>
  )
};

export default React.memo(Footer)
