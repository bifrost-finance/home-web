import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, CardFlex, TextTypesetting, Arrow, Hidden, OfficialWebsiteText, View } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Roadmap = ({ screen }) => {
    const [isDrop, setIsDrop] = useState(false)
    const [mouseLeft, setMouseLeft] = useState(null)
    const { t, i18n } = useTranslation();
    const MousePosition = (e) => {
        setMouseLeft(e.clientX)
        // let element = document.getElementById(`${e.currentTarget.id}`)
        // let ElementLeft = element.parentNode.offsetLeft
        // console.log('获取', element.parentNode.offsetLeft)
        setIsDrop(true)
    }
    const DragEvent = (e) => {
        let element = document.getElementById(`${e.currentTarget.id}`)
        if (isDrop && (element.offsetLeft < 0 || (element.offsetLeft === 0 && e.clientX - mouseLeft < 0))) {
            console.log('获取', element.offsetLeft)
            element.style.left = `${e.clientX - mouseLeft}px`
        }
        // if (isDrop && screen === 'laptop' && (Math.abs(e.clientX - mouseLeft) < 80) 
        // && (element.offsetLeft < 0 ||(element.offsetLeft===0 && e.clientX - mouseLeft < 0 ) )) {
        //     element.style.left = `${ e.clientX - mouseLeft}px`
        // }
    }
    const StopMoving = (e) => {
        setIsDrop(false)
        setMouseLeft(null)
        console.log('释放')
    }
    return (<>
        <ContentPage w={[28.0625, 80, 42]} h={50}>
            <Flex column mt={5} w={[28.0625, 80, 42]} h={50}  >
                <View mx={5.625} w={[28.0625, 68.75, 42]}>
                    <OfficialWebsiteText scale={10.7618} color={color.white}>Roadmap</OfficialWebsiteText>
                </View>
                <View mt={7.5} w={[28.0625, 80, 42]} bg={color.black} h={31}
                    style={{ overflow: 'hidden', position: 'relative', width: '80em' }
                    }
                >
                    <Flex h={31} w={100}
                        onMouseMove={DragEvent}
                        onMouseDown={MousePosition}
                        onMouseUp={StopMoving}
                        id='scroll'
                        style={{ position: 'relative' }}
                    >
                        <Flex w={20} bg={color.blue}
                        >haha1</Flex>
                        <Flex w={20} bg={color.blue}
                        >haha2</Flex>

                        <Flex w={20} bg={color.blue}
                        >haha3</Flex>

                        <Flex w={20} bg={color.blue}
                        >haha4</Flex>

                        <Flex w={20} bg={color.blue}
                        >haha5</Flex>
                    </Flex>
                </View>
            </Flex>
        </ContentPage>
    </>)
};
export default React.memo(Roadmap)
