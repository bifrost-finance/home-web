import React, { useState } from 'react'
import { Text, CardFlex, Button, Flex, color, TextTypesetting } from "./Styles"
import Modal from "./Modal"
import Format from './Format'
const CrossPage = ({ abbr, TokenBalance, screen }) => {
    const [showModal, setShowModal] = useState(false)
    const [type, setType] = useState('')
    return (
        <CardFlex w={[20.5, 36, 42]} mb={[1.5, 3, 3]} column bg={color.yellow}>
            <Flex w={[20.5, 36, 42]} h={[6, 9, 9]} bb={color.darkGray} aic px={[2.25, 3, 3]} style={{ boxSizing: 'border-box' }} >
                <Text scale={3} paragraph={1.6667} bold>
                    跨链
                </Text>
            </Flex>
            <Flex w={[16, 30, 36]} mx={[2.25, 3, 3]} aic jcsb >
                <Text color={color.gray} scale={1.5}>{abbr} 余额</Text>
                <Flex aic>
                    <TextTypesetting maxWidth={[5, 13, 13]} bold scale={1.5} color={color.gray} >{TokenBalance}</TextTypesetting>
                    <Text color={color.gray} scale={1.5}>{abbr}</Text>
                </Flex></Flex>
            <Flex w={[16, 30, 36]} aic jcfe={screen === 'mobile' ? false : true} m={[2.25, 3, 3]}  >
                <Button text='转入' w={[16.5, 10.9375, 10.9375]} h={[3, 4, 4]} Event={() => { setShowModal(true); setType('enter') }} />
                <Button text='转出' w={[16.5, 10.9375, 10.9375]} h={[3, 4, 4]} Event={() => { setShowModal(true); setType('out') }} ml={[1, 1.5, 1.5]} />
            </Flex>

            <Modal
                show={showModal}
                close={() => setShowModal(false)}
                title={type === 'enter' ? "转入" : "转出"}
            >


            </Modal>
        </CardFlex>
    )
}
export default React.memo(CrossPage)