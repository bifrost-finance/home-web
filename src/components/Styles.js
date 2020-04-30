import React from "react";
import { useTranslation } from "react-i18next";
import styled, { css, createGlobalStyle } from "styled-components";
// import Formatter from "../utils/Formatter";
import { lighten, darken, rgba } from "polished";
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
export const light = (...args) => css` 
@media (prefers-color-scheme: light) {
    ${css(...args)}
};
`;
export const color = {
    transparent: "transparent",
    black: "#000000",
    white: "white",
    darkGray: "#2C2C2C",
    gray: "#F0F0F0",
    lightGray: "rgba(255, 255, 255, 0.63)",
    borderGray: "rgba(255, 255, 255, 0.34)",
    fontGray: '#DBDBE8',
    fontBlack: 'rgba(0, 0, 0, 0.63)',
    borderBlack: 'rgba(0, 0, 0, 0.34)',
    lightColor: '#F4F4F4',
    darkColor: '#2C2C2C',
    // washedGray: "#BDBDBD;",

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
      height: ${p => (p.height ? p.height : 1) + "em"};
      width: auto;
      transform: ${p => (p.flipX ? "scaleX(-1)" : p.flipY && "scaleY(-1)")};
      stroke:white;
      fill:white;
     ${light`
      stroke:black;
      fill:black;
     `}
    }
  `;
export const Text = styled(View)`
  ${mobile`
    font-size: ${p =>
            (p.scale || p.scale === 0) &&
            (typeof p.scale === "number"
                ? 0.8 * (p.scale) + "rem"
                : (p.scale[0] || p.scale[0] === 0) &&
                (p.scale[0]) + "rem")};
    line-height:${p => p.paragraph && (typeof p.paragraph === "number" ? p.paragraph + "em" : p.paragraph[0] && p.paragraph[0] + "em")};
  `}

  ${desktop`
    font-size: ${p =>
            (p.scale || p.scale === 0) &&
            (typeof p.scale === "number"
                ? (p.scale) + "rem"
                : (p.scale[1] || p.scale[1] === 0) &&
                (p.scale[1]) + "rem")};
    line-height: ${p => p.paragraph && (typeof p.paragraph === "number" ? p.paragraph + "em" : p.paragraph[1] && p.paragraph[1] + "em")};
  `}
  ${tablet`
    font-size: ${p =>
            (p.scale || p.scale === 0) &&
            (typeof p.scale === "number"
                ? 0.9 * (p.scale) + "rem"
                : (p.scale[2] || p.scale[0] === 0) &&
                (p.scale[2]) + "rem")};
    line-height: ${p => p.paragraph && (typeof p.paragraph === "number" ? p.paragraph + "em" : p.paragraph[2] && p.paragraph[2] + "em")};
  `}
  font-weight: ${p =>
        p.fw ? p.fw : p.bold ? "bold" : p.lighter ? "lighter" : p.normal && "normal"};
  font-style:${p => p.fs ? p.fs : 'normal'} ;
  color: ${p => p.color};
  text-transform: ${p =>
        p.uppercase ? "uppercase" : p.lowercase && "uppercase"};;
  word-break: ${p => p.break && " break-all"};
  font-family:${p => p.ff ? p.ff : 'SF Pro Display'};
  letter-spacing:${p => p.ls ? p.ls + "em" : "0em"}
`;

export const Flex = styled(View)`
    display: ${p => (p.inline ? "inline-flex" : "flex")};/* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
    flex-direction: ${p =>
        p.column
            ? p.reverse
                ? "column-reverse"
                : "column"
            : p.reverse
                ? "row-reverse"
                : "row"};
    align-items: ${p =>
        p.center || p.aic ? "center" : p.aifs ? "flex-start" : p.aife ? "flex-end" : "stretch"};
    justify-content: ${p =>
        p.center || p.jcc ? "center" : p.jcsb ? "space-between" : p.jcfe ? 'flex-end' : p.jcsa ? 'space-around' : 'flex-start'};
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
background-color: black;
color: white;
${light`
background-color:white;
color: black;
 `}

`;
export const SubjectText = styled(Text)`
font-style: normal;
font-weight: ${p => p.bold ? 'bold' : 'normal'};
background-color: black;
color:${p => p.c ? '#ED6661' : 'white'} ;
${light`
background-color:white;
color:${p => p.c ? '#ED6661' : 'black'} ;
 `}
`;
export const MobileSubjectText = styled(Text)`
font-style: normal;
font-weight: ${p => p.bold ? 'bold' : 'normal'};
`;
export const ButtonSubjectText = styled(Text)`
font-style: normal;
font-weight: ${p => p.bold ? 'bold' : 'normal'};
color:${p => p.FontdarkColor};
${light`
color:${p => p.FontlightColor};
 `}
`;
export const ContactSubjectText = styled(Text)`
font-style: normal;
font-weight: ${p => p.bold ? 'bold' : 'normal'};
background-color: black;
color:rgba(255, 255, 255, 0.63) ;
${light`
background-color:white;
    color:rgba(0, 0, 0, 0.63) ;
 `}
`;
export const FooterSubjectText = styled(Text)`
font-family: SF Pro Text;
background-color: black;
color:rgba(255, 255, 255, 0.34)  ;
${light`
background-color:white;
color:rgba(0, 0, 0, 0.34) ;
 `}
`;
export const CircleView = styled(View)`
background-color:${p => p.c ? '#ED6661' : 'white'} ;

${light`
background-color:${p => p.c ? '#ED6661' : 'black'} ;
 `}
`;
export const MobileCircleView = styled(View)`
background-color:${p => p.c ? '#ED6661' : 'white'} ;

${light`
background-color:${p => p.c ? '#ED6661' : 'black'} ;
 `}
 :hover,
 :active,
 :focus{
    background-color: #ED6661;
 }
`;
export const ThemeView = styled(View)`
background-color:black ;
${light`
background-color:white;
 `}

`;
export const HiddenThemeView = styled(ThemeView)`
overflow: hidden;
position: relative;

`;
export const ColumnFlex= styled(Flex)`
${mobile`
flex-direction:column;
 `}
 ${desktop`

`}
${tablet`
flex-direction:column;
`}

`;
export const ThemeFlex = styled(Flex)`
background-color: black;
border-top: ${p => p.bt ? '1px solid rgba(255, 255, 255, 0.34)' : null};
${light`
background-color:white;
border-top: ${p => p.bt ? '1px solid rgba(0, 0, 0, 0.34)' : null};
 `}
`;
export const AdaptiveWidth = styled(ThemeFlex)`
position: relative ;
display: inline-block;
`;
export const MobileThemeMenu = styled(Text)`
font-style: normal;
font-weight: bold;
box-sizing: border-box;
:active{
    background-color:#2C2C2C;
    color: white;
    ${light`
    background-color:#F4F4F4;
    color: black;
 `}
}`;
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
export const AdaptiveFlex = styled(Flex)`
 word-wrap: normal ;
`;
export const DetailText = styled(Text)`
font-weight:500;
font-family:Noto Sans SC;
`;
export const ButtonFlex = styled(Flex)`
background-color:${p => p.darkColor};
${light`
background-color:${p => p.lightColor};
`}
`;
export const Button = props => (
    <ButtonFlex
        w={props.w} h={props.h} mx={props.mx} ml={props.ml} mt={props.mt} aic jcc r={props.radius} lightColor={props.lightColor} darkColor={props.darkColor}
        onClick={props.Event}
        style={{ cursor: 'pointer' }}>
        <ButtonSubjectText scale={props.scale} bold FontlightColor={props.FontlightColor} FontdarkColor={props.FontdarkColor} >
            {props.text}</ButtonSubjectText>
    </ButtonFlex>

)

