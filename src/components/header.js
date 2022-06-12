import React from "react";
import { useRootContext } from "../context_api/root_context";
import common_styles from "../components/common_styles";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Box } from "@mui/system";
const { BackgroundCard, Text } = common_styles;

function Header() {
  const { switchTheme, isDark, Mq } = useRootContext();
  const headerArr = ["about", "experience", "projects"];
  const headerHref = ["#about", "#experience", "#projects"];
  return (
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
