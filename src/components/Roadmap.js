import React, { useEffect, useState, useMemo } from "react";
import { Flex, ContentPage, color, Text, CardFlex, TextTypesetting, radius, Hidden, OfficialWebsiteText, View } from "./Styles"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Roadmap = ({ screen, fontSize }) => {
    const [isDrop, setIsDrop] = useState(false)
    const [mouseLeft, setMouseLeft] = useState(null)
    const [ElementLeft, setElementLeft] = useState(null)
    const [Variablewidth, setVariableWidth] = useState(null)
    const [ChangeFont, setChangeFont] = useState(null)
    const [ColorArray, setColorArray] = useState(Array.from({ length: 7 }, (v, k) => 'false'))
    const { t, i18n } = useTranslation();
    useEffect(() => {
        let element = document.getElementsByClassName('QuarterlyContribution')
        let widthSum = parseFloat(element[0].style.width) * QuarterlyContribution.length
        // console.log('起始位置', widthSum)
        // console.log('起始位置', element)
        switch (screen) {
            case '':
                break;
            case 'mobile':
                setVariableWidth(widthSum - 20 + 1.136)
                break;
            case 'Tablet':
                setVariableWidth(widthSum - 42 + 2.38)
                break;
            case 'laptop':
                setVariableWidth(widthSum - 80 + 5)
                break;
        }

    }, [screen])
    useEffect(() => {
        if (fontSize !== '') {
            setChangeFont(parseFloat(fontSize))
        }
    }, [fontSize])
    const MousePosition = (e) => {
        let element = document.getElementById(`scroll`)
        console.log('起始位置', e.clientX)
        console.log('点击父事件')
        setMouseLeft(e.clientX)
        setElementLeft(element.offsetLeft)
        setIsDrop(true)
    }
    const TouchPosition = (e) => {
        let element = document.getElementById(`scroll`)
        console.log('起始位置', e.changedTouches[0].clientX)
        console.log('点击父事件', element.offsetLeft)
        setMouseLeft(e.changedTouches[0].clientX)
        setElementLeft(element.offsetLeft)
        setIsDrop(true)
    }
    const DragEvent = (e) => {
        let element = document.getElementById(`${e.currentTarget.id}`)

        // 鼠标按下并移动
        if (isDrop && Variablewidth !== null && ChangeFont !== null) {
            let MovingDistance = parseFloat(fontSize) * parseFloat(Variablewidth)
            console.log('最大移动距离', -(MovingDistance))
            console.log('最大移动距离', parseFloat(fontSize))
            console.log('最大移动距离', parseFloat(Variablewidth))
            if ((element.offsetLeft === -(MovingDistance) && e.clientX - mouseLeft > 0) || element.offsetLeft > - (MovingDistance)
                && ((element.offsetLeft === 0 && e.clientX - mouseLeft < 0) || element.offsetLeft < 0)) {
                if (ElementLeft + (e.clientX - mouseLeft) > 0 || ElementLeft + (e.clientX - mouseLeft) < -(MovingDistance)) {
                    return
                }
                else { element.style.left = `${ElementLeft + (e.clientX - mouseLeft)}px` }

            }

        }

    }
    const TouchEvent = (e) => {
        let element = document.getElementById(`scroll`)
        // 鼠标按下并移动
        if (isDrop && Variablewidth !== null && ChangeFont !== null) {
            let MovingDistance = parseFloat(fontSize) * parseFloat(Variablewidth)
            console.log('最大移动距离', e.changedTouches)
            // console.log('最大移动距离', parseFloat(fontSize))
            // console.log('最大移动距离', parseFloat(Variablewidth))
            if ((element.offsetLeft === -(MovingDistance) && e.changedTouches[0].clientX - mouseLeft > 0) || element.offsetLeft > - (MovingDistance)
                && ((element.offsetLeft === 0 && e.changedTouches[0].clientX - mouseLeft < 0) || element.offsetLeft < 0)) {
                if (ElementLeft + (e.changedTouches[0].clientX - mouseLeft) > 0 || ElementLeft + (e.changedTouches[0].clientX - mouseLeft) < -(MovingDistance)) {
                    return
                }
                else { element.style.left = `${ElementLeft + (e.changedTouches[0].clientX - mouseLeft)}px` }
            }
        }
    }

    const StopMoving = (e) => {
        setIsDrop(false)
        setMouseLeft(null)
        console.log('释放')
    }
    const ChangeColor = (e) => {
        console.log('点击子元素')
        let arr = ColorArray.map((i, index) => {
            if (parseInt(index) === parseInt(e.currentTarget.id)) {
                return 'true'
            }
            else { return 'false' }
        })
        console.log('点击子元素')
        setColorArray(arr)
    }

    let QuarterlyContribution = [
        { id: 0, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 1, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 2, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 3, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 4, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 5, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 6, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
    ]

    const SlideContent = () => {
        return (
            QuarterlyContribution.map((i, index) => {
                return (
                    <>
                        <Flex className='QuarterlyContribution' bg={color.black} column key={i.id} id={index}
                            style={screen === 'mobile' ?
                                { width: '8.558em', position: "relative", display: 'inline-block' }
                                : screen === 'Tablet' ? { width: '17.932em', position: "relative", display: 'inline-block' }
                                    : { width: '17.1875em', position: "relative", display: 'inline-block' }}
                            onMouseDown={ChangeColor}
                            onTouchStart={ChangeColor}
                        >
                            <View r={radius.rounded} style={
                                ColorArray[index] === 'false' ? { position: 'absolute', top: '-4.5px', background: '#fff', width: '0.5em', height: '0.5em' }
                                    : { position: 'absolute', top: '-8px', background: '#ED6661', width: '1em', height: '1em' }
                            }></View>
                            <View mt={1.25}>
                                <OfficialWebsiteText scale={1.5} style={ColorArray[index] === 'false' ? { color: '#fff' } : { color: '#ED6661' }} >{i.Time}</OfficialWebsiteText>
                            </View>
                            <Flex mt={1} column style={{ wordWrap: 'normal', wordBreak: 'break-all', width: '15em' }} >
                                {i.Contribution.map((v, index) => {
                                    return (<Text scale={1.125} color='#F0F0F0' key={index}>{v}</Text>)
                                })}
                            </Flex>

                        </Flex></>
                )
            })
        )
    }
    return (<>
        <ContentPage w={[20, 80, 42]} >
            <Flex column
                mt={5}
                w={[20, 80, 42]}   >
                <View
                    w={[17.728, 68.75, 37.24]}
                    mx={[1.136, 5.625, 2.38]}
                >
                    <OfficialWebsiteText scale={4.5} color={color.white} ls={-0.042}  >Roadmap</OfficialWebsiteText>
                </View>
                <View mt={7} bg={color.black} h={31.5}
                    style={screen === 'mobile' ?
                        { overflow: 'hidden', position: 'relative', width: '20em' }
                        : screen === 'Tablet' ? { overflow: 'hidden', position: 'relative', width: '42em' }
                            : { overflow: 'hidden', position: 'relative', width: '80em' }}
                    onMouseLeave={StopMoving}
                // onTouchCancel={StopMoving} 
                // onTouchLeave={StopMoving}
                >
                    <Flex h={30.5}
                        pl={[1.136, 5, 2.38]}
                        mt={1}
                        bt={color.lightGray}
                        onMouseDown={MousePosition}
                        onTouchStart={TouchPosition}
                        onMouseMove={DragEvent}
                        onTouchMove={TouchEvent}
                        onMouseUp={StopMoving}
                        onTouchEnd={StopMoving}
                        id='scroll'
                        style={{ position: 'relative', whiteSpace: 'nowrap', display: 'inline-block' }}
                    >
                        <SlideContent />

                    </Flex>
                </View>
            </Flex>
        </ContentPage>
    </>)
};
export default React.memo(Roadmap)
