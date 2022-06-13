import React from "react";
import { useRootContext } from "../context_api/root_context";
import common_styles from "../components/common_styles";
import { GrLinkedinOption } from "react-icons/gr";
import { RiStackOverflowLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import {
  linkedin_link,
  github_link,
  gmail_link,
  twitter_link,
  stackoverflow_link,
} from "../utility/links";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Box } from "@mui/system";
const { BackgroundCard, Text } = common_styles;

function Header() {
  const { switchTheme, isDark, Mq } = useRootContext();
  const headerArr = ["about", "experience", "projects"];
  const headerHref = ["#about", "#experience", "#projects"];
  return (
    <>
      <BackgroundCard
        style={{
          height: "15vh",
          paddingTop: "2vh",
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "8vw",
          paddingRight: "8vw",
          alignItems: "center",
          color: "white",
          opacity: "0.9",
        }}
      >
        <Box
          sx={{
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
          <a href="#landing">
            <Text
              sx={{
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "700",
                letterSpacing: "0.1rem",
                "&:hover": {
                  color: isDark ? "#6EB69D" : "#035a69",
                  cursor: "pointer",
                },
              }}
            >
              Lx
            </Text>
          </a>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {!Mq.sm && (
            <Box
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {headerArr.map((header, index) => {
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
              })}
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: isDark ? "#0c111a" : "#9ebfb4",
              height: "35px",
              width: "35px",
              borderRadius: "12px",
            }}
            onClick={switchTheme}
          >
            {isDark ? <HiOutlineSun /> : <HiOutlineMoon color="black" />}
          </Box>
        </Box>
      </BackgroundCard>
      {!Mq.md && (
        <>
          {/* <div
            className="social_icons"
            onClick={() => {
              window.open(gmail_link, "_blank");
            }}
            style={{
              right: "6.5vw",
              bottom: "-2vh",
              position: "fixed",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "transparent",
              height: "55vh",
              width: "10vh",
            }}
          >
            <Text
              style={{
                marginBottom: "2vh",
                textOrientation: "mixed",
                writingMode: "vertical-lr",
                cursor: "pointer",
              }}
            >
              laxminarayanreddy432@gmail.com
            </Text>

            <div
              style={{
                backgroundColor: isDark ? "white" : "black",
                height: "20vh",
                width: "1.5px",
              }}
            ></div>
          </div> */}
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
                <HiOutlineMail size={22} />
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

            <div
              style={{
                backgroundColor: isDark ? "white" : "black",
                height: "20vh",
                width: "1.5px",
              }}
            ></div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;

// const LpLogo = () => {
//   return (
//     <div
//       style={{
//         marginLeft: "10vw",
//         marginTop: "2vh",
//         borderRadius: "50%",
//       }}
//     >
//       <Avatar
//         style={{
//           height: "50px",
//           width: "50px",
//           backgroundColor: "transparent",
//         }}
//         className="add_friend"
//       >
//         {/* <CardMedia
//           style={{
//             height: "60px",
//             width: "60px",
//           }}
//           component="img"
//           image={images.lp_logo}
//         /> */}
//       </Avatar>
//     </div>
//   );
// };