import React from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { radius, color, Text, SVG, Flex, View, ScrollView } from "./Styles";

import { ReactComponent as IconClose } from "../images/IconClose.svg";

export default ({ show, close, title, children, em, mw, hem, mem }) => {
  const overlayTransition = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { pointerEvents: "none", opacity: 0 }
  });

  const modalTransition = useTransition(show, null, {
    from: { opacity: 0, transform: "translate3d(0,1rem,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: {
      pointerEvents: "none",
      transform: "translate3d(0,0.618rem,0)",
      opacity: 0
    }
  });

  return (
    <>
      {overlayTransition.map(
        ({ item, key, props }) => item && <Overylay key={key} style={props} />
      )}

      {modalTransition.map(
        ({ item, key, props }) =>
          item && (
            <ModalContainer key={key} style={props}>
              <Modal
                w={36}
                pb={3}
                z={1000}
                column
                r={radius.lg}
                bg={color.white}
              >
                <View p={3} pb={1}>
                  <Text scale={1.5} fw={500} ff='Noto Sans SC'>
                    {title}
                  </Text>
                  <CloseButton as="span" p={0.5} jcc aic onClick={close}>
                    <SVG svg={IconClose} height={1.5} fill={color.lightGray} />
                  </CloseButton>
                </View>

                <ScrollView>
                  <View px={3}>{children}</View>
                </ScrollView>
              </Modal>
              <ModalContainer onClick={close} />
            </ModalContainer>
          )
      )}
    </>
  );
};

const Overylay = styled(animated.section)`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const ModalContainer = styled(animated.section)`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled(Flex)`
  position: relative;
`;

const CloseButton = styled(Flex)`
  cursor: pointer;
  position: absolute;
  top: 1em;
  right: 1em;
  @media (hover: hover) {
    :hover {
      svg {
        fill: ${color.gray};
      }
    }
  }
`;
