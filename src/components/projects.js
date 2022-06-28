import {
  Box,
  Button,
  Card,
  CardActions,
  Backdrop,
  CardMedia,
} from "@mui/material";
import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { useRootContext } from "../context_api/root_context";

import {
  projects_names,
  projects_one,
  projects_two,
  projects_three,
} from "../utility/constants_data";
import common_styles from "../components/common_styles";

const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;
function Projects() {
  const projects_list = [projects_one, projects_two, projects_three];

  const { isDark, Mq } = useRootContext();
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const changeIndex = (index) => {
    setcurrentIndex(index);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  function backDrop() {
    return (
      <Backdrop
        sx={{
          backdropFilter: "blur(4px)",
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
          {proLeft()}
        </div>
      </Backdrop>
    );
  }
  return (
    <>
      {backDrop()}
      <BackgroundCard id="projects">
        <CenterCard style={CenterCardStyle()}>
          <Box
            className="experience-title"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "50vw",
              alignItems: "center",
            }}
          >
            <Text style={proStyle()}>Projects</Text>
            {Mq.md && (
              <div
                onClick={() => {
                  handleToggle();
                }}
              >
                <VscTriangleDown
                  size={20}
                  style={{
                    color: isDark ? "#6EB69D" : "#035a69",
                    marginRight: "6px",
                    marginLeft: "10px",
                  }}
                />
              </div>
            )}
          </Box>
          <Box
            style={{
              display: "flex",
              width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "50vw",
              height: Mq.sm ? "65vh" : "50vh",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {!Mq.md && <div>{proLeft()}</div>}
            <ProjectDetails project={projects_list[currentIndex]} Mq={Mq} />
          </Box>
        </CenterCard>
      </BackgroundCard>
    </>
  );
  function proLeft() {
    return projects_names.map((item, index) => {
      if (index === currentIndex) {
        return (
          <Card
            onClick={() => changeIndex(index)}
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
        );
      } else {
        return (
          <Box
            onClick={() => changeIndex(index)}
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
              color: isDark ? "white" : "black",
            }}
          >
            <Text2>{item}</Text2>
          </Box>
        );
      }
    });
  }

  function proStyle() {
    return {
      fontFamily: "Be Vietnam Pro",
      fontSize: Mq.sm ? "1.5rem" : Mq.md ? "25px" : "35px",
      fontWeight: "600",
      marginBottom: "10px",
    };
  }

  function CenterCardStyle() {
    return {
      width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "50vw",
      height: Mq.sm ? "65vh" : "50vh",
      display: "flex",
      marginLeft: Mq.sm ? "0px" : "50px",
      justifyContent: "center",
      alignItems: "center",
    };
  }
}

export default Projects;
function ProjectDetails({ project, Mq }) {
  return (
    <Card
      style={{
        padding: "15px",
      }}
    >
      <Box
        style={{
          width: Mq.sm ? "280px" : Mq.md ? "500px" : "30vw",
          display: "flex",
          marginTop: Mq.sm ? "0px" : Mq.md ? "50px" : "0px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          alt="image"
          height="160"
          image={project.picture}
        />

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: Mq.sm ? "280px" : Mq.md ? "500px" : "30vw",

            flexDirection: "row",
          }}
        >
          <Text
            sx={{
              fontSize: "20px",
            }}
          >
            {project.name}
          </Text>
          <Box>
            <CardActions>
              <Button
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                size="small"
              >
                Github
              </Button>
              <Button
                onClick={() => {
                  window.open(project.preview, "_blank");
                }}
                size="small"
              >
                preview
              </Button>
            </CardActions>
          </Box>
        </Box>
        <Text2>{project.description}</Text2>
      </Box>
    </Card>
  );
}
