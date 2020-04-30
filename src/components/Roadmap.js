import React, { useEffect, useState, useMemo } from "react";
import {
    Flex, ContentPage, color, Text, radius, Hidden, SubjectText, View, CircleView, ThemeView, HiddenThemeView,
    ThemeFlex, ContactSubjectText, MobileSubjectText, MobileCircleView, AdaptiveFlex, AdaptiveWidth
} from "./Styles"
import { useTranslation } from "react-i18next";
import { CSSTransition } from 'react-transition-group';
import './BottomToTop.scss';
const Roadmap = ({ screen, fontSize, theme }) => {
    const [isDrop, setIsDrop] = useState(false)
    const [inProp, setInProp] = useState(false)
    const [mouseLeft, setMouseLeft] = useState(null)
    const [ElementLeft, setElementLeft] = useState(null)
    const [Variablewidth, setVariableWidth] = useState(null)
    const [ChangeFont, setChangeFont] = useState(null)
    const [ColorArray, setColorArray] = useState(Array.from({ length: 7 }, (v, k) => false))
    const { t, i18n } = useTranslation();
    const [showButton, setShowButton] = useState(false);
    const handleLoad = () => {
        setInProp(true);
    };
    useEffect(() => {
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    useEffect(() => {
        let widthSum = parseFloat(17.1875) * QuarterlyContribution.length
        switch (screen) {
            case '':
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
        setMouseLeft(e.clientX)
        setElementLeft(element.offsetLeft)
        setIsDrop(true)
    }
    const DragEvent = (e) => {
        let element = document.getElementById(`${e.currentTarget.id}`)
        // 鼠标按下并移动
        if (isDrop && Variablewidth !== null && ChangeFont !== null) {
            let MovingDistance = parseFloat(fontSize) * parseFloat(Variablewidth)
            if ((element.offsetLeft === -(MovingDistance) && e.clientX - mouseLeft > 0) || element.offsetLeft > - (MovingDistance)
                && ((element.offsetLeft === 0 && e.clientX - mouseLeft < 0) || element.offsetLeft < 0)) {
                if (ElementLeft + (e.clientX - mouseLeft) > 0 || ElementLeft + (e.clientX - mouseLeft) < -(MovingDistance)) {
                    return
                }
                else { element.style.left = `${ElementLeft + (e.clientX - mouseLeft)}px` }
            }
        }
    }
    const StopMoving = () => {
        setIsDrop(false)
        setMouseLeft(null)
    }
    const ChangeColor = (e) => {
        let arr = ColorArray.map((i, index) => {
            if (parseInt(index) === parseInt(e.currentTarget.id)) {
                return true
            }
            else { return false }
        })
        setColorArray(arr)
    }
    const MobileChangeColor = (e) => {
        let dom = e.currentTarget.parentNode.children
        Array.from(dom).map((v, index) => {
            if (parseInt(e.currentTarget.id) === parseInt(index)) {
                v.firstElementChild.firstElementChild.className = (`View`);
                v.firstElementChild.lastElementChild.firstElementChild.className = (`ClickSubjectText`);
            }
            else {
                v.firstElementChild.firstElementChild.className = (`CircleView`);
                v.firstElementChild.lastElementChild.firstElementChild.className = (`SubjectText`);
            }
        })
    }

    let QuarterlyContribution = [
        { id: 0, Time: '2019 Q1', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 1, Time: '2019 Q2', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 2, Time: '2019 Q3', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 3, Time: '2019 Q4', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 4, Time: '2019 Q5', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 5, Time: '2019 Q6', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
        { id: 6, Time: '2019 Q7', Contribution: ['First Line Of Code', 'First Line Of Code', 'First Line Of Code'] },
    ]
    const MobileDevice = () => {
        return (
            <Hidden desktop>
                <ThemeView
                    mt={7}
                    h={31.5}
                    w={[20, 80, 42]}
                    style={{ overflow: 'hidden' }}
                >
                    <ThemeView
                        h={32.5}
                        w={[20, 80, 42]}
                        style={{ overflowY: 'hidden', overflowX: 'scroll' }}>
                        <ThemeFlex
                            h={31.5}
                            pl={[1.136, 5, 2.38]}
                            mt={1}
                            bt
                            id='scroll'
                            style={{ position: 'relative', whiteSpace: 'nowrap', display: 'inline-block' }}
                        >
                            <SlideContent />
                        </ThemeFlex>
                    </ThemeView>
                </ThemeView>
            </Hidden>
        )
    };
    const SlideContent = () => {
        return (
            QuarterlyContribution.map((i, index) => {
                return (
                    <>
                        <AdaptiveWidth
                            className='QuarterlyContribution'
                            column
                            key={i.id}
                            id={index}
                            w={[8.558, 17.1875, 17.932]}
                            onMouseDown={screen === 'laptop' ? ChangeColor : null}
                            onClickCapture={screen === 'laptop' ? null : MobileChangeColor}
                        >
                            <Hidden desktop>
                                <MobileCircleView
                                    className={`CircleView`}
                                />
                                <View
                                    mt={1.25}
                                >
                                    < Text
                                        className={`SubjectText`}
                                    >
                                        {i.Time}
                                    </Text>
                                </View>
                            </Hidden>
                            <Hidden mobile tablet >
                                <CircleView
                                    r={radius.rounded}
                                    c={ColorArray[index] ? true : false}
                                    style={ColorArray[index] ? { position: 'absolute', top: '-8px', width: '1em', height: '1em' }
                                        : { position: 'absolute', top: '-4.5px', width: '0.5em', height: '0.5em' }
                                    } />
                                <View mt={1.25}>
                                    <SubjectText
                                        scale={1.5}
                                        bold
                                        c={ColorArray[index] ? true : false} >
                                        {i.Time}
                                    </SubjectText>
                                </View>
                            </Hidden>
                            <AdaptiveFlex
                                mt={1}
                                column
                                w={[8.558, 17.1875, 17.932]}
                            >
                                {i.Contribution.map((v, index) => {
                                    return (<ContactSubjectText scale={1.125} key={index}>{v}</ContactSubjectText>)
                                })}
                            </AdaptiveFlex>
                        </AdaptiveWidth></>
                )
            })
        )
    }
    return (<>
        <ContentPage w={[20, 80, 42]} >
            <CSSTransition
                in={inProp}
                timeout={5000}
                classNames='problem'
                onEnter={() => setShowButton(true)}
                onExited={() => setShowButton(false)}
            >
                <Flex
                    column
                    mt={5}
                    w={[20, 80, 42]}   >
                    <View
                        w={[17.728, 68.75, 37.24]}
                        mx={[1.136, 5.625, 2.38]}
                    >
                        <SubjectText
                            scale={4.5}
                            bold
                            ls={-0.042}  >
                            {showButton && `Roadmap`}
                        </SubjectText>
                    </View>
                    {showButton && (<Hidden mobile tablet>
                        <HiddenThemeView
                            mt={7}
                            h={31.5}
                            w={80}
                            onMouseLeave={screen === 'laptop' ? StopMoving : null}
                        >
                            <ThemeFlex
                                h={30.5}
                                pl={[1.136, 5, 2.38]}
                                mt={1}
                                bt
                                onMouseDown={screen === 'laptop' ? MousePosition : null}
                                onMouseMove={screen === 'laptop' ? DragEvent : null}
                                onMouseUp={screen === 'laptop' ? StopMoving : null}
                                id='scroll'
                                style={{ position: 'relative', whiteSpace: 'nowrap', display: 'inline-block' }}
                            >
                                <SlideContent />
                            </ThemeFlex>
                        </HiddenThemeView>
                    </Hidden>)}

                    {showButton && <MobileDevice />}
                </Flex>
            </CSSTransition>
        </ContentPage>
    </>)
};
export default React.memo(Roadmap)