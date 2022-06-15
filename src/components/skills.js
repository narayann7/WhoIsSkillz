import { Button, Card, CardMedia, Grid, useTheme } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
import images from "../assets/base_assets";
import { useRootContext } from "../context_api/root_context";
import { Box } from "@mui/system";
const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;
function Skills() {
  const theme = useTheme();
  const { Mq, isDark } = useRootContext();

  return (
    <BackgroundCard id="skills">
      <CenterCard
        style={{
          // backgroundColor: "grey",
          width: Mq.sm ? "75vw" : "50vw",
          display: "flex",
          marginLeft: Mq.sm ? "0px" : "50px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "15vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontFamily: "Be Vietnam Pro",
              fontSize: Mq.sm ? "1rem" : "2rem",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            Tech stack.
          </Text>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Text2
            style={{
              marginBottom: "10px",
            }}
          >
            Languages
          </Text2>
          <Grid container>
            {/* <TechIcon /> */}
          </Grid>
        </div>

        {/* <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TechIcon />
          <TechIcon />
          <TechIcon />
          <TechIcon />
          <TechIcon />
          <TechIcon />
        </div> */}
      </CenterCard>
    </BackgroundCard>
  );

  function TechIcon({ link, icon, name }) {
    return (
      <Card
        onClick={() => {
          window.open({ link }, "_blank");
        }}
        elevation={0}
        style={{
          borderRadius: "5px",
          width: "120px",
          height: "38px",
          display: "flex",
          marginRight: "10px",
          marginBottom: "10px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          style={{
            width: "20%",
          }}
          src={icon}
        />
        <Text
          style={{
            cursor: "pointer",
            marginTop: "4px",
          }}
        >
          {name}
        </Text>
      </Card>
    );
  }
}

export default Skills;
