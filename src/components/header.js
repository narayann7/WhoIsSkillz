import React, { useState } from "react";
import { useRootContext } from "../context_api/root_context";
import common_styles from "../components/common_styles";
import { GrLinkedinOption } from "react-icons/gr";
import { RiStackOverflowLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import {
  linkedin_link,
  github_link,
  gmail_link,
  twitter_link,
  spotify_link,
  stackoverflow_link,
} from "../utility/links";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Box } from "@mui/system";
import { Avatar, Backdrop, Card, CardMedia } from "@mui/material";
import images from "./../assets/base_assets";
const { BackgroundCard, Text, Text2 } = common_styles;

function Header() {
  const { switchTheme, isDark, Mq } = useRootContext();
  const headerArr = ["landing", "about", "experience", "projects"];
  const headerHref = ["#landing", "#about", "#experience", "#projects"];
  const [currentIndex, setcurrentIndex] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {backDrop()}
      <BackgroundCard style={BackgroundCardStyle()}>
        <Box
          sx={headerBoxStyle()}
          onClick={() => {
            if (Mq.sm) handleToggle();
          }}
        >
          {!Mq.sm ? (
            <a href="#landing">
              <Text sx={lxStyle()}>Lx</Text>
            </a>
          ) : (
            <Text sx={lxStyle()}>Lx</Text>
          )}
        </Box>

        <Box style={rowCenterSpaceevely()}>
          {!Mq.sm && (
            <Box style={rowCenterSpaceevely()}>
              {headerArr.map((header, index) => {
                if (index !== 0) {
                  return (
                    <a key={index} href={headerHref[index]}>
                      <Text
                        sx={{
                          paddingRight: "2vw",
                          "&:hover": {
                            color: isDark ? "#6EB69D" : "#035a69",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {header}
                      </Text>
                    </a>
                  );
                }
              })}
            </Box>
          )}
          <Box sx={darkModeSwitchStyle()} onClick={switchTheme}>
            {isDark ? (
              <HiOutlineSun size={20} />
            ) : (
              <HiOutlineMoon size={20} color="black" />
            )}
          </Box>
        </Box>
      </BackgroundCard>
      {!Mq.md && (
        <>
          <SideSocial isDark={isDark} />
        </>
      )}
    </>
  );

  function backDrop() {
    return (
      <Backdrop
        sx={{
          backdropFilter: "blur(6px)",

          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <div
          style={{
            height: "40vh",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",

            backgroundColor: " rgba(0, 0, 0, 0)",
          }}
        >
          <LpLogo />
          {/* {headerArr.map((header, index) => {
            return (
              <a key={index} href={headerHref[index]}>
               
              </a>
            );
          })} */}
          {headerMobileButton()}
          <div style={dot()}></div>
        </div>
      </Backdrop>
    );
  }
  function headerMobileButton() {
    return headerArr.map((item, index) => {
      if (index === currentIndex) {
        return (
          <a key={index} href={headerHref[index]}>
            <Card
              onClick={() => setcurrentIndex(index)}
              style={{
                width: "200px",
                height: "43px",
                display: "flex",
                cursor: "pointer",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                border: isDark ? "2px solid #035a69" : "2px solid #6EB69D",
              }}
            >
              <Text>{item}</Text>
            </Card>
          </a>
        );
      } else {
        return (
          <a key={index} href={headerHref[index]}>
            <Box
              onClick={() => setcurrentIndex(index)}
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: isDark ? "#102027" : "#9ebfb4",
                  transition: "background-color 0.5s ease;",
                  cursor: "pointer",
                  borderRadius: "4px",
                  marginTop: "4px",
                  marginBottom: "4px",
                  border: isDark ? "2px solid #035a69" : "2px solid #6EB69D",
                },
              }}
              style={{
                width: "200px",
                height: "43px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <Text2
                style={{
                  color: isDark ? "grey" : "white",
                }}
              >
                {item}
              </Text2>
            </Box>
          </a>
        );
      }
    });
  }
  function dot() {
    return {
      height: "1vh",
      width: "1vh",
      backgroundColor: "#6EB69D",
      borderRadius: "50%",
      marginBottom: "15px",
      marginTop: "15px",
      marginLeft: "10px",
    };
  }

  function rowCenterSpaceevely() {
    return {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "row",
    };
  }

  function lxStyle() {
    return {
      fontFamily: "Poppins",
      fontSize: "1.2rem",
      fontWeight: "700",
      letterSpacing: "0.1rem",
      "&:hover": {
        color: isDark ? "#6EB69D" : "#035a69",
        cursor: "pointer",
      },
    };
  }

  function darkModeSwitchStyle() {
    return {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: isDark ? "#102027" : "#9ebfb4",
      height: "37px",
      width: "37px",
      borderRadius: "12px",
    };
  }

  function headerBoxStyle() {
    return {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: isDark ? "#102027" : "#9ebfb4",
      height: "40px",
      width: "40px",
      borderRadius: "12px",
    };
  }

  function BackgroundCardStyle() {
    return {
      height: "10vh",
      paddingTop: "2vh",
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "8vw",
      paddingRight: "8vw",
      alignItems: "center",
      color: "white",
      opacity: "0.9",
    };
  }
}

export default Header;
const SideSocial = ({ isDark }) => {
  return (
    <div
      style={{
        left: "7.1vw",
        bottom: "-2vh",
        position: "fixed",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "transparent",
        height: "40vh",
        width: "10vh",
      }}
    >
      <AllSocial isDark={isDark} />
      <div
        style={{
          backgroundColor: isDark ? "white" : "black",
          height: "20vh",
          width: "1.5px",
        }}
      ></div>
    </div>
  );
};

export const AllSocial = ({ isDark }) => {
  return (
    <>
      <span
        className="social_icons"
        id="github"
        style={{
          color: isDark ? "white" : "black",
        }}
      >
        <a
          href={github_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <FiGithub size={22} />
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
          href={linkedin_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <GrLinkedinOption size={22} />
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
          href={gmail_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <MdAlternateEmail size={22} />
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
          href={stackoverflow_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <RiStackOverflowLine size={22} />
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
          href={twitter_link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          <VscTwitter size={22} />
        </a>
      </span>
    </>
  );
};
const LpLogo = () => {
  return (
    <div
      onClick={() => {
        window.open(spotify_link, "_blank");
      }}
      style={{
        // marginLeft: "10vw",
        marginBottom: "2vh",
        marginTop: "4vh",
        borderRadius: "50%",
      }}
    >
      <Avatar
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "black",
        }}
        className="add_friend"
      >
        <CardMedia
          style={{
            height: "60px",
            width: "60px",
          }}
          component="img"
          image={images.lp_logo}
        />
      </Avatar>
    </div>
  );
};
