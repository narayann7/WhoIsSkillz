import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { resume_link } from "../utility/links";
import { useRootContext } from "../context_api/root_context";
import { HiExternalLink } from "react-icons/hi";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import common_styles from "../components/common_styles";

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
  const headerHref = ["#landing", "#about", "#experience", "#projects"];

  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <BackgroundCard id="landing">
      <CenterCardLanding
        style={
          Mq.sm
            ? {
                alignItems: "flex-start",
                paddingBottom: "10vh",
              }
            : {
                alignItems: "center",
              }
        }
      >
        <Text
          style={
            Mq.sm
              ? {
                  fontSize: "0.8rem",
                  paddingLeft: "2px",
                }
              : {
                  fontSize: "2rem",
                }
          }
        >
          {`Hello ${isDark ? "👋🏻" : "👋🏿"}, I’m`}
        </Text>
        <Text
          style={{
            fontSize: Mq.sm ? "2rem" : Mq.bsm ? "6vh" : "10vh",
            fontWeight: "700",
            lineHeight: "0.9",
            marginTop: Mq.sm ? "10px" : "0",
            color: isDark ? "#6EB69D" : "#035a69",
          }}
        >
          Laxmi Narayan
        </Text>
        <div className="imWrapper">
          <div
            className="words"
            style={{
              height: Mq.sm ? "2.5rem" : "3.5rem",
              marginTop: Mq.sm ? "10px" : "0",
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
                <span id={index}>
                  <Text
                    style={{
                      fontSize: Mq.sm ? "25px" : "40px",
                    }}
                  >
                    {item}
                  </Text>
                </span>
              );
            })}
          </div>
        </div>
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
            borderRadius: Mq.sm ? "0.4rem" : "0.9rem",
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
            size={Mq.sm ? "1rem" : "1.2rem"}
            color={isDark ? "black" : "white"}
          />
        </Button>
      </CenterCardLanding>

      {Mq.sm && (
        <a href={headerHref[currentIndex]}>
          <Box
            onClick={() => {
              if (currentIndex < headerHref.length - 1) {
                setcurrentIndex(currentIndex + 1);
              } else {
                setcurrentIndex(0);
              }
            }}
            sx={{
              right: "35px",
              bottom: "35px",
              position: "fixed",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: isDark ? "#0c111a" : "#9ebfb4",
              height: "40px",
              width: "40px",
              borderRadius: "12px",
            }}
          >
            {currentIndex === headerHref.length - 1 ? (
              <FaAngleDoubleUp color={isDark ? "white" : "black"} />
            ) : (
              <FaAngleDoubleDown color={isDark ? "white" : "black"} />
            )}
          </Box>
        </a>
      )}
    </BackgroundCard>
  );
}

export default Landing;
