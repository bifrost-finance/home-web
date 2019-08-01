import React, { useState, useRef } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { View, SVG, color, Flex, shadow, radius } from "../components/LDS"
import { darken } from "polished"

import cover from "../images/whitepapercover.png"
import system from "../images/system.png"

export default () => {
  const [partnerTitle, setpPartnerTitle] = useState()
  const [partnerExplain, setpPartnerExplain] = useState()

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
            setpPartnerTitle()
            setpPartnerExplain()
          } else {
            setpPartnerTitle(title)
            setpPartnerExplain(explain)
            window.scrollTo(0, PartnerScrollHeightRef.current.offsetTop)
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
          <SVG svg={logo} scale={3} />
          <View scale={3} weight={"bold"} mt={1.5} paragraph>
            为 Stake 设计的去中心化跨链网络
          </View>

          <View position={"absolute"} bottom={[2, 4]}>
            <View scale={0}>
              <Flex aic>
                <SVG svg={more} scale={3} withText />
                了解更多
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
          >
            <MotionLine duration={18} />
            <MotionLine duration={14} />
            <MotionLine duration={12} highlight={color.bifrostRed} />
            <MotionLine duration={16} />
            <MotionLine duration={12} />
            <MotionLine duration={8} highlight={color.bifrost} />
            <MotionLine duration={16} />
            <MotionLine duration={12} />
            <MotionLine duration={16} />
            <MotionLine duration={14} />
          </Flex>
        </View>
      </MaxFrame>

      <MaxFrame>
        <Flex childFlex={1} gap={[1, 2]} responsive>
          <View p={[1.5, 4]}>
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
                      白皮书
                    </View>
                    <View o={0.5}>v0.2</View>
                  </View>
                  <View
                    display={"inline"}
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
                    pointer
                    weight={"bold"}
                  >
                    <Flex aic>
                      <SVG svg={download} fill={color.bifrost} withText />
                      <span>下载</span>
                    </Flex>
                  </View>
                </Flex>

                <View
                  r={radius.md}
                  b={color.gray6}
                  s={shadow.xl}
                  overflow={"hidden"}
                  h={[12, 16]}
                >
                  <img src={cover} height="100%" alt="白皮书" />
                </View>
              </Flex>
            </View>
          </View>

          <View p={[2, 4]} my={[2, 6]}>
            <View scale={3} mb={[1.5, 2]} weight={"bold"}>
              什么是 Bifrost？
            </View>

            <Flex column gap={[3, 6]}>
              <Feature
                icon={featureicon1}
                title="Stake 流动性"
                description="无需锁仓获得 Stake 收益，撮合 Stake 与 UnStake 用户自由交易，实现 UnStake 无需等待，立即赎回。"
              />
              <Feature
                icon={featureicon2}
                title="Stake 低门槛"
                description="通过 Stake Token 购买、资产充值跨链等方式完成 Stake，无需学习 Stake 操作及奖惩规则。"
              />
              <Feature
                icon={featureicon3}
                title="跨链资产增益"
                description="资产跨链给原链资产提供更多能力扩展的同时获得 Stake 收益。"
              />
              <Feature
                icon={featureicon4}
                title="开发者赋能"
                description="基于 Bifrost 构建的钱包、矿池、Dapp、DeFi 等多种生态从底层获得 Stake 增益赋能。"
              />
            </Flex>
          </View>
        </Flex>
      </MaxFrame>

      <Flex childFlex={1}>
        <View p={[4, 8]} bg={color.gray6} align={"center"}>
          <View scale={2} mb={2} weight={"bold"}>
            Bifrost 系统架构
          </View>
          <View h={[null, 30]}>
            <img
              src={system}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              alt=""
            />
          </View>
          <View mt={[2, 4]} align={"center"} color={color.gray}>
            （白皮书 第 5 页）
          </View>
        </View>
      </Flex>

      <MaxFrame>
        <View color={color.gray} scale={2} m={[4, 8]} paragraph>
          <View as={"span"} color={color.black} weight={"bold"}>
            Bifrost 从底层营造 Stake 增益环境
          </View>
          ，为基于 Bifrost 开发的 Dapp、DEX、DeFi 等项目提供跨链能力的同时，附带
          Stake 增益属性使生态更具竞争力。
        </View>
      </MaxFrame>

      <MaxFrame>
        <View p={[2, 4]} my={[2, 4]} mb={0} ref={PartnerScrollHeightRef}>
          <View scale={3} mb={1.5} weight={"bold"}>
            参与方
          </View>

          <Flex gap={[1, 1.5]} flexWrap>
            <Partner
              title="跨链用户"
              explain="将 PoS 资产跨链，无需锁仓获得 Stake 收益，随时赎回原资产与 Stake 收益，参与 BNC 挖矿与波卡平行链生态。"
            />
            <Partner
              title="投票用户"
              explain="使用 BNC 参与出块节点、同步节点、Stake 代理节点投票，与资产 Stake 选择跨链目标节点提供决策，获得节点投票奖励同时需承担节点掉线或作恶惩罚。"
            />
            <Partner
              title="出块节点"
              explain="总得票数前 1000 名的节点，负责全链⽤户交易的记账处理和打包出块，获得用户投票收益的 10%。"
            />
            <Partner
              title="同步节点"
              explain="总得票数排名靠后的其余节点，负责搭建同步节点接收交易和⼴播数据，将获得与出块节点相同⽐例的收益。"
            />
            <Partner
              title="Stake 代理节点"
              explain="满足出块节点条件，在多个 Stake 目标链均搭建节点，负责接受托管资产的 Stake 代理，是综合实力较强的多链专业节点。"
            />
            <Partner
              title="Stake DEX"
              explain="给 Stake 资产提供流动性，撮合 Stake 与 UnStake 用户交易，Stake 用户赚取 UnStake 立即赎回用户的贴现收益。"
            />
            <Partner
              title="跨链渠道"
              explain="各类矿池、钱包和社区开发人员帮助用户进行资产跨链、无需锁仓 Stake，渠道方可获得用户 Stake 收益抽成。"
            />
            <Partner
              title="开发社区"
              explain="开发者可以基于 Bifrost 底层，开发矿池、Dapp、DeFi 等应用，满足原业务诉求的同时，获得 Stake 增益。"
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
                  setpPartnerTitle()
                  setpPartnerExplain()
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
                    点击收起
                  </View>

                  <View scale={2} px={[null, 8]} py={[null, 4]}>
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
        <View p={[2, 4]} my={[2, 4]}>
          <View scale={3} mb={2} weight={"bold"}>
            路线图
          </View>

          <Flex column gap={[4, 10]}>
            <View ml={[null, "20%"]}>
              <Quarter
                title="Bifrost Orlog 奥尔劳格"
                year="2019"
                quarter="Q3"
                content={[
                  "测试网 POC-1 & POC-2",
                  "运行时模块开发 - 链上实时清结算",
                  "转接桥轻节点",
                  "钱包",
                ]}
              />
            </View>
            <View ml={[null, "30%"]}>
              <Quarter
                title="Bifrost Asgard 阿斯加德"
                year="2019"
                quarter="Q4"
                content={[
                  "测试网 POC-3 & POC-4",
                  "支持首条 PoS 资产互操作跨链转接桥",
                  "主网上线",
                  "区块浏览器",
                ]}
              />
            </View>
            <View>
              <Quarter
                title="Bifrost Midgard 米德加尔特"
                year="2020"
                quarter="Q1"
                content={[
                  "上线 DEX",
                  "开发者工具 & SDK",
                  "支持多条 PoS 资产互操作跨链转接桥",
                  "接入 Polkadot 中继网络",
                ]}
              />
            </View>
            <View ml={[null, "20%"]}>
              <Quarter
                title="Bifrost Heimdallr 海姆达尔"
                year="2020"
                quarter="Q3"
                content={[
                  "开放的去中心化跨链 Stake 经济系统",
                  "承载多种 DeFi 及衍生品",
                  "普通用户友好的使用方式",
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
              我们很高兴认识新的朋友
            </View>
            <View color={color.bifrostRed} paragraph>
              hello@bifrost.codes
            </View>
          </View>
        </View>

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

const MotionLine = ({ duration, highlight }) => (
  <div>
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
  </div>
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
