import React from "react";
import { useTranslation } from "react-i18next";
import styled, { css, createGlobalStyle } from "styled-components";
// import Formatter from "../utils/Formatter";
import { lighten, darken, rgba } from "polished";
import { ReactComponent as IconEos } from "../images/eos-19.svg";
import { ReactComponent as IconDot } from "../images/dot-15.svg";
import { ReactComponent as IconKsm } from "../images/ksm-17.svg";
export const mobile = (...args) => css`
  @media screen and (max-width: 719px) {
    ${css(...args)}
  }
`;
export const tablet = (...args) => css`
@media screen and (min-width: 720px) and (max-width: 1179px)  {
    ${css(...args)}
  }
`;

export const desktop = (...args) => css`
  @media screen and (min-width: 1280px) {
    ${css(...args)}
  }
`;

export const color = {
    transparent: "transparent",
    black: "hsl(243, 10%, 10%)",
    white: "white",
    darkGray: "#EFEEF5",
    gray: "#8E8E95",
    lightGray: " #F6F5FF",
    fontGray: '#DBDBE8',
    washedGray: "#F7F7F9",
    washedRed: "#ffdfdf",
    red: "rgb(255,59,48)",
    orange: "rgb(255,149,0)",
    washedYellow: "#fffceb",
    yellow: "#FED01A",
    washedGreen: "#e8fdf5",
    green: "#79D62C",
    darkGreen: "#009090",
    tealGreen: "hsl(182, 70%, 50%)",
    washedBlue: "#f6fffe",
    blue: "#002DC2",
    darkBlue: "#1d3549",
    tealBlue: "rgb(90,200,250)",
    purple: "rgb(88,86,214)",
    pink: "rgb(255,45,85)",

    stake: "hsl(171, 65%, 45%)",
    pool: "hsl(243, 85%, 65%)",
    news: "hsl(347, 75%, 55%)",

    wechat: "#04c160",
    telegram: "#2fa6e1",
    iost: "#000000",
    eos: "#363754",
    eth: "#473654",
    atom: "#363D54",
    lpt: "#364754",
    ksm: "#3f3f3f",
    lol: "#364754",
    pcx: "#7b6116",
    dot: "#543642",

    border: {
        sm: rgba("#202020", 0.075),
        md: rgba("#202020", 0.1),
        lg: rgba("#202020", 0.2),
        xl: rgba("#202020", 0.4)
    }
};

export const shadow = {
    sm: "0 0.0625rem 0.25rem 0 " + rgba(color.black, 0.1),
    md: "0 0.125rem 0.5rem 0 " + rgba(color.black, 0.09),
    lg: "0 0.25rem 1rem 0 " + rgba(color.black, 0.08),
    xl: "0 1rem 4rem 0 " + rgba(color.black, 0.07)
};

export const radius = {
    sm: "0.25em",
    sm1: "0.75em",
    xsm: "2.5em",
    md: "0.5em",
    lg: "1em",
    xl: "1.5em",
    rounded: "999px"
};

export const View = styled.div`
  z-index: ${p => p.z};
  display: ${p => p.inline && "inline-block"};
  flex: ${p => p.flex};
  text-align: ${p =>
        p.center ? "center" : p.left ? "left" : p.right && "right"};
  min-width: ${p => p.minWidth && p.minWidth + "em"};
  min-height: ${p => p.minHeight && p.minHeight + "em"};

  background: ${p => p.bg};
  border-radius: ${p => p.r};
  box-shadow: ${p => p.s};

  border: ${p => p.b && "1px solid " + p.b};
  border-top: ${p =>
        p.by ? "1px solid " + p.by : p.bt && "1px solid " + p.bt};
  border-right: ${p =>
        p.bx ? "1px solid " + p.bx : p.br && "1px solid " + p.br};
  border-bottom: ${p =>
        p.by ? "1px solid " + p.by : p.bb && "1px solid " + p.bb};
  border-left: ${p =>
        p.bx ? "1px solid " + p.bx : p.bl && "1px solid " + p.bl};

  ${mobile`
    width: ${p =>
            p.w && (typeof p.w === "number" ? p.w + "em" : p.w[0] && p.w[0] + "em")};
    max-width:${p =>
            p.maxWidth && (typeof p.maxWidth === "number" ? p.maxWidth + "em" : p.maxWidth[0] && p.maxWidth[0] + "em")};
    max-height:${p =>
            p.maxHeight && (typeof p.maxHeight === "number" ? p.maxHeight + "em" : p.maxHeight[0] && p.maxHeight[0] + "em")};
    height:${p =>
            p.h && (typeof p.h === "number" ? p.h + "em" : p.h[0] && p.h[0] + "em")};
    margin: ${p =>
            p.m && (typeof p.m === "number" ? p.m + "em" : p.m[0] && p.m[0] + "em")};
    margin-top: ${p =>
            p.my
                ? typeof p.my === "number"
                    ? p.my + "em"
                    : p.my[0] && p.my[0] + "em"
                : p.mt &&
                (typeof p.mt === "number" ? p.mt + "em" : p.mt[0] && p.mt[0] + "em")};
    margin-right: ${p =>
            p.mx
                ? typeof p.mx === "number"
                    ? p.mx + "em"
                    : p.mx[0] && p.mx[0] + "em"
                : p.mr &&
                (typeof p.mr === "number" ? p.mr + "em" : p.mr[0] && p.mr[0] + "em")};
    margin-bottom: ${p =>
            p.my
                ? typeof p.my === "number"
                    ? p.my + "em"
                    : p.my[0] && p.my[0] + "em"
                : p.mb &&
                (typeof p.mb === "number" ? p.mb + "em" : p.mb[0] && p.mb[0] + "em")};
    margin-left: ${p =>
            p.mx
                ? typeof p.mx === "number"
                    ? p.mx + "em"
                    : p.mx[0] && p.mx[0] + "em"
                : p.ml &&
                (typeof p.ml === "number" ? p.ml + "em" : p.ml[0] && p.ml[0] + "em")};

    padding: ${p =>
            p.p && (typeof p.p === "number" ? p.p + "em" : p.p[0] && p.p[0] + "em")};
    padding-top: ${p =>
            p.py
                ? typeof p.py === "number"
                    ? p.py + "em"
                    : p.py[0] && p.py[0] + "em"
                : p.pt &&
                (typeof p.pt === "number" ? p.pt + "em" : p.pt[0] && p.pt[0] + "em")};
    padding-right: ${p =>
            p.px
                ? typeof p.px === "number"
                    ? p.px + "em"
                    : p.px[0] && p.px[0] + "em"
                : p.pr &&
                (typeof p.pr === "number" ? p.pr + "em" : p.pr[0] && p.pr[0] + "em")};
    padding-bottom: ${p =>
            p.py
                ? typeof p.py === "number"
                    ? p.py + "em"
                    : p.py[0] && p.py[0] + "em"
                : p.pb &&
                (typeof p.pb === "number" ? p.pb + "em" : p.pb[0] && p.pb[0] + "em")};
    padding-left: ${p =>
            p.px
                ? typeof p.px === "number"
                    ? p.px + "em"
                    : p.px[0] && p.px[0] + "em"
                : p.pl &&
                (typeof p.pl === "number" ? p.pl + "em" : p.pl[0] && p.pl[0] + "em")};
  `}

  ${desktop`
    width: ${p =>
            p.w && (typeof p.w === "number" ? p.w + "em" : p.w[1] && p.w[1] + "em")};
    max-width:${p =>
            p.maxWidth && (typeof p.maxWidth === "number" ? p.maxWidth + "em" : p.maxWidth[1] && p.maxWidth[1] + "em")};
    max-height:${p =>
            p.maxHeight && (typeof p.maxHeight === "number" ? p.maxHeight + "em" : p.maxHeight[1] && p.maxHeight[1] + "em")};
    height:${p =>
            p.h && (typeof p.h === "number" ? p.h + "em" : p.h[1] && p.h[1] + "em")};
    margin: ${p =>
            p.m && (typeof p.m === "number" ? p.m + "em" : p.m[1] && p.m[1] + "em")};
    margin-top: ${p =>
            p.my
                ? typeof p.my === "number"
                    ? p.my + "em"
                    : p.my[1] && p.my[1] + "em"
                : p.mt &&
                (typeof p.mt === "number" ? p.mt + "em" : p.mt[1] && p.mt[1] + "em")};
    margin-right: ${p =>
            p.mx
                ? typeof p.mx === "number"
                    ? p.mx + "em"
                    : p.mx[1] && p.mx[1] + "em"
                : p.mr &&
                (typeof p.mr === "number" ? p.mr + "em" : p.mr[1] && p.mr[1] + "em")};
    margin-bottom: ${p =>
            p.my
                ? typeof p.my === "number"
                    ? p.my + "em"
                    : p.my[1] && p.my[1] + "em"
                : p.mb &&
                (typeof p.mb === "number" ? p.mb + "em" : p.mb[1] && p.mb[1] + "em")};
    margin-left: ${p =>
            p.mx
                ? typeof p.mx === "number"
                    ? p.mx + "em"
                    : p.mx[1] && p.mx[1] + "em"
                : p.ml &&
                (typeof p.ml === "number" ? p.ml + "em" : p.ml[1] && p.ml[1] + "em")};

    padding: ${p =>
            p.p && (typeof p.p === "number" ? p.p + "em" : p.p[1] && p.p[1] + "em")};
    padding-top: ${p =>
            p.py
                ? typeof p.py === "number"
                    ? p.py + "em"
                    : p.py[1] && p.py[1] + "em"
                : p.pt &&
                (typeof p.pt === "number" ? p.pt + "em" : p.pt[1] && p.pt[1] + "em")};
    padding-right: ${p =>
            p.px
                ? typeof p.px === "number"
                    ? p.px + "em"
                    : p.px[1] && p.px[1] + "em"
                : p.pr &&
                (typeof p.pr === "number" ? p.pr + "em" : p.pr[1] && p.pr[1] + "em")};
    padding-bottom: ${p =>
            p.py
                ? typeof p.py === "number"
                    ? p.py + "em"
                    : p.py[1] && p.py[1] + "em"
                : p.pb &&
                (typeof p.pb === "number" ? p.pb + "em" : p.pb[1] && p.pb[1] + "em")};
    padding-left: ${p =>
            p.px
                ? typeof p.px === "number"
                    ? p.px + "em"
                    : p.px[1] && p.px[1] + "em"
                : p.pl &&
                (typeof p.pl === "number" ? p.pl + "em" : p.pl[1] && p.pl[1] + "em")};
  `}
  ${tablet`
    width: ${p =>
            p.w && (typeof p.w === "number" ? p.w + "em" : p.w[2] && p.w[2] + "em")};
    max-width:${p =>
            p.maxWidth && (typeof p.maxWidth === "number" ? p.maxWidth + "em" : p.maxWidth[2] && p.maxWidth[2] + "em")};
    max-height:${p =>
            p.maxHeight && (typeof p.maxHeight === "number" ? p.maxHeight + "em" : p.maxHeight[2] && p.maxHeight[2] + "em")};
    height:${p =>
            p.h && (typeof p.h === "number" ? p.h + "em" : p.h[2] && p.h[2] + "em")};
    margin: ${p =>
            p.m && (typeof p.m === "number" ? p.m + "em" : p.m[2] && p.m[2] + "em")};
    margin-top: ${p =>
            p.my
                ? typeof p.my === "number"
                    ? p.my + "em"
                    : p.my[2] && p.my[2] + "em"
                : p.mt &&
                (typeof p.mt === "number" ? p.mt + "em" : p.mt[2] && p.mt[2] + "em")};
    margin-right: ${p =>
            p.mx
                ? typeof p.mx === "number"
                    ? p.mx + "em"
                    : p.mx[2] && p.mx[2] + "em"
                : p.mr &&
                (typeof p.mr === "number" ? p.mr + "em" : p.mr[2] && p.mr[2] + "em")};
    margin-bottom: ${p =>
            p.my
                ? typeof p.my === "number"
                    ? p.my + "em"
                    : p.my[2] && p.my[2] + "em"
                : p.mb &&
                (typeof p.mb === "number" ? p.mb + "em" : p.mb[2] && p.mb[2] + "em")};
    margin-left: ${p =>
            p.mx
                ? typeof p.mx === "number"
                    ? p.mx + "em"
                    : p.mx[2] && p.mx[2] + "em"
                : p.ml &&
                (typeof p.ml === "number" ? p.ml + "em" : p.ml[2] && p.ml[2] + "em")};

    padding: ${p =>
            p.p && (typeof p.p === "number" ? p.p + "em" : p.p[2] && p.p[2] + "em")};
    padding-top: ${p =>
            p.py
                ? typeof p.py === "number"
                    ? p.py + "em"
                    : p.py[2] && p.py[2] + "em"
                : p.pt &&
                (typeof p.pt === "number" ? p.pt + "em" : p.pt[2] && p.pt[2] + "em")};
    padding-right: ${p =>
            p.px
                ? typeof p.px === "number"
                    ? p.px + "em"
                    : p.px[2] && p.px[2] + "em"
                : p.pr &&
                (typeof p.pr === "number" ? p.pr + "em" : p.pr[2] && p.pr[2] + "em")};
    padding-bottom: ${p =>
            p.py
                ? typeof p.py === "number"
                    ? p.py + "em"
                    : p.py[2] && p.py[2] + "em"
                : p.pb &&
                (typeof p.pb === "number" ? p.pb + "em" : p.pb[2] && p.pb[2] + "em")};
    padding-left: ${p =>
            p.px
                ? typeof p.px === "number"
                    ? p.px + "em"
                    : p.px[2] && p.px[2] + "em"
                : p.pl &&
                (typeof p.pl === "number" ? p.pl + "em" : p.pl[2] && p.pl[2] + "em")};
  `}
`;
export const SVG = props => (
    <StyledSVG {...props}>
        <props.svg />
    </StyledSVG>
);
const StyledSVG = styled(View).attrs({
    inline: true
})`
    margin-right: ${p => p.withText && "0.35em"};
    svg {
      display: block;
      fill: ${p => p.fill};
      height: ${p => (p.height ? p.height : 1) + "em"};
      width: auto;
      transform: ${p => (p.flipX ? "scaleX(-1)" : p.flipY && "scaleY(-1)")};
    }
  `;
export const CoinIcon = props => (
    <Flex w={props.w1} h={props.h1} aic jcc>
        <Flex w={props.w2} h={props.h2} aic jcc r={radius.rounded} bg={props.bg} >
            <SVG height={props.h}
                svg={
                    props.abbr === "EOS"
                        ? IconEos
                        : props.abbr === "DOT"
                            ? IconDot
                            : IconKsm

                } />
        </Flex>
    </Flex>
);
export const Text = styled(View)`
  ${mobile`
    font-size: ${p =>
            (p.scale || p.scale === 0) &&
            (typeof p.scale === "number"
                ? Math.pow(1.1, p.scale) + "rem"
                : (p.scale[0] || p.scale[0] === 0) &&
                Math.pow(1.1, p.scale[0]) + "rem")};
  `}

  ${desktop`
    font-size: ${p =>
            (p.scale || p.scale === 0) &&
            (typeof p.scale === "number"
                ? Math.pow(1.15, p.scale) + "rem"
                : (p.scale[1] || p.scale[1] === 0) &&
                Math.pow(1.15, p.scale[1]) + "rem")};
  `}
  ${tablet`
    font-size: ${p =>
            (p.scale || p.scale === 0) &&
            (typeof p.scale === "number"
                ? Math.pow(1.15, p.scale) + "rem"
                : (p.scale[2] || p.scale[2] === 0) &&
                Math.pow(1.15, p.scale[2]) + "rem")};
  `}
  font-weight: ${p =>
        p.fw ? p.fw : p.bold ? "bold" : p.lighter ? "lighter" : p.normal && "normal"};
  font-style:${p => p.fs ? p.fs : 'normal'} ;
  line-height: ${p => p.paragraph ? p.paragraph + "em" : "1.35em"};
  color: ${p => p.color};
  text-transform: ${p =>
        p.uppercase ? "uppercase" : p.lowercase && "uppercase"};;
  word-break: ${p => p.break && " break-all"};
  font-family:${p => p.ff ? p.ff : 'SF Pro Display'};
  letter-spacing:${p => p.ls ? p.ls + "em" : "0em"}
`;

export const Flex = styled(View)`
    display: ${p => (p.inline ? "inline-box" : "box")};/* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
    display: ${p => (p.inline ? "-webkit-inline-box" : "-webkit-box")};/* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
    display: ${p => (p.inline ? "-moz-inline-box" : " -moz-box")};/* Firefox 17- */
    display: ${p => (p.inline ? "-moz-inline-flex" : "-moz-flex")};/* Firefox 18+ */
    display: ${p => (p.inline ? "-ms-inline-flexbox" : "-ms-flexbox")};/* IE 10 */
    display: ${p => (p.inline ? "-webkit-inline-flex" : "-webkit-flex")};/* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
    display: ${p => (p.inline ? "inline-flex" : "flex")};/* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
    -webkit-flex-direction:${p =>
        p.column
            ? p.reverse
                ? "column-reverse"
                : "column"
            : p.reverse
                ? "row-reverse"
                : "row"};
    -moz-flex-direction: ${p =>
        p.column
            ? p.reverse
                ? "column-reverse"
                : "column"
            : p.reverse
                ? "row-reverse"
                : "row"};
    -ms-flex-direction: ${p =>
        p.column
            ? p.reverse
                ? "column-reverse"
                : "column"
            : p.reverse
                ? "row-reverse"
                : "row"};
    -o-flex-direction: ${p =>
        p.column
            ? p.reverse
                ? "column-reverse"
                : "column"
            : p.reverse
                ? "row-reverse"
                : "row"};
    flex-direction: ${p =>
        p.column
            ? p.reverse
                ? "column-reverse"
                : "column"
            : p.reverse
                ? "row-reverse"
                : "row"};
    -webkit-align-items: ${p =>
        p.center || p.aic ? "center" : p.aifs ? "flex-start" : p.aife ? "flex-end" : "stretch"};
    -moz-align-items: ${p =>
        p.center || p.aic ? "center" : p.aifs ? "flex-start" : p.aife ? "flex-end" : "stretch"};
    -ms-align-items: ${p =>
        p.center || p.aic ? "center" : p.aifs ? "flex-start" : p.aife ? "flex-end" : "stretch"};
    -o-align-items: ${p =>
        p.center || p.aic ? "center" : p.aifs ? "flex-start" : p.aife ? "flex-end" : "stretch"};
    align-items: ${p =>
        p.center || p.aic ? "center" : p.aifs ? "flex-start" : p.aife ? "flex-end" : "stretch"};
    -webkit-justify-content: ${p =>
        p.center || p.jcc ? "center" : p.jcsb ? "space-between" : p.jcfe ? 'flex-end' : p.jcsa ? 'space-around' : 'flex-start'};
    -moz-justify-content: ${p =>
        p.center || p.jcc ? "center" : p.jcsb ? "space-between" : p.jcfe ? 'flex-end' : p.jcsa ? 'space-around' : 'flex-start'};
    -ms-justify-content: ${p =>
        p.center || p.jcc ? "center" : p.jcsb ? "space-between" : p.jcfe ? 'flex-end' : p.jcsa ? 'space-around' : 'flex-start'};
    -o-justify-content: ${p =>
        p.center || p.jcc ? "center" : p.jcsb ? "space-between" : p.jcfe ? 'flex-end' : p.jcsa ? 'space-around' : 'flex-start'};
    justify-content: ${p =>
        p.center || p.jcc ? "center" : p.jcsb ? "space-between" : p.jcfe ? 'flex-end' : p.jcsa ? 'space-around' : 'flex-start'};
    -webkit-flex-wrap: ${p => p.wrap && " wrap"};
    -moz-flex-wrap:  ${p => p.wrap && " wrap"};
    -ms-flex-wrap: ${p => p.wrap && " wrap"};
    -o-flex-wrap:  ${p => p.wrap && " wrap"};
    flex-wrap: ${p => p.wrap && " wrap"};
  > * {
    flex: ${p => p.child};
  }
  > *:not(:last-child) {
    ${mobile`
      margin-bottom:${p =>
            p.gap &&
            (p.column || p.responsive) &&
            (typeof p.gap === "number"
                ? p.gap + "em"
                : p.gap[0] && p.gap[0] + "em")};
      margin-right:${p =>
            p.gap &&
            (!(p.column || p.responsive) &&
                (typeof p.gap === "number"
                    ? p.gap + "em"
                    : p.gap[0] && p.gap[0] + "em"))};
    `}

    ${desktop`
      margin-bottom:${p =>
            p.gap &&
            p.column &&
            (typeof p.gap === "number"
                ? p.gap + "em"
                : p.gap[1] && p.gap[1] + "em")};
      margin-right:${p =>
            p.gap &&
            (!p.column &&
                (typeof p.gap === "number"
                    ? p.gap + "em"
                    : p.gap[1] && p.gap[1] + "em"))};
    `}
    ${tablet`
      margin-bottom:${p =>
            p.gap &&
            p.column &&
            (typeof p.gap === "number"
                ? p.gap + "em"
                : p.gap[2] && p.gap[2] + "em")};
      margin-right:${p =>
            p.gap &&
            (!p.column &&
                (typeof p.gap === "number"
                    ? p.gap + "em"
                    : p.gap[2] && p.gap[2] + "em"))};
    `}
  }
  ${p =>
        p.responsive &&
        mobile`
      flex-direction: column
  `};
`;

export const Hidden = styled(View)`
  ${mobile`
    display: ${p => p.mobile && "none"};
  `}

  ${desktop`
    display: ${p => p.desktop && "none"};
  `}
  ${tablet`
    display: ${p => p.tablet && "none"};
  `}
`;
// 以下是本项目
export const ContentPage = styled.div`

${mobile`
    width:${p =>
            p.w && (typeof p.w === "number" ? p.w + "em" : p.w[0] && p.w[0] + "em")};
    height:${p =>
            p.h && (typeof p.h === "number" ? p.h + "em" : p.h[0] && p.h[0] + "em")};
    margin-top:${p =>
            p.mt && (typeof p.mt === "number" ? p.mt + "em" : p.mt[0] && p.mt[0] + "em")};
    padding-top:${p =>
            p.pt && (typeof p.pt === "number" ? p.pt + "em" : p.pt[0] && p.pt[0] + "em")};
    padding-bottom:${p =>
            p.pb && (typeof p.pb === "number" ? p.pb + "em" : p.pb[0] && p.pb[0] + "em")};
    margin-bottom:${p =>
            p.mb && (typeof p.mb === "number" ? p.mb + "em" : p.mb[0] && p.mb[0] + "em")};
  `}

  ${desktop`
    width: ${p =>
            p.w && (typeof p.w === "number" ? p.w + "em" : p.w[1] && p.w[1] + "em")};
    height:${p =>
            p.h && (typeof p.h === "number" ? p.h + "em" : p.h[1] && p.h[1] + "em")};        
    margin-top:${p =>
            p.mt && (typeof p.mt === "number" ? p.mt + "em" : p.mt[1] && p.mt[1] + "em")};
    padding-top:${p =>
            p.pt && (typeof p.pt === "number" ? p.pt + "em" : p.pt[1] && p.pt[1] + "em")};
    padding-bottom:${p =>
            p.pb && (typeof p.pb === "number" ? p.pb + "em" : p.pb[1] && p.pb[1] + "em")};
    margin-bottom:${p =>
            p.mb && (typeof p.mb === "number" ? p.mb + "em" : p.mb[1] && p.mb[1] + "em")};
  `}
  ${tablet`
    width: ${p =>
            p.w && (typeof p.w === "number" ? p.w + "em" : p.w[2] && p.w[2] + "em")};
    height:${p =>
            p.h && (typeof p.h === "number" ? p.h + "em" : p.h[2] && p.h[2] + "em")};        
    margin-top:${p =>
            p.mt && (typeof p.mt === "number" ? p.mt + "em" : p.mt[2] && p.mt[2] + "em")};
    padding-top:${p =>
            p.pt && (typeof p.pt === "number" ? p.pt + "em" : p.pt[2] && p.pt[2] + "em")};
    padding-bottom:${p =>
            p.pb && (typeof p.pt === "number" ? p.pb + "em" : p.pb[2] && p.pb[2] + "em")};
    margin-bottom:${p =>
            p.mb && (typeof p.mb === "number" ? p.mb + "em" : p.mb[2] && p.mb[2] + "em")};
  `}
margin:0 auto;
background-color:#000;
color:#fff;
`;
export const OfficialWebsiteText = styled(Text)`
font-style: normal;
font-weight: bold;
`;
export const CardFlex = styled(Flex)`
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow:  0px 4.34765px 3.62304px rgba(109, 128, 166, 0.0139364), 0px 12.0207px 10.0172px rgba(109, 128, 166, 0.02), 0px 28.9412px 24.1177px rgba(109, 128, 166, 0.0260636), 0px 96px 80px rgba(109, 128, 166, 0.04);
    background-color:#ffffff;
    `;
export const ScrollPage = styled(Flex)`
box-sizing: border-box;
-ms-overflow-y:auto
overflow-y:auto;
`;
export const TextTypesetting = styled(Text)`
width:${p => p.mw + "em"};
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const Arrow = styled.div`
width: 0.375em;
height: 0.375em;
border-top: ${p => p.bt ? '0.125em solid #8E8E95' : 0};
border-right: ${p => p.br ? '0.125em solid #8E8E95' : 0};
border-bottom: ${p => p.bb ? '0.125em solid #8E8E95' : 0};
border-left: ${p => p.bl ? '0.125em solid #8E8E95' : 0};
transform: rotate(-45deg);

`;
export const Input = styled.input`
${mobile`
    width:${p =>
            p.w && (typeof p.w === "number" ? p.w / 1.25 + "em" : p.w[0] && p.w[0] / 1.25 + "em")};
    height:${p =>
            p.h && (typeof p.h === "number" ? p.h / 1.25 + "em" : p.h[0] && p.h[0] / 1.25 + "em")};
  `}

  ${desktop`
    width: ${p =>
            p.w && (typeof p.w === "number" ? p.w / 1.25 + "em" : p.w[1] && p.w[1] / 1.25 + "em")};
            height:${p =>
            p.h && (typeof p.h === "number" ? p.h / 1.25 + "em" : p.h[1] && p.h[1] / 1.25 + "em")};
  `}
  ${tablet`
    width: ${p =>
            p.w && (typeof p.w === "number" ? p.w / 1.25 + "em" : p.w[2] && p.w[2] / 1.25 + "em")};
            height:${p =>
            p.h && (typeof p.h === "number" ? p.h / 1.25 + "em" : p.h[2] && p.h[2] / 1.25 + "em")};
  `}
border: 0;
outline: none; 
background-color:#F4F4F4;
font-family: SF Pro Text;
padding:0px;
font-weight: bold;
color:#BDBDBD;
font-size:1.25em;
border-radius:8px;
::-webkit-input-placeholder {
    color:#BDBDBD; /*WebKit browsers*/
    };
::-moz-placeholder {
        color:#BDBDBD; /*Mozilla Firefox 4 to 18 */
        };
::-moz-placeholder {
            color:#BDBDBD; /*Mozilla Firefox 19+ */
            };    
::-ms-input-placeholder {
        color: :#BDBDBD;/*Internet Explorer 10+*/
        }
`;
export const ScrollView = styled(View)`
overflow-y: auto;
scrollbar-width: none
`;
export const DetailText = styled(Text)`
font-weight:500;
font-family:Noto Sans SC;
`;
export const Button = props => (
    <Flex
        w={props.w} h={props.h} mx={props.mx} ml={props.ml} aic jcc r={props.radius} bg={props.bg}
        onClick={props.Event}
        style={{ cursor: 'pointer' }}>
        <Text ff="SF Pro Display" scale={props.scale} color={props.color} bold >
            {props.text}</Text>
    </Flex>

)

