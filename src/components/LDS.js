/* Linci Design System (beta) v2.3.2 update: 1-08-2019 */

import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { lighten, darken, rgba } from "polished"

export const color = {
  black: "black",
  gray: "hsl(242, 3%, 57%)",
  gray2: "hsl(242, 3%, 69%)",
  gray3: "hsl(242, 5%, 79%)",
  gray4: "hsl(242, 6%, 83%)",
  gray5: "hsl(242, 12%, 91%)",
  gray6: "hsl(242, 27%, 96%)",
  gray2dark: "hsl(242, 2%, 39%)",
  gray3dark: "hsl(242, 2%, 29%)",
  gray4dark: "hsl(242, 2%, 23%)",
  gray5dark: "hsl(242, 2%, 18%)",
  gray6dark: "hsl(242, 4%, 11%)",
  white: "white",
  transparent: "transparent",

  bifrost: "hsl(226, 100%, 38%)",
  bifrostRed: "hsl(2, 80%, 65%)",
  navy: "hsl(217, 97%, 13%)",
  blue: "hsl(211, 100%, 50%)",
  green: "hsl(135, 58%, 49%)",
  indigo: "hsl(241, 61%, 59%)",
  orange: "hsl(35, 100%, 50%)",
  pink: "hsl(349, 100%, 59%)",
  purple: "hsl(280, 68%, 60%)",
  red: "hsl(3, 100%, 59%)",
  teal: "hsl(199, 94%, 67%)",
  gold: "hsl(43, 100%, 50%)",
  yellow: "hsl(48, 100%, 50%)",

  washedBlue: "hsl(173, 100%, 98%)",
  washedGreen: "hsl(156, 82%, 95%)",
  washedRed: "hsl(359, 100%, 94%)",
  washedYellow: "hsl(51, 100%, 96%)",
}

export const shadow = {
  sm: "0 0.0625rem 0.25rem 0  rgba(0, 0, 0, 0.1)",
  md: "0 0.125rem 0.5rem 0  rgba(0, 0, 0, 0.1)",
  lg: "0 0.25rem 1rem 0  rgba(0, 0, 0, 0.1)",
  xl: "0 0.5rem 2rem 0  rgba(0, 0, 0, 0.1)",
  border: "0 0 0 0.25rem rgba(0, 0, 0, 0.025)",
}

export const radius = {
  sm: "0.25em",
  md: "0.5em",
  lg: "1em",
  xl: "2em",
  pill: "999px",
}

const config = {
  breakpoint: 800,
  controllerColorPrimary: color.blue,
  controllerColorSecondary: color.black,
  controllerColorDisabled: color.gray4,
  defaultMotionDuration: "150ms",
  typeScaleDesktop: 1.5,
  typeScaleMobile: 1.25,
}

export const mobile = (...args) => css`
  @media (max-width: ${config.breakpoint}px) {
    ${css(...args)}
  }
`

export const desktop = (...args) => css`
  @media (min-width: ${config.breakpoint + 1}px) {
    ${css(...args)}
  }
`

export const Button = styled.button`
  cursor: ${p => (p.disabled ? "not-allowed" : "pointer")};
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.fullWidth && "100%"};
  font-weight: bold;

  transition: box-shadow ${config.defaultMotionDuration},
    background-color ${config.defaultMotionDuration};

  color: ${p =>
    p.ghost
      ? p.disabled
        ? config.controllerColorDisabled
        : p.primary
        ? config.controllerColorPrimary
        : lighten(0.15, config.controllerColorSecondary)
      : "white"};

  background: ${p =>
    p.ghost
      ? "transparent"
      : p.disabled
      ? config.controllerColorDisabled
      : p.primary
      ? config.controllerColorPrimary
      : config.controllerColorSecondary};

  border-radius: ${p => (p.pill ? radius.pill : radius.md)};

  border: 1px solid
    ${p =>
      p.ghost
        ? p.disabled
          ? config.controllerColorDisabled
          : p.primary
          ? config.controllerColorPrimary
          : rgba(config.controllerColorSecondary, 0.15)
        : "transparent"};

  svg {
    display: block;
    height: 1em;
    width: auto;
    fill: ${p =>
      p.ghost
        ? p.disabled
          ? config.controllerColorDisabled
          : p.primary
          ? config.controllerColorPrimary
          : color.black
        : "white"};
  }

  ${mobile`
    padding: 0.75em 1.125em;
    padding-left: ${p => p.withIcon && "0.9375em"};
  `};

  ${desktop`
    padding: 0.5em 0.75em;
    padding-left: ${p => p.withIcon && "0.625em"};
  `};

  @media (hover: hover) {
    :hover {
      background: ${p =>
        p.ghost
          ? p.disabled
            ? "tranparent"
            : p.primary
            ? rgba(config.controllerColorPrimary, 0.05)
            : rgba(config.controllerColorSecondary, 0.025)
          : p.disabled
          ? null
          : p.primary
          ? lighten(0.05, config.controllerColorPrimary)
          : lighten(0.2, config.controllerColorSecondary)};
    }
  }

  :focus {
    box-shadow: ${p =>
      p.ghost
        ? "0 0 0 0.15em " +
          (p.primary
            ? rgba(config.controllerColorPrimary, 0.3)
            : rgba(config.controllerColorSecondary, 0.1))
        : "0 0 0 0.075em white, 0 0 0 0.15em " +
          (p.primary
            ? config.controllerColorPrimary
            : config.controllerColorSecondary)};
  }

  :active {
    background: ${p =>
      p.ghost
        ? p.disabled
          ? "transparent"
          : p.primary
          ? rgba(config.controllerColorPrimary, 0.1)
          : rgba(config.controllerColorSecondary, 0.05)
        : p.disabled
        ? null
        : p.primary
        ? darken(0.05, config.controllerColorPrimary)
        : darken(0.2, config.controllerColorSecondary)};
  }
`

export const Input = styled.input`
  color: ${p => (p.error ? color.red : color.black)};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.5em;
  background: ${p => (p.bg ? p.bg : "rgba(255,255,255,0.1)")};
  border: ${p =>
    p.error
      ? "1px solid " + color.red
      : "1px solid " + rgba(config.controllerColorSecondary, 0.1)};
  border-radius: ${p => (p.pill ? radius.pill : radius.md)};

  width: ${p => (p.w ? (p.w < 1 ? p.w * 100 + "%" : p.w + "em") : "100%")};
  max-width: ${p =>
    p.maxWidth
      ? p.maxWidth < 1
        ? p.maxWidth * 100 + "%"
        : p.maxWidth + "em"
      : "auto"};

  transition: box-shadow ${config.defaultMotionDuration},
    border-color ${config.defaultMotionDuration},
    background-color ${config.defaultMotionDuration};

  ::placeholder {
    color: ${color.gray4};
  }

  ${p =>
    !p.error &&
    css`
      @media (hover: hover) {
        :hover {
          border: 1px solid ${rgba(config.controllerColorSecondary, 0.5)};
        }
      }
    `};

  :focus {
    border: 1px solid
      ${p => (p.error ? color.red : rgba(config.controllerColorSecondary, 0.5))};
    box-shadow: 0 0 0 0.15em
      ${p =>
        p.error
          ? rgba(color.red, 0.2)
          : rgba(config.controllerColorSecondary, 0.1)};
  }
`

export const View = styled.div`
  cursor: ${p => p.pointer && "pointer"};
  user-select: ${p => p.selectNone && "none"};

  line-height: ${p => p.paragraph && "1.35"};
  word-break: ${p => p.break && " break-all"};
  font-weight: ${p => p.weight};
  text-transform: ${p => p.textTransform};

  overflow: ${p => p.overflow};
  position: ${p => p.position};

  background-image: ${p => p.bgi && "url(" + p.bgi + ")"};
  background-size: ${p => p.bgs};
  background-position: ${p => p.bgp};
  border-radius: ${p => p.r && (typeof p.r !== "object" && p.r)};
  border-top-left-radius: ${p =>
    p.r &&
    (typeof p.r === "object" &&
      (typeof p.r[0] === "number" ? p.r[0] + "em" : p.r[0]))};
  border-top-right-radius: ${p =>
    p.r &&
    (typeof p.r === "object" &&
      (typeof p.r[1] === "number" ? p.r[1] + "em" : p.r[1]))};
  border-bottom-right-radius: ${p =>
    p.r &&
    (typeof p.r === "object" &&
      (typeof p.r[2] === "number" ? p.r[2] + "em" : p.r[2]))};
  border-bottom-left-radius: ${p =>
    p.r &&
    (typeof p.r === "object" &&
      (typeof p.r[3] === "number" ? p.r[3] + "em" : p.r[3]))};

  z-index: ${p => p.z};
  opacity: ${p => p.o};

  /* 有 hover 和 active 效果 */
  color: ${p =>
    p.color &&
    (p.color.normal ? p.color.normal : typeof p.color !== "object" && p.color)};
  background: ${p =>
    p.bg && (p.bg.normal ? p.bg.normal : typeof p.bg !== "object" && p.bg)};
  box-shadow: ${p =>
    p.s && (p.s.normal ? p.s.normal : typeof p.s !== "object" && p.s)};

  border: ${p =>
    p.b &&
    (p.b.normal
      ? "1px solid " + p.b.normal
      : typeof p.b !== "object" && "1px solid " + p.b)};
  border-top: ${p => calcBorderOneSideNormal(p.bt, p.by)};
  border-right: ${p => calcBorderOneSideNormal(p.br, p.bx)};
  border-bottom: ${p => calcBorderOneSideNormal(p.bb, p.by)};
  border-left: ${p => calcBorderOneSideNormal(p.bl, p.bx)};
  border-width: ${p => p.bw && p.bw + "px"};

  transform: ${p =>
    p.transform &&
    (p.transform.x
      ? typeof p.transform.x === "object"
        ? p.transform.x.normal
          ? " translateX(" + p.transform.x.normal + "em) "
          : ""
        : typeof p.transform.x === "number"
        ? " translateX(" + p.transform.x + "em) "
        : " translateX(" + p.transform.x + ") "
      : "") +
      (p.transform.y
        ? typeof p.transform.y === "object"
          ? p.transform.y.normal
            ? " translateY(" + p.transform.y.normal + "em) "
            : ""
          : typeof p.transform.y === "number"
          ? " translateY(" + p.transform.y + "em) "
          : " translateY(" + p.transform.y + ") "
        : "")};

  @media (hover: hover) {
    :hover {
      color: ${p => p.color && (p.color.hover && p.color.hover)};
      background: ${p => p.bg && (p.bg.hover && p.bg.hover)};
      box-shadow: ${p => p.s && (p.s.hover && p.s.hover)};
      svg {
        fill: ${p => p.color && (p.color.hover && p.color.hover)};
      }
      border: ${p => p.b && (p.b.hover && "1px solid " + p.b.hover)};
      border-top: ${p => calcBorderOneSideHover(p.bt, p.by)};
      border-right: ${p => calcBorderOneSideHover(p.br, p.bx)};
      border-bottom: ${p => calcBorderOneSideHover(p.bb, p.by)};
      border-left: ${p => calcBorderOneSideHover(p.bl, p.bx)};
      border-width: ${p => p.bw && p.bw + "px"};

      transform: ${p =>
        p.transform &&
        (p.transform.x
          ? typeof p.transform.x === "object"
            ? p.transform.x.hover
              ? " translateX(" + p.transform.x.hover + "em) "
              : ""
            : typeof p.transform.x === "number"
            ? " translateX(" + p.transform.x + "em) "
            : " translateX(" + p.transform.x + ") "
          : "") +
          (p.transform.y
            ? typeof p.transform.y === "object"
              ? p.transform.y.hover
                ? " translateY(" + p.transform.y.hover + "em) "
                : ""
              : typeof p.transform.y === "number"
              ? " translateY(" + p.transform.y + "em) "
              : " translateY(" + p.transform.y + ") "
            : "")};
    }
  }

  :active {
    color: ${p => p.color && (p.color.active && p.color.active)};
    background: ${p => p.bg && (p.bg.active && p.bg.active)};
    box-shadow: ${p => p.s && (p.s.active && p.s.active)};

    border: ${p => p.b && (p.b.active && "1px solid " + p.b.active)};
    border-top: ${p => calcBorderOneSideActive(p.bt, p.by)};
    border-right: ${p => calcBorderOneSideActive(p.br, p.bx)};
    border-bottom: ${p => calcBorderOneSideActive(p.bb, p.by)};
    border-left: ${p => calcBorderOneSideActive(p.bl, p.bx)};
    border-width: ${p => p.bw && p.bw + "px"};

    transform: ${p =>
      p.transform &&
      (p.transform.x
        ? typeof p.transform.x === "object"
          ? p.transform.x.active
            ? " translateX(" + p.transform.x.active + "em) "
            : ""
          : typeof p.transform.x === "number"
          ? " translateX(" + p.transform.x + "em) "
          : " translateX(" + p.transform.x + ") "
        : "") +
        (p.transform.y
          ? typeof p.transform.y === "object"
            ? p.transform.y.active
              ? " translateY(" + p.transform.y.active + "em) "
              : ""
            : typeof p.transform.y === "number"
            ? " translateY(" + p.transform.y + "em) "
            : " translateY(" + p.transform.y + ") "
          : "")};
  }

  ${mobile`
    display: ${p => calcDirectionInput(p.display, 0)};
    flex: ${p => calcDirectionInput(p.flex, 0)};

    font-size: ${p => calcTypeScale(p.scale, config.typeScaleMobile, 0)};
    text-align: ${p => calcDirectionInput(p.align, 0)};

    top: ${p => calcNumberOrCustom(p.top, 0)};
    right: ${p => calcNumberOrCustom(p.right, 0)};
    bottom: ${p => calcNumberOrCustom(p.bottom, 0)};
    left: ${p => calcNumberOrCustom(p.left, 0)};

    width: ${p => calcNumberOrCustom(p.w, 0)};
    height:${p => calcNumberOrCustom(p.h, 0)};
    max-width: ${p => calcNumberOrCustom(p.maxWidth, 0)};
    max-height: ${p => calcNumberOrCustom(p.maxHeight, 0)};
    min-width: ${p => calcNumberOrCustom(p.minWidth, 0)};
    min-height: ${p => calcNumberOrCustom(p.minWidth, 0)};

    margin: ${p => calcNumberOrCustom(p.m, 0)};
    margin-top: ${p => calc1or2Side(p.mt, p.my, 0)};
    margin-right: ${p => calc1or2Side(p.mr, p.mx, 0)};
    margin-bottom: ${p => calc1or2Side(p.mb, p.my, 0)};
    margin-left: ${p => calc1or2Side(p.ml, p.mx, 0)};

    padding: ${p => calcNumberOrCustom(p.p, 0)};
    padding-top: ${p => calc1or2Side(p.pt, p.py, 0)};
    padding-right: ${p => calc1or2Side(p.pr, p.px, 0)};
    padding-bottom: ${p => calc1or2Side(p.pb, p.py, 0)};
    padding-left: ${p => calc1or2Side(p.pl, p.px, 0)};
  `}

  ${desktop`
    display: ${p => calcDirectionInput(p.display, 1)};
    flex: ${p => calcDirectionInput(p.flex, 1)};

    font-size: ${p => calcTypeScale(p.scale, config.typeScaleDesktop, 1)};
    text-align: ${p => calcDirectionInput(p.align, 1)};

    top: ${p => calcNumberOrCustom(p.top, 1)};
    right: ${p => calcNumberOrCustom(p.right, 1)};
    bottom: ${p => calcNumberOrCustom(p.bottom, 1)};
    left: ${p => calcNumberOrCustom(p.left, 1)};

    width: ${p => calcNumberOrCustom(p.w, 1)};
    height:${p => calcNumberOrCustom(p.h, 1)};
    max-width: ${p => calcNumberOrCustom(p.maxWidth, 1)};
    max-height: ${p => calcNumberOrCustom(p.maxHeight, 1)};
    min-width: ${p => calcNumberOrCustom(p.minWidth, 1)};
    min-height: ${p => calcNumberOrCustom(p.minWidth, 1)};

    margin: ${p => calcNumberOrCustom(p.m, 1)};
    margin-top: ${p => calc1or2Side(p.mt, p.my, 1)};
    margin-right: ${p => calc1or2Side(p.mr, p.mx, 1)};
    margin-bottom: ${p => calc1or2Side(p.mb, p.my, 1)};
    margin-left: ${p => calc1or2Side(p.ml, p.mx, 1)};

    padding: ${p => calcNumberOrCustom(p.p, 1)};
    padding-top: ${p => calc1or2Side(p.pt, p.py, 1)};
    padding-right: ${p => calc1or2Side(p.pr, p.px, 1)};
    padding-bottom: ${p => calc1or2Side(p.pb, p.py, 1)};
    padding-left: ${p => calc1or2Side(p.pl, p.px, 1)};
  `}
`

const calcBorderOneSideNormal = (prop, axis) =>
  prop
    ? prop.normal
      ? "1px solid " + prop.normal
      : typeof prop !== "object" && "1px solid " + prop
    : axis &&
      (axis.normal
        ? "1px solid " + axis.normal
        : typeof axis !== "object" && "1px solid " + axis)

const calcBorderOneSideHover = (prop, axis) =>
  prop
    ? prop.hover && "1px solid " + prop.hover
    : axis && (axis.hover && "1px solid " + axis.hover)

const calcBorderOneSideActive = (prop, axis) =>
  prop
    ? prop.active && "1px solid " + prop.active
    : axis && (axis.active && "1px solid " + axis.active)

const calcTypeScale = (prop, ratio, device) =>
  (prop || prop === 0) &&
  (typeof prop === "number"
    ? prop < 0
      ? "0.8em"
      : Math.pow(ratio, prop) + "rem"
    : (prop[device] || prop[device] === 0) &&
      (prop[device] < 0 ? "0.8em" : Math.pow(ratio, prop[device]) + "rem"))

const calcDirectionInput = (prop, device) =>
  prop && (typeof prop === "object" ? prop[device] && prop[device] : prop)

const calcNumberOrCustom = (prop, device) =>
  prop || prop === 0
    ? typeof prop === "object"
      ? prop[device] &&
        (typeof prop[device] === "number" ? prop[device] + "em" : prop[device])
      : typeof prop === "number" || prop === 0
      ? prop + "em"
      : prop
    : null

const calc1or2Side = (prop, axis, device) =>
  prop || prop === 0
    ? typeof prop === "object"
      ? prop[device] &&
        (typeof prop[device] === "number" ? prop[device] + "em" : prop[device])
      : typeof prop === "number"
      ? prop + "em"
      : prop
    : axis
    ? typeof axis === "object"
      ? axis[device] &&
        (typeof axis[device] === "number" ? axis[device] + "em" : axis[device])
      : typeof axis === "number"
      ? axis + "em"
      : axis
    : null

const stringOrArrayString = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.object,
])

const numberOrStringCanBeArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
])

View.propTypes = {
  pointer: PropTypes.bool,
  selectNone: PropTypes.bool,

  paragraph: PropTypes.bool,
  break: PropTypes.bool,
  weight: PropTypes.oneOfType([
    PropTypes.oneOf(["bold", "lighter"]),
    PropTypes.number,
  ]),
  textTransform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize"]),

  overflow: PropTypes.string,
  position: PropTypes.string,

  bgi: PropTypes.string,
  bgs: PropTypes.string,
  bgp: PropTypes.string,
  r: numberOrStringCanBeArray,
  z: PropTypes.number,
  o: PropTypes.number,
  bw: PropTypes.number,

  /* 有 hover 和 active 效果 */
  color: stringOrArrayString,
  bg: stringOrArrayString,
  s: stringOrArrayString,

  b: stringOrArrayString,
  bx: stringOrArrayString,
  by: stringOrArrayString,
  bt: stringOrArrayString,
  br: stringOrArrayString,
  bb: stringOrArrayString,
  bl: stringOrArrayString,

  transform: stringOrArrayString,

  /* 有响应式 */
  display: PropTypes.oneOfType([
    PropTypes.oneOf([
      "block",
      "flex",
      "grid",
      "inline",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "none",
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOf([
        "block",
        "flex",
        "grid",
        "inline",
        "inline-block",
        "inline-flex",
        "inline-grid",
        "none",
      ])
    ),
  ]),
  flex: numberOrStringCanBeArray,

  scale: PropTypes.oneOfType([
    PropTypes.oneOf([-1, 0, 1, 2, 3, 4, 5]),
    PropTypes.arrayOf(PropTypes.oneOf([-1, 0, 1, 2, 3, 4, 5])),
  ]),

  align: PropTypes.oneOfType([
    PropTypes.oneOf(["center", "left", "right"]),
    PropTypes.arrayOf(PropTypes.oneOf(["center", "left", "right"])),
  ]),

  top: numberOrStringCanBeArray,
  right: numberOrStringCanBeArray,
  bottom: numberOrStringCanBeArray,
  left: numberOrStringCanBeArray,

  w: numberOrStringCanBeArray,
  h: numberOrStringCanBeArray,
  maxWidth: numberOrStringCanBeArray,
  maxHeight: numberOrStringCanBeArray,
  minWidth: numberOrStringCanBeArray,
  minHeight: numberOrStringCanBeArray,

  m: numberOrStringCanBeArray,
  mx: numberOrStringCanBeArray,
  my: numberOrStringCanBeArray,
  mt: numberOrStringCanBeArray,
  mr: numberOrStringCanBeArray,
  mb: numberOrStringCanBeArray,
  ml: numberOrStringCanBeArray,

  p: numberOrStringCanBeArray,
  px: numberOrStringCanBeArray,
  py: numberOrStringCanBeArray,
  pt: numberOrStringCanBeArray,
  pr: numberOrStringCanBeArray,
  pb: numberOrStringCanBeArray,
  pl: numberOrStringCanBeArray,
}

export const Grid = styled(View)`
  display: grid;
  grid-template-columns: ${p =>
    p.columnsMinWidth &&
    "repeat(auto-fill, minmax(" + p.columnsMinWidth + "em, 1fr))"};
  align-items: flex-start;

  ${mobile`
    grid-gap: ${p =>
      p.gap &&
      (typeof p.gap === "number" ? p.gap + "em" : p.gap[0] && p.gap[0] + "em")};
  `}

  ${desktop`
    grid-gap: ${p =>
      p.gap &&
      (typeof p.gap === "number" ? p.gap + "em" : p.gap[1] && p.gap[1] + "em")};
  `}
`

Grid.propTypes = {
  gap: numberOrStringCanBeArray,
  columnsMinWidth: PropTypes.number.isRequired,

  // 以下是 View 的部分（为获得智能提示而重复书写）
  pointer: PropTypes.bool,
  selectNone: PropTypes.bool,

  paragraph: PropTypes.bool,
  break: PropTypes.bool,
  weight: PropTypes.oneOfType([
    PropTypes.oneOf(["bold", "lighter"]),
    PropTypes.number,
  ]),
  textTransform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize"]),

  overflow: PropTypes.string,
  position: PropTypes.string,

  bgi: PropTypes.string,
  bgs: PropTypes.string,
  bgp: PropTypes.string,
  r: numberOrStringCanBeArray,
  z: PropTypes.number,
  o: PropTypes.number,
  bw: PropTypes.number,

  /* 有 hover 和 active 效果 */
  color: stringOrArrayString,
  bg: stringOrArrayString,
  s: stringOrArrayString,

  b: stringOrArrayString,
  bx: stringOrArrayString,
  by: stringOrArrayString,
  bt: stringOrArrayString,
  br: stringOrArrayString,
  bb: stringOrArrayString,
  bl: stringOrArrayString,

  transform: stringOrArrayString,

  /* 有响应式 */
  display: PropTypes.oneOfType([
    PropTypes.oneOf([
      "block",
      "flex",
      "grid",
      "inline",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "none",
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOf([
        "block",
        "flex",
        "grid",
        "inline",
        "inline-block",
        "inline-flex",
        "inline-grid",
        "none",
      ])
    ),
  ]),
  flex: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.oneOf(["none"]), PropTypes.number]),
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.oneOf(["none"]), PropTypes.number])
    ),
  ]),

  scale: PropTypes.oneOfType([
    PropTypes.oneOf([-1, 0, 1, 2, 3, 4, 5]),
    PropTypes.arrayOf(PropTypes.oneOf([-1, 0, 1, 2, 3, 4, 5])),
  ]),

  align: PropTypes.oneOfType([
    PropTypes.oneOf(["center", "left", "right"]),
    PropTypes.arrayOf(PropTypes.oneOf(["center", "left", "right"])),
  ]),

  top: numberOrStringCanBeArray,
  right: numberOrStringCanBeArray,
  bottom: numberOrStringCanBeArray,
  left: numberOrStringCanBeArray,

  w: numberOrStringCanBeArray,
  h: numberOrStringCanBeArray,
  maxWidth: numberOrStringCanBeArray,
  maxHeight: numberOrStringCanBeArray,
  minWidth: numberOrStringCanBeArray,
  minHeight: numberOrStringCanBeArray,

  m: numberOrStringCanBeArray,
  mx: numberOrStringCanBeArray,
  my: numberOrStringCanBeArray,
  mt: numberOrStringCanBeArray,
  mr: numberOrStringCanBeArray,
  mb: numberOrStringCanBeArray,
  ml: numberOrStringCanBeArray,

  p: numberOrStringCanBeArray,
  px: numberOrStringCanBeArray,
  py: numberOrStringCanBeArray,
  pt: numberOrStringCanBeArray,
  pr: numberOrStringCanBeArray,
  pb: numberOrStringCanBeArray,
  pl: numberOrStringCanBeArray,
}

export const Flex = styled(View)`
  display: ${p => (p.display ? p.display : "flex")};
  align-items: ${p =>
    p.aic ? "center" : p.aifs ? "flex-start" : p.aife ? "flex-end" : "stretch"};
  justify-content: ${p => (p.jcc ? "center" : p.jcsb && "space-between")};
  flex-direction: ${p =>
    p.column
      ? p.reverse
        ? "column-reverse"
        : "column"
      : p.reverse
      ? "row-reverse"
      : "row"};
  flex-wrap: ${p => p.flexWrap && "wrap"};

  ${mobile`
    flex-direction:${p => p.responsive && "column"};
    
    > * {
      flex: ${p => calcChildFlex(p.childFlex, 0)};
    }
    margin-bottom: ${p =>
      p.gap &&
      (p.flexWrap &&
        (typeof p.gap === "number"
          ? "-" + p.gap + "em"
          : p.gap[0] && "-" + p.gap[0] + "em"))};
  `}
  ${desktop`
    > * {
      flex: ${p => calcChildFlex(p.childFlex, 1)};
    }
    margin-bottom: ${p =>
      p.gap &&
      (p.flexWrap &&
        (typeof p.gap === "number"
          ? "-" + p.gap + "em"
          : p.gap[1] && "-" + p.gap[1] + "em"))};
  `}

  > *:not(:last-child) {
    ${mobile`
      margin-bottom:${p =>
        p.gap &&
        (p.column || p.responsive || p.flexWrap) &&
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
        (p.column || p.flexWrap) &&
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
  }
`

const calcChildFlex = (prop, device) => {
  return (
    prop && (typeof prop === "object" ? prop[device] && prop[device] : prop)
  )
}

Flex.propTypes = {
  aic: PropTypes.bool,
  ais: PropTypes.bool,
  aie: PropTypes.bool,
  aifs: PropTypes.bool,
  aife: PropTypes.bool,
  jcc: PropTypes.bool,
  jcsb: PropTypes.bool,

  column: PropTypes.bool,
  reverse: PropTypes.bool,
  flexWrap: PropTypes.bool,
  responsive: PropTypes.bool,

  gap: numberOrStringCanBeArray,
  childFlex: numberOrStringCanBeArray,

  // 以下是 View 的部分（为获得智能提示而重复书写）
  pointer: PropTypes.bool,
  selectNone: PropTypes.bool,

  paragraph: PropTypes.bool,
  break: PropTypes.bool,
  weight: PropTypes.oneOfType([
    PropTypes.oneOf(["bold", "lighter"]),
    PropTypes.number,
  ]),
  textTransform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize"]),

  overflow: PropTypes.string,
  position: PropTypes.string,

  bgi: PropTypes.string,
  bgs: PropTypes.string,
  bgp: PropTypes.string,
  r: numberOrStringCanBeArray,
  z: PropTypes.number,
  o: PropTypes.number,
  bw: PropTypes.number,

  /* 有 hover 和 active 效果 */
  color: stringOrArrayString,
  bg: stringOrArrayString,
  s: stringOrArrayString,

  b: stringOrArrayString,
  bx: stringOrArrayString,
  by: stringOrArrayString,
  bt: stringOrArrayString,
  br: stringOrArrayString,
  bb: stringOrArrayString,
  bl: stringOrArrayString,

  transform: stringOrArrayString,

  /* 有响应式 */
  display: PropTypes.oneOfType([
    PropTypes.oneOf([
      "block",
      "flex",
      "grid",
      "inline",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "none",
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOf([
        "block",
        "flex",
        "grid",
        "inline",
        "inline-block",
        "inline-flex",
        "inline-grid",
        "none",
      ])
    ),
  ]),
  flex: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.oneOf(["none"]), PropTypes.number]),
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.oneOf(["none"]), PropTypes.number])
    ),
  ]),

  scale: PropTypes.oneOfType([
    PropTypes.oneOf([-1, 0, 1, 2, 3, 4, 5]),
    PropTypes.arrayOf(PropTypes.oneOf([-1, 0, 1, 2, 3, 4, 5])),
  ]),

  align: PropTypes.oneOfType([
    PropTypes.oneOf(["center", "left", "right"]),
    PropTypes.arrayOf(PropTypes.oneOf(["center", "left", "right"])),
  ]),

  top: numberOrStringCanBeArray,
  right: numberOrStringCanBeArray,
  bottom: numberOrStringCanBeArray,
  left: numberOrStringCanBeArray,

  w: numberOrStringCanBeArray,
  h: numberOrStringCanBeArray,
  maxWidth: numberOrStringCanBeArray,
  maxHeight: numberOrStringCanBeArray,
  minWidth: numberOrStringCanBeArray,
  minHeight: numberOrStringCanBeArray,

  m: numberOrStringCanBeArray,
  mx: numberOrStringCanBeArray,
  my: numberOrStringCanBeArray,
  mt: numberOrStringCanBeArray,
  mr: numberOrStringCanBeArray,
  mb: numberOrStringCanBeArray,
  ml: numberOrStringCanBeArray,

  p: numberOrStringCanBeArray,
  px: numberOrStringCanBeArray,
  py: numberOrStringCanBeArray,
  pt: numberOrStringCanBeArray,
  pr: numberOrStringCanBeArray,
  pb: numberOrStringCanBeArray,
  pl: numberOrStringCanBeArray,
}

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`

export const ScrollView = styled(View)`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const IMG = props => (
  <StyledIMG {...props}>
    <img src={props.img} alt={props.alt ? props.alt : ""} />
  </StyledIMG>
)

const StyledIMG = styled(View)`
  display: inline-block;
  margin-right: ${p => p.withText && "0.35em"};
  img {
    display: block;
    fill: ${p => p.fill};
    stroke: ${p => p.stroke};
    height: ${p => (p.height ? p.height : 1) + "em"};
    width: auto;
  }
`

export const SVG = props => (
  <StyledSVG {...props}>
    <props.svg />
  </StyledSVG>
)

const StyledSVG = styled(View)`
  display: inline-block;
  margin-right: ${p => p.withText && "0.35em"};
  svg {
    display: block;
    fill: ${p => p.fill};
    stroke: ${p => p.stroke};
    height: ${p => (p.height ? p.height : 1) + "em"};
    width: auto;
  }
`

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
  
  font-weight: ${p =>
  p.bold ? "bold" : p.lighter ? "lighter" : p.normal && "normal"};
  line-height: ${p => p.paragraph && "1.35"};
  color: ${p => p.color};
  text-transform: ${p =>
  p.uppercase ? "uppercase" : p.lowercase && "uppercase"};;
  word-break: ${p => p.break && " break-all"};
`;

export const ModalView = ({ p, children, close }) => (
  <Flex
    z={100}
    aic
    jcc
    position="fixed"
    top={0}
    right={0}
    bottom={0}
    left={0}
    p={p}
  >
    <View z={1000}>{children}</View>
    <View
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      bg={rgba(color.black, 0.25)}
      onClick={close}
    />
  </Flex>
)

export const ClickView = styled(View)``

const clickableColor = color.black
const clickableColorDark = color.white

export const GlobalStyle = styled.div`
  background: ${p => p.bg};
  color: ${clickableColor};
  a,
  ${ClickView} {
    cursor: pointer;
    text-decoration: none;

    color: ${clickableColor};
    svg {
      fill: ${clickableColor};
    }
    @media (hover: hover) {
      :hover {
        color: ${lighten(0.3, clickableColor)};
        svg {
          fill: ${lighten(0.3, clickableColor)};
        }
      }
    }
    :focus {
      outline: 1px dotted ${color.gray};
    }
  }
`

export const HoverStyle = styled.div`
  color: ${clickableColor};
  a,
  ${ClickView} {
    cursor: pointer;
    text-decoration: none;

    color: ${clickableColor};
    svg {
      fill: ${clickableColor};
    }
    @media (hover: hover) {
      :hover {
        color: ${lighten(0.3, clickableColor)};
        svg {
          fill: ${lighten(0.3, clickableColor)};
        }
      }
    }
    :focus {
      outline: 1px dotted ${color.gray};
    }
  }
`

export const DarkView = styled(View)`
  background: ${p => p.bg};
  color: ${clickableColorDark};
  a,
  ${ClickView} {
    color: ${clickableColorDark};
    svg {
      fill: ${clickableColorDark};
    }
    @media (hover: hover) {
      :hover {
        color: ${darken(0.3, clickableColorDark)};
        svg {
          fill: ${darken(0.3, clickableColorDark)};
        }
      }
    }
    :focus {
      outline: 1px dotted ${color.gray};
    }
  }
  ${Button} {
    background: white;
    color: black;
  }
`
