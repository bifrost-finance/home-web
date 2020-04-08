import React, { useState, useEffect, useImperativeHandle } from "react";
import { Flex, Content, color, Text, CardFlex, View, SVG, radius, CoinIcon, Input, TextTypesetting } from "../components/Styles"
const TypingInput = ({FocusEvents,inputValue}) => {
    < Input onChange={FocusEvents} value={inputValue} type="number"
        onInput={(e) => { if (e.target.value.length > 15) e.target.value = e.target.value.slice(0, 15) }}
        onkeypress={(event) => { return (/[\d]/.test(String.fromCharCode(event.keyCode))) }}
    />

};
export default React.memo(TypingInput)