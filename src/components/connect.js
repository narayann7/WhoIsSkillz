import React, { useState } from "react";
import common_styles from "../components/common_styles";
import images from "../assets/base_assets";
import { AllSocial } from "./header";

import { RiTelegramFill } from "react-icons/ri";
import { TbBrandWhatsapp } from "react-icons/tb";
import { RiSpotifyFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import {
  leetcode_link,
  telegram_link,
  whatsapp_link,
  instagram_link,
  spotify_link,
} from "../utility/links";
import { Box } from "@mui/material";
import { useRootContext } from "../context_api/root_context";

const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;
function Connect() {
  const { isDark, Mq } = useRootContext();
  return (
    <BackgroundCard
      style={{
        alignItems: "flex-end",
      }}
    >
      <CenterCard
        style={{
          paddingTop: "50px",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            fontFamily: "Be Vietnam Pro",
            fontSize: Mq.sm ? "55px" : "90px",
            margin: "0px",
            letterSpacing: "-1px",
            fontWeight: "900",
            lineHeight: "70px",
          }}
        >
          Connect
        </Text>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: "Be Vietnam Pro",
              fontSize: Mq.sm ? "30px" : "50px",
            }}
          >
            with
          </Text>
          <Box>
            <img
              style={{
                height: Mq.sm ? "50px" : "90px",
                width: Mq.sm ? "100px" : "180px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              src={images.handshake}
              alt="loading..."
            />
          </Box>
          <Text
            style={{
              fontFamily: "Be Vietnam Pro",
              fontSize: Mq.sm ? "30px" : "50px",
            }}
          >
            me
          </Text>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "20px",

            flexDirection: "row",
          }}
        >
          <Text2
            style={{
              lineHeight: "1px",
            }}
          >
            give it a star ⭐ in
          </Text2>
          <Text
            onClick={() => {
              window.open(
                "https://github.com/narayann7/who-is-skillz",
                "_blank"
              );
            }}
            style={{
              cursor: "pointer",
              marginLeft: "5px",
              marginRight: "5px",
              color: isDark ? "#6EB69D" : "#035a69",
              lineHeight: "1px",
            }}
          >
            Github
          </Text>
        </Box>
        <Text2>if like it 👀</Text2>
        {Mq.sm && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                flexdirection: "row",
                marginTop: "15px",
                width: "40vw",
                height: "5vh",
              }}
            >
              <AllSocial isDark={isDark} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                flexdirection: "row",
                marginTop: "15px",
                width: "40vw",
                height: "5vh",
              }}
            >
              <AllSocial2 isDark={isDark} />
            </div>
          </div>
        )}
        <Text
          id="connect"
          style={{
            paddingTop: Mq.sm ? "25vh" : "30vh",
            paddingBottom: "8px",
          }}
        >
          Built with 💜 by Narayan
        </Text>
      </CenterCard>
      {!Mq.md && <SideSocial isDark={isDark} />}
    </BackgroundCard>
  );
}

export default Connect;
function SideSocial({ isDark }) {
  return (
    <div
      style={{
        paddingLeft: "100px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "transparent",
        height: "40vh",
        width: "10vh",
      }}
    >
      <AllSocial2 isDark={isDark} />
      <div
        style={{
          backgroundColor: isDark ? "white" : "black",
          height: "20vh",
          width: "1.5px",
        }}
      ></div>
    </div>
  );
}

export const AllSocial2 = ({ isDark }) => {
  return (
    <>
      <span
        className="social_icons"
        id="instagram_link"
        style={{
          color: isDark ? "white" : "black",
        }}
      >
        <a
          href={instagram_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <RiInstagramLine size={22} />
        </a>
      </span>

      <span
        className="social_icons"
        id="linkedin_link"
        style={{
          paddingTop: "10px",
          color: isDark ? "white" : "black",
        }}
      >
        <a
          href={spotify_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <RiSpotifyFill size={22} />
        </a>
      </span>

      <span
        className="social_icons"
        id="gmail_link"
        style={{
          paddingTop: "10px",
          color: isDark ? "white" : "black",
        }}
      >
        <a
          href={leetcode_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <SiLeetcode size={22} />
        </a>
      </span>

      <span
        className="social_icons"
        id="stackoverflow_link"
        style={{
          paddingTop: "10px",
          color: isDark ? "white" : "black",
        }}
      >
        <a
          href={telegram_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <RiTelegramFill size={22} />
        </a>
      </span>

      <span
        className="social_icons"
        id="twitter_link"
        style={{
          paddingTop: "10px",
          color: isDark ? "white" : "black",
        }}
      >
        <a
          href={whatsapp_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <TbBrandWhatsapp size={22} />
        </a>
      </span>
    </>
  );
};
