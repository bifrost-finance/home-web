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
    const [ColorArray, setColorArray] = useState(Array.from({length:7}, (v,k) => 'false'))
    const { t, i18n } = useTranslation();
    useEffect(() => {
        let element = document.getElementsByClassName('QuarterlyContribution')
        let widthSum = parseFloat(element[0].style.width) * QuarterlyContribution.length
        console.log('起始位置', widthSum)
        switch (screen) {
            case '':
                break;
            case 'mobile':
                setVariableWidth()
                break;
            case 'Tablet':
                setVariableWidth()
                break;
            case 'laptop':
                setVariableWidth(widthSum - 80 + 5  )
                break;
        }

    }, [screen])
    useEffect(() => {
        if (fontSize !== '') {
            setChangeFont(parseFloat(fontSize))
        }
    }, [fontSize])
    const MousePosition = (e) => {
        let element = document.getElementById(`${e.currentTarget.id}`)
        // console.log('起始位置', e.clientX)
        console.log('点击父事件')
        setMouseLeft(e.clientX)
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

    const StopMoving = (e) => {
        setIsDrop(false)
        setMouseLeft(null)

    }
    const ChangeColor = (e) => {
        let arr = ColorArray.map((i, index) => {
            if (parseInt(index) === parseInt(e.currentTarget.id)) {
                return 'true'
            }
            else { return 'false' }
        })
        console.log('点击子元素', arr)
        setColorArray(arr)
    }

    let QuarterlyContribution = [
        { Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
    ]

    const SlideContent = () => {
        return (
            QuarterlyContribution.map((i, index) => {
                return (
                    <Flex className='QuarterlyContribution' bg='#000' column key={index} id={index}
                        style={{ width: '15.875em', position: "relative" ,display: 'inline-block'}}
                        onMouseDown={ChangeColor}
                    >
                        <View  r='50%' style={
                            ColorArray[index] === 'false' ? { position: 'absolute', top: '-3px', left: '-2px', background: '#fff',width:'0.5em',height:'0.5em' }
                                : { position: 'absolute', top: '-7px', left: '-5px', background: '#ED6661',width:'1em',height:'1em' }
                        }></View>
                        <OfficialWebsiteText scale={6.9055} style={ColorArray[index] === 'false' ? { color: '#fff' } : { color: '#ED6661' }} >{i.Time}</OfficialWebsiteText>
                        <Flex mt={1} column style={{ wordWrap: 'normal', wordBreak: 'break-all', width: '15em' }} >
                            {i.Contribution.map((v, i) => {
                                return (<Text scale={0.843} color='rbga(5,5,5,0.3)' key={i}>{v}</Text>)
                            })}
                        </Flex>

                    </Flex>
                )
            })
        )
    }
    return (<>
        <ContentPage w={[28.0625, 80, 42]} >
            <Flex column mt={5} w={[28.0625, 80, 42]}   >
                <View mx={5.625} w={[28.0625, 68.75, 42]}>
                    <OfficialWebsiteText scale={10.7618} color={color.white}>Roadmap</OfficialWebsiteText>

                </View>
                <View mt={7} w={[28.0625, 80, 42]} bg='#000' h={31.5}
                    style={{ overflow: 'hidden', position: 'relative', width: '80em' }
                    }
                    onMouseLeave={StopMoving}
                >
                    <Flex h={30.5}
                        pl={5}
                        mt={1}
                        bt={color.lightGray}
                        onMouseMove={DragEvent}
                        onMouseDown={MousePosition}
                        onMouseUp={StopMoving}
                        id='scroll'
                        style={{ position: 'relative' ,whiteSpace: 'nowrap',display:'inline-block'}}
                    >
                        <SlideContent />

                    </Flex>
                </View>
            </Flex>
        </ContentPage>
    </>)
};
export default React.memo(Roadmap)
