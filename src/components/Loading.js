import React from "react";
import { Text, Content, CardFlex, color } from "./Styles"
const Loading = () => {
    return (
        <Content fd="column" mt={1.5} w={[20.5, 75, 42]} mb={2}>
            <CardFlex column w={[20.5, 75, 42]} h={30} jcc aic>
                <Text color={color.darkGray} scale={3}>加载中...</Text>
            </CardFlex></Content>
    )
};
export default React.memo(Loading)