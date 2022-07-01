import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { resume_link } from "../utility/links";
import { useRootContext } from "../context_api/root_context";
import { HiExternalLink } from "react-icons/hi";
import { TbPlaylist } from "react-icons/tb";
import common_styles from "../components/common_styles";
import { AllSocial } from "./header";
import { spotify_143_playlist_link } from "../utility/links";
const { BackgroundCard, Text, CenterCardLanding } = common_styles;

const iam = [
  "App Developer .",
  "Backend enthusiastic .",
  "Problem Solver .",
  "Backend enthusiastic .",
  "App Developer .",
];
function Landing() {
  const { isDark, Mq } = useRootContext();
  const headerHref = [
    "#landing",
    "#about",
    "#experience",
    "#projects",
    "#connect",
  ];

  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <BackgroundCard id="landing">
      <CenterCardLanding
        className="slide_down"
        style={
          Mq.sm
            ? {
                alignItems: "flex-start",
                paddingBottom: "10vh",
              }
            : {
                paddingTop: "6vh",
                alignItems: "center",
              }
        }
      >
        <Text
          style={
            Mq.sm
              ? {
                  fontSize: "1rem",
                  paddingLeft: "2px",
                }
              : {
                  fontSize: "2rem",
                }
          }
        >
          {`Hello ${isDark ? "👋🏻" : "👋🏿"}, It's`}
        </Text>
        <Text
          style={{
            fontFamily: "Be Vietnam Pro",
            fontSize: Mq.sm ? "2.5rem" : Mq.bsm ? "10vh" : "11vh",
            fontWeight: "700",
            lineHeight: "0.9",
            marginTop: Mq.sm ? "10px" : "0",
            color: isDark ? "#6EB69D" : "#035a69",
          }}
        >
          Narayan
        </Text>
        <div className="imWrapper">
          <div
            className="words"
            style={{
              height: Mq.sm ? "2.2rem" : "3.3rem",
              marginTop: Mq.sm ? "8px" : "18px",
              marginBottom: "5px",
              display: "flex",
              alignItems: Mq.sm ? "flex-start" : "center",
              justifyContent: "flex-start",
              overflow: "hidden",
              flexDirection: "column",
            }}
          >
            {iam.map((item, index) => {
              if (item === "Backend enthusiastic ." && Mq.sm) {
                item = "Backend en.";
              }
              return (
                <span key={index}>
                  <Text
                    style={{
                      fontSize: Mq.sm ? "24px" : "35px",
                    }}
                  >
                    {item}
                  </Text>
                </span>
              );
            })}
          </div>
        </div>
        {ResumeButton(Mq, isDark)}
        {Mq.sm && (
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
        )}
      </CenterCardLanding>

      {Mq.sm &&
        floatingAction(headerHref, currentIndex, setcurrentIndex, isDark)}
    </BackgroundCard>
  );
}

export default Landing;
function floatingAction(headerHref, currentIndex, setcurrentIndex, isDark) {
  return (
    <a href={headerHref[currentIndex]}>
      <Box
        onClick={() => {
          window.open(spotify_143_playlist_link, "_blank");
        }}
        sx={{
          right: "35px",
          bottom: "35px",
          position: "fixed",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: isDark ? "#102027" : "#9ebfb4",
          height: "40px",
          width: "40px",
          borderRadius: "12px",
        }}
      >
        <TbPlaylist size={20} color={isDark ? "white" : "black"} />
      </Box>
    </a>
  );
}

function ResumeButton(Mq, isDark) {
  return (
    <Button
      onClick={() => {
        window.open(resume_link, "_blank");
      }}
      style={{
        paddingLeft: Mq.sm ? "5px" : "20px",
        paddingRight: Mq.sm ? "5px" : "20px",
        paddingTop: Mq.sm ? "2px" : "8px",
        paddingBottom: Mq.sm ? "2px" : "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "none",
        borderRadius: Mq.sm ? "0.4rem" : "0.8rem",
        border: isDark ? "2px solid #035a69" : "2px solid #6EB69D",
        marginTop: Mq.sm ? "10px" : "30px",
        backgroundColor: isDark ? "#6EB69D" : "#035a69",
      }}
    >
      <Text
        style={{
          fontWeight: "700",
          letterSpacing: "0.05rem",
          color: isDark ? "black" : "white",
        }}
      >
        Resume
      </Text>
      <HiExternalLink
        size={Mq.sm ? "15px" : "20px"}
        color={isDark ? "black" : "white"}
      />
    </Button>
  );
}
