import React, { useState, useRef } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  View,
  SVG,
  color,
  Flex,
  shadow,
  radius,
  Text,
  HoverStyle,
  ClickView,
  ModalView
} from "../components/LDS"
import { darken, rgba } from "polished"
import ReactGA from "react-ga"
import "../i18n/i18n"
import { useTranslation } from "react-i18next"

import cover from "../images/whitepapercover.png"
import system from "../images/system.png"
import systemCn from "../images/system_cn.png"
import bifrost_wechat from "../images/bifrost_qr_code.png"

ReactGA.initialize("UA-143666394-1")
if (typeof window !== "undefined") {
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export default () => {
  const [partnerTitle, setPartnerTitle] = useState()
  const [partnerExplain, setPartnerExplain] = useState()
  const [systemZoom, setSystemZoom] = useState(false)
  const [isShowQr, setIsShowQr] = useState(false)
  const { t, i18n } = useTranslation()

  const PartnerScrollHeightRef = useRef(null)

  const Partner = ({ title, explain }) => (
    <View>
      <View
        pointer
        scale={1}
        p={1.25}
        pr={1.5}
        onClick={() => {
          if (partnerTitle === title) {
            setPartnerTitle()
            setPartnerExplain()
          } else {
            setPartnerTitle(title)
            setPartnerExplain(explain)
            window.scrollTo(0, PartnerScrollHeightRef.current.offsetTop - 60)
          }
        }}
        r={radius.pill}
        color={{
          normal: partnerTitle === title ? color.white : null,
          hover: color.white,
        }}
        weight={"bold"}
        bg={{
          normal: partnerTitle === title ? color.bifrost : color.gray6,
          hover: color.bifrost,
        }}
      >
        <Flex aic gap={0.75}>
          <SVG
            svg={plus}
            fill={partnerTitle === title ? color.white : color.black}
            style={{
              transform: partnerTitle === title ? "rotate(45deg)" : "rotate(0)",
            }}
          />
          <span>{title}</span>
        </Flex>
      </View>
    </View>
  )

  return (
    <Layout>
      <SEO title="" />

      <MaxFrame>
        <View p={[2, 4]} h={["65vh", "100vh"]} position={"relative"}>
          <Flex
            onClick={() => {
              i18n.changeLanguage(i18n.language === "zh" ? "en" : "zh")
              localStorage.setItem("userLangStorage", i18n.language)
            }}
            style={{
              display: "inline-flex",
              float: "right",
              cursor: "pointer",
            }}
            aic
          >
            <SVG svg={iconGlobal} withText fill={color.gray} />
            <Text color={color.gray}>
              {i18n.language === "zh" ? "EN" : "中文"}
            </Text>
          </Flex>
          <SVG svg={logo} scale={3} />
          <View scale={3} weight={"bold"} mt={1.5} paragraph>
            {t("为 Staking 提供流动性的跨链网络")}
          </View>

          <View position={"absolute"} bottom={[2, 4]}>
            <View scale={0}>
              <Flex aic>
                <SVG svg={more} scale={3} withText />
                {t("了解更多")}
              </Flex>
            </View>
          </View>

          <Flex
            jcsb
            position={"absolute"}
            z={-1}
            top={0}
            right={0}
            bottom={0}
            left={0}
            p={[1, null]}
          >
            <MotionLine duration={18} />
            <MotionLine duration={14} mobileDisplayNone />
            <MotionLine duration={12} highlight={color.bifrostRed} />
            <MotionLine duration={16} />
            <MotionLine duration={12} mobileDisplayNone />
            <MotionLine duration={8} highlight={color.bifrost} />
            <MotionLine duration={16} />
            <MotionLine duration={12} />
            <MotionLine duration={16} mobileDisplayNone />
            <MotionLine duration={14} mobileDisplayNone />
          </Flex>
        </View>
      </MaxFrame>

      <MaxFrame>
        <Flex childFlex={1} gap={[1, 2]} responsive>
          <View m={[1.5, 4]}>
            <View
              p={[1, 2]}
              color={color.white}
              bg={color.bifrost}
              r={radius.lg}
              position={"sticky"}
              top={4}
              w={["100%", 30]}
            >
              <Flex jcsb gap={1}>
                <Flex jcsb column p={[0.5, 1]}>
                  <View>
                    <View scale={2} mb={0.5} weight={"bold"}>
                      {t("白皮书")}
                    </View>
                    <View o={0.5}>v0.2</View>
                  </View>

                  <a href="mailto:hello@bifrost.codes">
                    <View
                      display={"inline-block"}
                      flex={"none"}
                      bg={{
                        normal: color.white,
                        hover: darken(0.1, color.white),
                      }}
                      style={{ alignSelf: "start" }}
                      px={1}
                      py={0.75}
                      color={color.bifrost}
                      r={radius.pill}
                      weight={"bold"}
                    >
                      <Flex aic>
                        <SVG svg={download} fill={color.bifrost} withText />
                        <span>{t("查看")}</span>
                      </Flex>
                    </View>
                  </a>
                </Flex>

                <View
                  r={radius.md}
                  b={color.gray6}
                  s={shadow.xl}
                  overflow={"hidden"}
                  h={[12, 16]}
                >
                  <img src={cover} height="100%" alt={t("白皮书")} />
                </View>
              </Flex>
            </View>
          </View>

          <View mx={[2, 4]} my={[4, 8]}>
            <View scale={3} mb={[1.5, 2]} weight={"bold"}>
              {t("什么是 Bifrost vToken？")}
            </View>

            <Flex column gap={[3, 6]}>
              <Feature
                icon={featureicon1}
                title={t("Staking 流动性")}
                description={t(
                  "持有 vToken 即可获得 Staking 收益，vToken 自由交易、使用，并可随时卖回原链资产，无需等待解押。"
                )}
              />
              <Feature
                icon={featureicon2}
                title={t("Staking 低门槛")}
                description={t(
                  "可通过 DEX、Dapp、钱包获得 vToken，持有 vToken 即为参与原链 Staking，同时保留治理权。"
                )}
              />
              <Feature
                icon={featureicon3}
                title={t("降低借贷费率")}
                description={t(
                  "vToken 作为抵押物进行借贷时，其 Staking 收益可抵销部分利息，实现低息借贷。 "
                )}
              />
              <Feature
                icon={featureicon4}
                title={t("开发者 ++")}
                description={t(
                  "为开发者赋能，基于 Bifrost 开发的钱包、矿池、Dapp、DeFi 等生态将从底层获得 Staking 增益。"
                )}
              />
            </Flex>
          </View>
        </Flex>
      </MaxFrame>

      <Flex childFlex={1}>
        <View px={[2, null]} py={[4, 8]} bg={color.gray6} align={"center"}>
          <View scale={2} mb={2} weight={"bold"}>
            {t("Bifrost 系统架构")}
          </View>

          <View position={"relative"}>
            <Flex
              position={"absolute"}
              top={0}
              right={0}
              bottom={0}
              left={0}
              jcc
              aic
              scale={2}
              display={["none", "flex"]}
              style={{ pointerEvents: "none" }}
            >
              <AnimatePresence>
                {!systemZoom && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SVG
                      svg={zoom}
                      fill={color.white}
                      bg={rgba(color.bifrost, 0.65)}
                      p={0.75}
                      r={radius.pill}
                      style={{ backdropFilter: "saturate(180%) blur(20px)" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Flex>

            <motion.img
              onClick={() => setSystemZoom(!systemZoom)}
              src={i18n.language === "zh" ? systemCn : system}
              animate={{ maxHeight: systemZoom ? "60em" : "30em" }}
              transition={{
                type: "spring",
                damping: 100,
                mass: 0.5,
              }}
              style={{ maxWidth: "100%" }}
              alt=""
            />
          </View>

          <View mt={[2, 4]} align={"center"} color={color.gray}>
            {t("（白皮书 第 5 页）")}
          </View>
        </View>
      </Flex>

      <MaxFrame>
        <View color={color.gray} scale={2} m={[3, 9]} paragraph>
          {t("Bifrost 希望")}{" "}
          <View as={"span"} color={color.black} weight={"bold"}>
            {t("为")}{" "}
            <View as={"span"} color={color.bifrostRed} weight={"bold"}>
              {" "}
              80%{" "}
            </View>{" "}
            {t("的 PoS 公链提供 Staking 流动性")}
          </View>
          {t(
            "，用户可以随时将 PoS 币种通过 Bifrost 转接桥兑换成 vToken 从而获得 Staking 收益和流动性。"
          )}
        </View>
      </MaxFrame>

      <MaxFrame>
        <View mx={[2, 4]} my={[6, 8]} ref={PartnerScrollHeightRef}>
          <View scale={3} mb={1.5} weight={"bold"}>
            {t("参与方")}
          </View>

          <Flex gap={[1, 1.5]} flexWrap>
            <Partner
              title={t("跨链用户")}
              explain={t(
                "将 PoS 资产跨链，无需锁仓获得 Staking 收益，随时赎回原资产与 Staking 收益，参与 BNC 挖矿与波卡平行链生态。"
              )}
            />
            <Partner
              title={t("投票用户")}
              explain={t(
                "使用 BNC 参与出块节点、同步节点、Stake 代理节点投票，与资产 Stake 选择跨链目标节点提供决策，获得节点投票奖励同时需承担节点掉线或作恶惩罚。"
              )}
            />
            <Partner
              title={t("验证节点")}
              explain={t(
                "总得票数前 100 名的节点，负责全链⽤户交易的记账处理和打包出块，获得用户投票收益的 10%。"
              )}
            />
            <Partner
              title={t("同步节点")}
              explain={t(
                "总得票数排名靠后的其余节点，负责搭建同步节点接收交易和⼴播数据，将获得与出块节点相同⽐例的收益。"
              )}
            />
            <Partner
              title={t("Stake 代理节点")}
              explain={t(
                "满足出块节点条件，在多个 PoS 目标链搭建节点，负责接受托管资产的 Stake 代理，是综合实力较强的多链专业节点。"
              )}
            />
            <Partner
              title={t("vToken DEX")}
              explain={t(
                "给 Staking 资产提供流动性，撮合 Staking 与 UnStaking 用户交易，Staking 用户赚取 UnStaking 立即赎回用户的贴现收益。"
              )}
            />
            <Partner
              title={t("跨链渠道")}
              explain={t(
                "各类矿池、钱包和社区开发人员帮助用户进行资产跨链、无需锁仓 Staking，渠道方可获得用户 Staking 收益抽成。"
              )}
            />
            <Partner
              title={t("开发社区")}
              explain={t(
                "开发者可以基于 Bifrost 底层，开发矿池、Dapp、DeFi 等应用，满足原业务诉求的同时，获得 Staking 增益。"
              )}
            />
          </Flex>
        </View>
      </MaxFrame>

      <AnimatePresence>
        {partnerExplain && (
          <View position={"fixed"} left={0} right={0} bottom={0}>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              style={{ overflow: "hidden" }}
            >
              <View
                pointer
                p={[2, null]}
                pt={[4, null]}
                pb={[6, 4]}
                mb={[-2, -4]}
                bg={color.bifrost}
                color={color.white}
                onClick={() => {
                  setPartnerTitle()
                  setPartnerExplain()
                }}
              >
                <MaxFrame>
                  <View
                    pointer
                    p={1}
                    o={0.5}
                    position={"absolute"}
                    top={0}
                    right={0}
                  >
                    {t("收起")}
                  </View>

                  <View scale={2} px={[null, 9]} py={[null, 4]}>
                    <View mb={0.75} weight={"bold"}>
                      {partnerTitle}
                    </View>
                    <View scale={1} paragraph>
                      {partnerExplain}
                    </View>
                  </View>
                </MaxFrame>
              </View>
            </motion.div>
          </View>
        )}
      </AnimatePresence>

      <MaxFrame>
        <View mx={[2, 4]} my={[6, 8]}>
          <View scale={3} mb={[1.5, 2]} weight={"bold"}>
            {t("路线图")}
          </View>

          <Flex column gap={[4, 10]}>
            <View ml={[null, "20%"]}>
              <Quarter
                title={t("Bifrost 奥尔劳格")}
                year="2019"
                quarter="Q4"
                content={[
                  t("测试网 POC-1 & POC-2"),
                  t("转接桥轻节点"),
                  t("底层运行时模块"),
                  t("钱包"),
                  t("区块浏览器"),
                  t("节点监控台"),
                ]}
              />
            </View>
            <View ml={[null, "30%"]}>
              <Quarter
                title={t("Bifrost 阿斯加德")}
                year="2020"
                quarter="Q1"
                content={[
                  t("测试网 POC-3 & POC-4"),
                  t("单链互操作转接桥"),
                  t("BNC 经济系统"),
                  t("vToken DEX 上线"),
                  t("主网上线"),
                ]}
              />
            </View>
            <View>
              <Quarter
                title={t("Bifrost 米德加尔特")}
                year="2020"
                quarter="Q2"
                content={[
                  t("多链互操作转接桥"),
                  t("开发生态激励"),
                  t("vToken 开放平台"),
                  t("开发者工具 & SDK"),
                  t("接入 Polkadot 中继网络"),
                ]}
              />
            </View>
            <View ml={[null, "20%"]}>
              <Quarter
                title={t("Bifrost 海姆达尔")}
                year="2020"
                quarter="Q3"
                content={[
                  t("承载多种 DeFi 及衍生品"),
                  t("为更多资产提供流动性"),
                  t("建立 Bifrost DAO"),
                ]}
              />
            </View>
          </Flex>
        </View>
      </MaxFrame>

      <MaxFrame>
        <View p={[2, 4]}>
          <View scale={3} my={4}>
            <View color={color.black} weight={"bold"} paragraph>
              {t("我们很高兴认识新的朋友")}
            </View>
            <View color={color.bifrostRed} paragraph>
              hello@bifrost.codes
            </View>
            <View display={"inline-block"} scale={1} py={0.5} mb={1.5}>
              <HoverStyle>
                <Flex gap={1.5}>
                  <a
                    href="https://github.com/bifrost-codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG svg={github} />
                  </a>
                  <a
                    href="https://t.me/bifrost_network"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG svg={telegram} />
                  </a>
                  <a
                    href="https://medium.com/@bifrost_network"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG svg={medium} />
                  </a>
                  <a
                    href="https://www.facebook.com/BifrostNetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG svg={facebook} />
                  </a>
                  <a
                    href="https://twitter.com/bifrost_network"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG svg={twitter} />
                  </a>
                  <ClickView onClick={() => setIsShowQr(true)}>
                    <SVG svg={wechat} />
                  </ClickView>
                </Flex>
              </HoverStyle>
            </View>
          </View>
        </View>

        {isShowQr && (
          <ModalView p={4} close={() => setIsShowQr(false)}>
            <View
              position="relative"
              w={[null, 18]}
              p={[1.5, 2]}
              color={color.white}
              r={radius.lg}
              bg={color.bifrost}
            >
              <SVG
                pointer
                scale={1}
                position="absolute"
                p={0.4}
                top={0}
                right={0}
                svg={closeIcon}
                fill={color.white}
                onClick={() => setIsShowQr(false)}
              />

              <View r={radius.md} overflow="hidden">
                <img src={bifrost_wechat} width="100%" alt="" />
              </View>
            </View>
          </ModalView>
        )}

        <View p={[2, 4]} color={color.gray3}>
          Bifrost Network © 2019
        </View>
      </MaxFrame>
    </Layout>
  )
}

const MaxFrame = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

const MotionLine = ({ duration, highlight, mobileDisplayNone }) => (
  <View display={[mobileDisplayNone ? "none" : null, null]}>
    <motion.div
      initial={{ top: ["-20%"] }}
      animate={{
        top: ["-20%", "100%"],
      }}
      transition={{
        duration: duration,
        loop: Infinity,
      }}
      style={{ position: "absolute" }}
    >
      <svg
        width="12"
        height="72"
        viewBox="0 0 12 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="12"
          height="72"
          rx="6"
          fill={highlight ? highlight : color.gray6}
        />
      </svg>
    </motion.div>
  </View>
)

const Feature = ({ icon, title, description }) => (
  <Flex responsive>
    <SVG svg={icon} scale={[3, 2]} />
    <View mt={[1.5, null]} ml={[null, 2.5]}>
      <View scale={2} mb={0.75}>
        {title}
      </View>
      <View color={color.gray} paragraph w={[null, 30]}>
        {description}
      </View>
    </View>
  </Flex>
)

const Quarter = ({ title, year, quarter, content }) => (
  <Flex responsive>
    <View w={[null, "30%"]} align={[null, "right"]}>
      <View mb={1} color={color.gray}>
        {title}
      </View>
      <View scale={3}>
        {year}
        <View as="span" ml={0.1} color={color.bifrost} weight={"bold"}>
          {quarter}
        </View>
      </View>
    </View>

    <Flex
      w={[null, "30%"]}
      column
      gap={1}
      mt={[2, null]}
      ml={[null, "10%"]}
      color={color.gray}
    >
      {content.map(target => (
        <p key={target}>{target}</p>
      ))}
    </Flex>
  </Flex>
)

/* ↓ svg ↓ */

const logo = () => (
  <svg
    width="202"
    height="43"
    viewBox="0 0 202 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.8567 42.3398V3.36622H59.2137C63.6215 3.36622 66.9763 4.24955 69.2784 6.01621C71.5804 7.78288 72.7314 10.415 72.7314 13.9127C72.7314 15.6972 72.2496 17.3032 71.2859 18.7308C70.3223 20.1584 68.9125 21.2648 67.0566 22.05C69.1624 22.6211 70.7863 23.7007 71.9283 25.2889C73.0883 26.8593 73.6682 28.7508 73.6682 30.9636C73.6682 34.6219 72.4905 37.4325 70.1349 39.3954C67.7972 41.3584 64.4423 42.3398 60.0703 42.3398H45.8567ZM52.6289 24.7535V36.9328H60.1506C62.2742 36.9328 63.9338 36.4064 65.1294 35.3535C66.325 34.3006 66.9228 32.8374 66.9228 30.9636C66.9228 26.9128 64.8528 24.8428 60.7127 24.7535H52.6289ZM52.6289 19.7748H59.2673C61.373 19.7748 63.0147 19.3019 64.1925 18.3561C65.3881 17.3924 65.9859 16.0362 65.9859 14.2874C65.9859 12.3601 65.4327 10.9682 64.3263 10.1117C63.2378 9.2551 61.5336 8.82681 59.2137 8.82681H52.6289V19.7748Z"
      fill="black"
    />
    <path d="M86.0771 42.3398H79.5725V13.3773H86.0771V42.3398Z" fill="black" />
    <path
      d="M129.996 27.5909C129.996 24.7535 130.558 22.2017 131.682 19.9354C132.806 17.6512 134.386 15.9024 136.42 14.6889C138.454 13.4576 140.792 12.842 143.433 12.842C147.341 12.842 150.509 14.1 152.936 16.6162C155.38 19.1323 156.701 22.4694 156.897 26.6273L156.924 28.153C156.924 31.0082 156.371 33.5601 155.264 35.8086C154.176 38.057 152.606 39.7969 150.553 41.0282C148.519 42.2595 146.164 42.8752 143.487 42.8752C139.4 42.8752 136.126 41.519 133.663 38.8065C131.218 36.0762 129.996 32.4448 129.996 27.9121V27.5909ZM136.5 28.153C136.5 31.1332 137.116 33.4708 138.347 35.1661C139.579 36.8436 141.292 37.6823 143.487 37.6823C145.682 37.6823 147.386 36.8257 148.599 35.1126C149.831 33.3995 150.446 30.8922 150.446 27.5909C150.446 24.6643 149.813 22.3445 148.546 20.6313C147.297 18.9182 145.592 18.0616 143.433 18.0616C141.31 18.0616 139.623 18.9093 138.374 20.6046C137.125 22.282 136.5 24.7982 136.5 28.153Z"
      fill="black"
    />
    <path
      d="M178.659 34.4702C178.659 33.3102 178.178 32.4269 177.214 31.8202C176.268 31.2135 174.689 30.6781 172.476 30.2141C170.263 29.7502 168.416 29.1613 166.935 28.4475C163.687 26.8771 162.063 24.6019 162.063 21.6217C162.063 19.1234 163.116 17.0355 165.222 15.3581C167.328 13.6807 170.005 12.842 173.252 12.842C176.714 12.842 179.507 13.6985 181.631 15.4116C183.772 17.1248 184.843 19.3465 184.843 22.0768H178.338C178.338 20.8276 177.874 19.7926 176.946 18.9717C176.018 18.133 174.787 17.7137 173.252 17.7137C171.825 17.7137 170.656 18.0438 169.746 18.7041C168.854 19.3643 168.407 20.2477 168.407 21.3541C168.407 22.3534 168.827 23.1296 169.665 23.6828C170.504 24.236 172.199 24.7982 174.751 25.3692C177.303 25.9224 179.302 26.5916 180.747 27.3768C182.211 28.1441 183.29 29.072 183.986 30.1606C184.7 31.2491 185.057 32.5697 185.057 34.1222C185.057 36.7276 183.977 38.8422 181.818 40.4661C179.659 42.0722 176.83 42.8752 173.333 42.8752C170.959 42.8752 168.845 42.4469 166.989 41.5904C165.133 40.7338 163.687 39.556 162.652 38.057C161.617 36.558 161.1 34.9431 161.1 33.2121H167.417C167.506 34.7468 168.086 35.9335 169.157 36.7722C170.228 37.5931 171.646 38.0035 173.413 38.0035C175.126 38.0035 176.429 37.6823 177.321 37.0399C178.213 36.3796 178.659 35.523 178.659 34.4702Z"
      fill="black"
    />
    <path
      d="M196.7 6.33743V13.3773H201.973V18.1955H196.7V34.3631C196.7 35.4695 196.914 36.2725 197.343 36.7722C197.789 37.254 198.574 37.4949 199.698 37.4949C200.448 37.4949 201.206 37.4057 201.973 37.2272V42.2595C200.492 42.67 199.065 42.8752 197.691 42.8752C192.694 42.8752 190.196 40.1181 190.196 34.604V6.33743H196.7Z"
      fill="black"
    />
    <path
      d="M93.4439 10.7273C93.4439 7.5152 94.3361 5.03473 96.1206 3.28592C97.9051 1.5371 100.403 0.662689 103.616 0.662689C104.758 0.662689 107.097 1.22846 108.2 1.62423L107.095 6.23036C106.382 6.0876 105.552 6.01621 104.606 6.01621C101.501 6.01621 99.9484 7.61335 99.9484 10.8076V13.3773H108.085L106.751 18.3561L99.9484 18.1955V42.3398H93.4439V10.7273Z"
      fill="black"
    />
    <path d="M79.5719 4.21128H86.0771V9.09015H79.5719V4.21128Z" fill="black" />
    <path
      d="M129.176 13.3773L127.96 18.1955H119.308V42.3398H112.804V13.3773H129.176Z"
      fill="black"
    />
    <g clipPath="url(#clip0)">
      <path
        d="M38.6161 13.377H28.9621L0 42.3392H19.3081L38.6161 13.377Z"
        fill="#002CC3"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="38.6161"
          height="38.6161"
          fill="white"
          transform="translate(0 3.72302)"
        />
      </clipPath>
    </defs>
  </svg>
)

const more = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.9961 16.6211C23.5898 16.6211 23.3008 16.9023 23.3008 17.3086V27.5977L23.3633 29.2695L21.0195 26.6992L19.2461 24.9492C19.1211 24.8242 18.9336 24.7617 18.7461 24.7617C18.3633 24.7617 18.0742 25.0586 18.0742 25.4414C18.0742 25.6289 18.1445 25.793 18.293 25.9492L23.4805 31.1445C23.6289 31.3008 23.8086 31.3789 23.9961 31.3789C24.1914 31.3789 24.3711 31.3008 24.5195 31.1445L29.707 25.9492C29.8555 25.793 29.9258 25.6289 29.9258 25.4414C29.9258 25.0586 29.6367 24.7617 29.2461 24.7617C29.0664 24.7617 28.8789 24.8242 28.7539 24.9492L26.9727 26.6992L24.6367 29.2617L24.6992 27.5977V17.3086C24.6992 16.9023 24.4023 16.6211 23.9961 16.6211Z"
      fill="black"
    />
    <circle cx="24" cy="24" r="23.375" stroke="#E5E5EA" strokeWidth="1.25" />
  </svg>
)

const download = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.46179 13.3314C2.97742 13.3314 2.62585 13.6908 2.62585 14.183C2.62585 14.6752 2.97742 15.0345 3.46179 15.0345H13.7665C14.2509 15.0345 14.6102 14.6752 14.6102 14.183C14.6102 13.6908 14.2509 13.3314 13.7665 13.3314H8.80554C8.97742 13.2924 9.13367 13.1986 9.26648 13.0658L14.243 8.14392C14.4305 7.95642 14.5243 7.73767 14.5243 7.51111C14.5243 7.01892 14.1649 6.65955 13.6884 6.65955C13.4384 6.65955 13.2196 6.76111 13.0634 6.91736L11.4618 8.49548L9.41492 10.7455L9.49304 9.10486V1.89392C9.49304 1.36267 9.13367 1.01111 8.61804 1.01111C8.10242 1.01111 7.75085 1.36267 7.75085 1.89392V9.10486L7.82898 10.7533L5.77429 8.49548L4.18054 6.91736C4.01648 6.76111 3.80554 6.65955 3.55554 6.65955C3.07117 6.65955 2.7196 7.01892 2.7196 7.51111C2.7196 7.73767 2.81335 7.95642 3.00085 8.14392L7.9696 13.0658C8.10242 13.1986 8.25867 13.2924 8.43835 13.3314H3.46179Z" />
  </svg>
)

const iconGlobal = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 40.0001C4 20.1177 20.1177 4 40.0001 4C59.8823 4 76 20.1177 76 40.0001C76 59.8823 59.8823 76 40.0001 76C20.1177 76 4 59.8823 4 40.0001ZM10.7253 36.7264H23.7993C24.533 27.6838 27.5593 19.0038 32.5549 11.4945C20.9154 14.5261 12.0775 24.4981 10.7253 36.7264ZM32.5564 68.506C20.9156 65.4747 12.0766 55.5015 10.7251 43.2719H23.7993C24.533 52.3153 27.5599 60.9962 32.5564 68.506ZM30.3693 43.2719C31.1914 52.1513 34.5346 60.611 39.999 67.6511C45.4634 60.611 48.8067 52.1513 49.6288 43.2719H30.3693ZM39.999 12.3472C45.4634 19.3873 48.8066 27.8469 49.6288 36.7264H30.3693C31.1914 27.8469 34.5346 19.3873 39.999 12.3472ZM47.4427 11.4938C52.4385 19.0033 55.465 27.6835 56.1988 36.7264H69.2748C67.9225 24.4972 59.0834 14.5247 47.4427 11.4938ZM69.2749 43.2719C67.9233 55.5023 59.0832 65.4761 47.4413 68.5066C52.438 60.9967 55.4649 52.3156 56.1988 43.2719H69.2749Z"
    />
  </svg>
)

const featureicon1 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.52791 10H9.0883M13.8739 10H21.1956M26.5466 10H30.147"
      stroke="#002CC3"
    />
    <path
      d="M5.66053 16H10.882M16.5696 16H20.8504M27.9449 16H31.0829"
      stroke="#002CC3"
    />
    <path
      d="M1.95944 22H7.04309M13.3701 22H16.4695M22.6649 22H27.1727"
      stroke="#002CC3"
    />
    <path d="M9.95944 28H13.882M19.5696 28H23.296" stroke="#002CC3" />
    <path d="M10.9594 4H13.4168M19.1045 4H22.8309" stroke="#002CC3" />
    <circle cx="16" cy="16" r="15.5" stroke="black" />
  </svg>
)

const featureicon2 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="15.5" stroke="black" />
    <path
      d="M25.8446 16.0197C25.8446 21.4568 21.437 25.8644 16 25.8644C10.563 25.8644 6.15535 21.4568 6.15535 16.0197M11.5305 8V12.4068M20.1746 8V12.4068"
      stroke="#002CC3"
    />
  </svg>
)

const featureicon3 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.0517 6H13.8171C18.0547 6 21.49 9.43526 21.49 13.6729V13.6729C21.49 17.9105 18.0547 21.3457 13.8171 21.3457H1"
      stroke="#002CC3"
    />
    <path
      d="M27.9483 26H18.1829C13.9453 26 10.51 22.5647 10.51 18.3271V18.3271C10.51 14.0895 13.9453 10.6543 18.1829 10.6543H31"
      stroke="#002CC3"
    />
    <circle cx="16" cy="16" r="15.5" stroke="black" />
  </svg>
)

const featureicon4 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="15.5" stroke="black" />
    <path
      d="M8.67997 9.53174L14.4901 15.3418L8.67997 21.1519M13.717 22.4683H23.32"
      stroke="#002CC3"
    />
  </svg>
)

const plus = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 11.25V0H12.75V11.25H24V12.75H12.75V24H11.25V12.75H0V11.25H11.25Z"
    />
  </svg>
)

const zoom = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.85352 10.1152C6.82617 10.1152 7.73438 9.79883 8.47266 9.27148L11.25 12.0488C11.3789 12.1777 11.5488 12.2422 11.7246 12.2422C12.1055 12.2422 12.3809 11.9492 12.3809 11.5742C12.3809 11.3984 12.3223 11.2344 12.1934 11.1055L9.43359 8.33984C10.0137 7.57812 10.3594 6.63477 10.3594 5.60938C10.3594 3.13086 8.33203 1.10352 5.85352 1.10352C3.36914 1.10352 1.34766 3.13086 1.34766 5.60938C1.34766 8.08789 3.36914 10.1152 5.85352 10.1152ZM5.85352 9.14258C3.91406 9.14258 2.32031 7.54297 2.32031 5.60938C2.32031 3.67578 3.91406 2.07617 5.85352 2.07617C7.78711 2.07617 9.38672 3.67578 9.38672 5.60938C9.38672 7.54297 7.78711 9.14258 5.85352 9.14258ZM6.32812 7.34375V6.04883H7.51172C7.75195 6.04883 7.95703 5.84375 7.95703 5.60938C7.95703 5.375 7.75195 5.16992 7.51172 5.16992H6.32812V3.875C6.32812 3.59375 6.09961 3.42383 5.85352 3.42383C5.60742 3.42383 5.37305 3.59375 5.37305 3.875V5.16992H4.18945C3.94922 5.16992 3.75 5.375 3.75 5.60938C3.75 5.84375 3.94922 6.04883 4.18945 6.04883H5.37305V7.34375C5.37305 7.625 5.60742 7.79492 5.85352 7.79492C6.09961 7.79492 6.32812 7.625 6.32812 7.34375Z"
      fill="white"
    />
  </svg>
)

const github = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2C10.055 2 2 10.055 2 20C2 27.965 7.1525 34.6925 14.3075 37.0775C15.2075 37.235 15.545 36.695 15.545 36.2225C15.545 35.795 15.5225 34.3775 15.5225 32.87C11 33.7025 9.83 31.7675 9.47 30.755C9.2675 30.2375 8.39 28.64 7.625 28.2125C6.995 27.875 6.095 27.0425 7.6025 27.02C9.02 26.9975 10.0325 28.325 10.37 28.865C11.99 31.5875 14.5775 30.8225 15.6125 30.35C15.77 29.18 16.2425 28.3925 16.76 27.9425C12.755 27.4925 8.57 25.94 8.57 19.055C8.57 17.0975 9.2675 15.4775 10.415 14.2175C10.235 13.7675 9.605 11.9225 10.595 9.4475C10.595 9.4475 12.1025 8.975 15.545 11.2925C16.985 10.8875 18.515 10.685 20.045 10.685C21.575 10.685 23.105 10.8875 24.545 11.2925C27.9875 8.9525 29.495 9.4475 29.495 9.4475C30.485 11.9225 29.855 13.7675 29.675 14.2175C30.8225 15.4775 31.52 17.075 31.52 19.055C31.52 25.9625 27.3125 27.4925 23.3075 27.9425C23.96 28.505 24.5225 29.585 24.5225 31.2725C24.5225 33.68 24.5 35.615 24.5 36.2225C24.5 36.695 24.8375 37.2575 25.7375 37.0775C29.3108 35.8712 32.4159 33.5746 34.6156 30.5112C36.8154 27.4477 37.999 23.7715 38 20C38 10.055 29.945 2 20 2Z"
    />
  </svg>
)

const telegram = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2C10.0565 2 2 10.0565 2 20C2 29.9435 10.0565 38 20 38C29.9435 38 38 29.9435 38 20C38 10.0565 29.9435 2 20 2ZM28.8403 14.3315L25.8863 28.2524C25.6685 29.2395 25.0806 29.479 24.2605 29.0145L19.7605 25.6976L17.5903 27.7879C17.3508 28.0274 17.1476 28.2306 16.6831 28.2306L17.0024 23.6508L25.3419 16.1169C25.7048 15.7976 25.2621 15.6161 24.7831 15.9355L14.4766 22.4242L10.0347 21.0379C9.06935 20.7331 9.04758 20.0726 10.2379 19.6081L27.5919 12.9161C28.3976 12.6258 29.1016 13.1121 28.8403 14.3315V14.3315Z"
    />
  </svg>
)

const medium = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2C10.0598 2 2 10.0598 2 20C2 29.9402 10.0598 38 20 38C29.9402 38 38 29.9402 38 20C38 10.0598 29.9402 2 20 2ZM30.2857 12.1933L28.6464 13.7643C28.5018 13.8728 28.4335 14.0496 28.4616 14.2223V25.7817C28.4335 25.9585 28.5018 26.1353 28.6464 26.2397L30.2536 27.8107V28.1603H22.1857V27.8268L23.8451 26.2156C24.0098 26.0509 24.0098 26.0027 24.0098 25.7576V16.404L19.3893 28.1201H18.7665L13.3906 16.404V24.2589C13.3424 24.5884 13.4589 24.9219 13.692 25.1589L15.8536 27.7746V28.1241H9.71429V27.7746L11.8759 25.1589C11.9898 25.0413 12.0745 24.8986 12.1234 24.7423C12.1722 24.586 12.1838 24.4205 12.1571 24.2589V15.1786C12.1853 14.9254 12.0888 14.6804 11.896 14.5076L9.97545 12.1933V11.8438H15.942L20.5464 21.9487L24.6004 11.8518H30.2857V12.1933V12.1933Z"
    />
  </svg>
)

const facebook = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38 20C38 10.0591 29.9409 2 20 2C10.0591 2 2 10.0591 2 20C2 29.9409 10.0591 38 20 38C29.9409 38 38 29.9409 38 20ZM15.1662 20V16.5555H17.2771V14.4724C17.2771 11.6627 18.1165 9.63855 21.1929 9.63855H24.8518V13.0749H22.2762C20.9851 13.0749 20.6922 13.9324 20.6922 14.8307V16.5555H24.662L24.1204 20H20.6922V30.3893H17.2771V20H15.1662Z"/>
  </svg>
)

const twitter = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2C10.0582 2 2 10.0582 2 20C2 29.9418 10.0582 38 20 38C29.9418 38 38 29.9418 38 20C38 10.0582 29.9418 2 20 2ZM29.155 16.5505C29.0534 24.2335 24.1396 29.4964 16.8061 29.8272C13.7826 29.9654 11.5903 28.9884 9.68305 27.7769C11.9183 28.1338 14.6904 27.2401 16.1729 25.9713C13.9816 25.7575 12.6843 24.6427 12.0772 22.8477C12.7085 22.9511 13.3537 22.9351 13.9791 22.8005C12.0016 22.1389 10.5897 20.9172 10.5166 18.3561C11.0717 18.6089 11.65 18.8458 12.4186 18.8926C10.9388 18.0513 9.84441 14.9744 11.0977 12.9396C13.2939 15.3471 15.9356 17.3112 20.2735 17.577C19.1837 12.9213 25.3539 10.3967 27.9376 13.526C29.0274 13.315 29.9176 12.9005 30.7722 12.4498C30.4207 13.5309 29.7429 14.2868 28.917 14.8911C29.8237 14.7684 30.6263 14.5473 31.3115 14.2084C30.8851 15.0915 29.9548 15.8836 29.155 16.5505V16.5505Z"
    />
  </svg>
)

const wechat = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38ZM9 18.9689C9 21.6591 10.466 24.1172 12.732 25.7452C12.9317 25.878 13.031 26.0766 13.031 26.3422C13.031 26.3756 13.0229 26.4172 13.0148 26.4587C13.0067 26.5003 12.9986 26.5419 12.9986 26.5753C12.8313 27.2393 12.5312 28.3361 12.4988 28.3685C12.4923 28.3873 12.4859 28.405 12.4798 28.4219C12.4532 28.4948 12.4319 28.5536 12.4319 28.6351C12.433 28.7319 12.4721 28.8244 12.5408 28.8926C12.6094 28.9609 12.7021 28.9994 12.7989 29C12.8697 28.9929 12.9379 28.97 12.9986 28.9331L15.3639 27.5718C15.5312 27.4714 15.731 27.4066 15.9307 27.4066C16.03 27.4066 16.1639 27.4066 16.2632 27.439C17.4101 27.7761 18.6001 27.9438 19.7955 27.9366C25.7599 27.9366 30.5909 23.9175 30.5909 18.9689C30.5909 14.0191 25.7599 10 19.7955 10C13.831 10 9 14.0191 9 18.9689ZM17.5845 16.0735C17.5845 16.8476 16.9714 17.4607 16.1973 17.4607C15.4222 17.4607 14.8101 16.8476 14.8101 16.0735C14.8101 15.2984 15.4222 14.6852 16.1973 14.6852C16.9714 14.6852 17.5845 15.2984 17.5845 16.0735ZM24.7808 16.0735C24.7808 16.8476 24.1687 17.4607 23.3936 17.4607C22.6195 17.4607 22.0064 16.8476 22.0064 16.0735C22.0064 15.2984 22.6195 14.6852 23.3936 14.6852C24.1687 14.6852 24.7808 15.2984 24.7808 16.0735Z"/>
  </svg>
)

const closeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 16C12.3686 16 16 12.3765 16 8C16 3.63137 12.3608 0 7.99216 0C3.61569 0 0 3.63137 0 8C0 12.3765 3.62353 16 8 16ZM5.18431 11.4824C4.81569 11.4824 4.51765 11.1843 4.51765 10.8157C4.51765 10.6353 4.59608 10.4784 4.72157 10.3608L7.05882 8.00784L4.72157 5.6549C4.59608 5.5451 4.51765 5.38039 4.51765 5.2C4.51765 4.83922 4.81569 4.54902 5.18431 4.54902C5.36471 4.54902 5.52157 4.61961 5.63922 4.7451L7.99216 7.0902L10.3608 4.73726C10.4941 4.59608 10.6353 4.53333 10.8078 4.53333C11.1765 4.53333 11.4745 4.83137 11.4745 5.19216C11.4745 5.37255 11.4118 5.52157 11.2784 5.64706L8.92549 8.00784L11.2706 10.3451C11.3882 10.4706 11.4667 10.6275 11.4667 10.8157C11.4667 11.1843 11.1686 11.4824 10.8 11.4824C10.6118 11.4824 10.4549 11.4039 10.3373 11.2863L7.99216 8.93333L5.6549 11.2863C5.53725 11.4118 5.36471 11.4824 5.18431 11.4824Z" />
  </svg>
)
