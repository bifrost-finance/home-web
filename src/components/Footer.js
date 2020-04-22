import React, { lazy, Suspense, useState, useEffect } from "react";
import { Text, ContentPage, CardFlex, Flex, color, Hidden, OfficialWebsiteText} from "./Styles"
const Footer = () => {
  return (
    <>
      <ContentPage w={[28.0625, 68.25, 42]} h={7.875}>
            <Text ff='SF Pro Text'>Bifrost Network © 2019</Text>
        </ContentPage>
    </>
  )
};

export default React.memo(Footer)
