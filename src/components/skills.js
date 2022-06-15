import { Card, Grid } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
import { useRootContext } from "../context_api/root_context";
import { Box } from "@mui/system";
import { tech_stack } from "../utility/constants";
const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;

function Skills() {
  const { Mq } = useRootContext();

  return (
    <BackgroundCard id="skills">
      <CenterCard
        style={{
          marginTop: Mq.sm ? "0px" : "50px",
          width: Mq.sm ? "75vw" :Mq.md ? "65vw" : "50vw",
          display: "flex",
          marginLeft: Mq.sm ? "0px" : "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
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
              marginBottom: "20px",
            }}
          >
            Tech stack.
          </Text>
        </div>
        <TechType name={"Languages"} techArr={tech_stack.languages} />
        <TechType
          name={"Librarys & Technologies "}
          techArr={tech_stack.lib_n_tech}
        />
        <TechType
          name={"Recommendations"}
          techArr={tech_stack.recommendation}
        />
      </CenterCard>
    </BackgroundCard>
  );

  function TechType({ name, techArr }) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <Text2
          style={{
            marginBottom: "10px",
          }}
        >
          {name}
        </Text2>
        <Grid container>
          {techArr.map((tech, index) => {
            return <TechIcon key={index} icon={tech.icon} name={tech.name} />;
          })}
        </Grid>
      </div>
    );
  }

  function TechIcon({ icon, name }) {
    return (
      <Card
        elevation={0}
        style={{
          borderRadius: "5px",
          width: "120px",
          height: "38px",
          display: "flex",
          marginRight: "15px",
          marginBottom: "15px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          style={{
            width: "18%",
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
