import React, { useState } from "react";
import { useRootContext } from "../context_api/root_context";
import common_styles from "../components/common_styles";
import { GrLinkedinOption } from "react-icons/gr";
import { BsSpotify } from "react-icons/bs";
import { RiStackOverflowLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import {
  linkedin_link,
  github_link,
  gmail_link,
  twitter_link,
  stackoverflow_link,
  spotify_end_playlist_link,
} from "../utility/links";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Box } from "@mui/system";
import { Avatar, Backdrop, Card, CardMedia } from "@mui/material";
import images from "./../assets/base_assets";
const { BackgroundCard, Text, Text2 } = common_styles;

function Header() {
  var navigate = useNavigate();
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
                    <Box
                      sx={{
                        "&:hover": {
                          backgroundColor: isDark ? "#0f1e24" : "#a3c1b7",
                          // border: !isDark ? "1.8px solid black" : "1.8px solid#9ebfb4",

                          borderRadius: "8px",
                        },
                      }}
                      style={{
                        // backgroundColor: "grey",
                        padding: "0.65vh 0.8vw",
                        marginRight: "1vw",
                      }}
                    >
                      <a key={index} href={headerHref[index]}>
                        <Text
                          key={index}
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                            },
                          }}
                        >
                          {header}
                        </Text>
                      </a>
                    </Box>
                  );
                } else {
                  return <></>;
                }
              })}
            </Box>
          )}
          {!Mq.sm && (
            <Box
              sx={darkModeSwitchStyle()}
              onClick={() => {
                navigate("/playlists");
              }}
            >
              <BsSpotify
                color={isDark ? "white" : "black"}
                onMouseOut={({ target }) => (target.style.color = "white")}
                size={20}
              />
            </Box>
          )}
          <Box
            sx={darkModeSwitchStyle()}
            style={{
              marginLeft: "1vw",
            }}
            onClick={switchTheme}
          >
            {isDark ? (
              <HiOutlineSun
                color={isDark ? "white" : "black"}
                onMouseOut={({ target }) => (target.style.color = "white")}
                size={20}
              />
            ) : (
              <HiOutlineMoon
                size={20}
                color={isDark ? "white" : "black"}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            )}
          </Box>
          <div></div>
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
            height: "50vh",
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
              key={index}
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
      marginRight: "0.5vw",
    };
  }

  function lxStyle() {
    return {
      fontFamily: "Poppins",
      fontSize: "15px",
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
      padding: "0.65vh 0.8vw",
      width: "37px",
      borderRadius: "12px",
      "&:hover": {
        border: !isDark ? "2px solid black" : "2px solid#9ebfb4",
      },
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
      marginRight: "10px",
      borderRadius: "12px",
      "&:hover": {
        border: !isDark ? "2px solid black" : "2px solid#9ebfb4",
      },
    };
  }

  function BackgroundCardStyle() {
    return {
      height: "10vh",
      paddingTop: "2vh",
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "12vw",
      paddingRight: "13.4vw",
      alignItems: "center",
      color: "white",
      opacity: "0.9",
    };
  }
}

export default Header;
export const SideSocial = ({ isDark }) => {
  return (
    <div
      style={{
        left: "11.5vw",
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
        className="social_icons social_icons_github"
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
        className="social_icons social_icons_linkedin"
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
        className="social_icons social_icons_gmail"
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
        className="social_icons social_icons_stackoverflow"
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
        className="social_icons social_icons_twitter"
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
        window.open(spotify_end_playlist_link, "_blank");
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
