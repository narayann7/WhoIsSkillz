import React from "react";
import common_styles from "../components/common_styles";
import images from "../assets/base_assets";
import { AllSocial } from "./header";
// import { RiTelegramFill } from "react-icons/ri";
// import { TbBrandWhatsapp } from "react-icons/tb";
// import { RiSpotifyFill } from "react-icons/ri";
// import { SiLeetcode } from "react-icons/si";
// import { RiInstagramLine } from "react-icons/ri";
// import {
//   leetcode_link,
//   telegram_link,
//   whatsapp_link,
//   instagram_link,
//   spotify_link,
// } from "../utility/links";
import { Box } from "@mui/material";
import { useRootContext } from "../context_api/root_context";

const { BackgroundCard, CenterCard, Text } = common_styles;
function Connect() {
  const { isDark, Mq } = useRootContext();
  return (
    <BackgroundCard
      style={{
        alignItems: "center",
      }}
    >
      <CenterCard
        style={{
          paddingTop: "50px",
          justifyContent: Mq.sm ? "flex-end" : "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Be Vietnam Pro",
            fontSize: Mq.sm ? "45px" : Mq.md ? "55px" : "70px",
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
              fontSize: Mq.sm ? "23px" : Mq.md ? "30px" : "35px",
            }}
          >
            with
          </Text>
          <Box>
            <img
              style={{
                height: Mq.sm ? "40px" : Mq.md ? "55px" : "90px",
                width: Mq.sm ? "80px" : Mq.md ? "110px" : "180px",
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
              fontSize: Mq.sm ? "23px" : Mq.md ? "30px" : "35px",
            }}
          >
            me
          </Text>
        </Box>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",

            flexDirection: Mq.sm ? "column" : "row",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: Mq.sm ? "20px" : "0px",

              flexDirection: "row",
            }}
          >
            <Text2
              style={{
                lineHeight: "1px",
              }}
            >
              give it a st⭐r in
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
        </div> */}
        {Mq.md && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "90px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                flexdirection: "row",
                // marginTop: "15px",
                width: Mq.sm ? "40vw" : "20vw",
                height: "vh",
              }}
            >
              <AllSocial isDark={isDark} />
            </div>
          </div>
        )}
        <Text
          id="connect"
          style={{
            paddingTop: Mq.sm ? "25vh" : Mq.md ? "20vh" : "30px",
            paddingBottom: "8px",
          }}
        >
          Built with ♥️ by Narayan
        </Text>
      </CenterCard>
      {/* {!Mq.md && <SideSocial isDark={isDark} />} */}
    </BackgroundCard>
  );
}

export default Connect;
// function SideSocial({ isDark }) {
//   return (
//     <div
//       style={{
//         paddingLeft: "100px",
//         display: "flex",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         flexDirection: "column",
//         backgroundColor: "transparent",
//         height: "40vh",
//         width: "10vh",
//       }}
//     >
//       {/* <AllSocial2 isDark={isDark} /> */}
//       <div
//         style={{
//           backgroundColor: isDark ? "white" : "black",
//           height: "20vh",
//           width: "1.5px",
//         }}
//       ></div>
//     </div>
//   );
// }

// export const AllSocial2 = ({ isDark }) => {
//   return (
//     <>
//       <span
//         className="social_icons"
//         id="instagram_link"
//         style={{
//           color: isDark ? "white" : "black",
//         }}
//       >
//         <a
//           href={instagram_link}
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             color: isDark ? "white" : "black",
//           }}
//         >
//           <RiInstagramLine size={22} />
//         </a>
//       </span>

//       <span
//         className="social_icons"
//         id="linkedin_link"
//         style={{
//           paddingTop: "10px",
//           color: isDark ? "white" : "black",
//         }}
//       >
//         <a
//           href={spotify_link}
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             color: isDark ? "white" : "black",
//           }}
//         >
//           <RiSpotifyFill size={22} />
//         </a>
//       </span>

//       <span
//         className="social_icons"
//         id="gmail_link"
//         style={{
//           paddingTop: "10px",
//           color: isDark ? "white" : "black",
//         }}
//       >
//         <a
//           href={leetcode_link}
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             color: isDark ? "white" : "black",
//           }}
//         >
//           <SiLeetcode size={22} />
//         </a>
//       </span>

//       <span
//         className="social_icons"
//         id="stackoverflow_link"
//         style={{
//           paddingTop: "10px",
//           color: isDark ? "white" : "black",
//         }}
//       >
//         <a
//           href={telegram_link}
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             color: isDark ? "white" : "black",
//           }}
//         >
//           <RiTelegramFill size={22} />
//         </a>
//       </span>

//       <span
//         className="social_icons"
//         id="twitter_link"
//         style={{
//           paddingTop: "10px",
//           color: isDark ? "white" : "black",
//         }}
//       >
//         <a
//           href={whatsapp_link}
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             color: isDark ? "white" : "black",
//           }}
//         >
//           <TbBrandWhatsapp size={22} />
//         </a>
//       </span>
//     </>
//   );
// };
