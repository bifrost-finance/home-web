import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, ContentPage, CardFlex, Flex, color, Hidden, OfficialWebsiteText } from "./Styles"
const Footer = () => {
  return (
    <>
      <ContentPage w={[20, 80, 42]} h={[5.3125,7.875,5.3125]}>
        <Flex
          w={[17.728, 68.75, 37.24]}
          mx={[1.136, 5.625, 2.38]}>
          <Text ff='SF Pro Text'>Bifrost Network © 2019</Text></Flex>
      </ContentPage>
    </>
  )
};

export default React.memo(Footer)
