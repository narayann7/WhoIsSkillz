import { Box, Card, Backdrop } from "@mui/material";
import React, { useState } from "react";
import common_styles from "../components/common_styles";
import { IoIosArrowForward } from "react-icons/io";
import { VscTriangleDown } from "react-icons/vsc";
import { useRootContext } from "../context_api/root_context";
import {
  work_experience_one,
  work_experience_two,
} from "../utility/constants_data";
const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;
function Experience() {
  const { isDark, Mq } = useRootContext();
  const companyArr = ["Velozity", "Embrays tech."];
  const workArr = [work_experience_one, work_experience_two];
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [currentIndex, setcurrentIndex] = useState(0);

  const changeIndex = (index) => {
    setcurrentIndex(index);
  };

  return (
    <>
      {backDrop()}
      <BackgroundCard id="experience">
        <CenterCard style={CenterCardStyle()}>
          <div
            className="experience-title"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "50vw",
              alignItems: "center",
            }}
          >
            <Text style={expStyle()}>Experience</Text>
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
          </div>
          <div
            className="experience-content"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: Mq.md ? "center" : "start",
              width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "50vw",
            }}
          >
            {!Mq.md && (
              <div
                style={{
                  marginRight: "40px",
                }}
              >
                {expLeft()}
              </div>
            )}

            <ExpRight work_experience={workArr[currentIndex]} />
          </div>
        </CenterCard>
      </BackgroundCard>
    </>
  );

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
          {expLeft()}
        </div>
      </Backdrop>
    );
  }
  function ExpRight({ work_experience }) {
    return (
      <Box
        style={{
          height: "50vh",
          width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "35vw",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: Mq.sm ? "column" : "row",
            justifyContent: "start",
            alignItems: Mq.sm ? "flex-start" : "center",
          }}
        >
          <Text
            style={{
              fontSize: Mq.sm ? "18px" : "20px",
              marginRight: "20px",
            }}
          >
            {work_experience.job_title}
          </Text>
          <Text
            onClick={() => {
              window.open(work_experience.company_link, "_blank");
            }}
            sx={{
              "&:hover": {
                color: isDark ? "#6EB69D" : "#035a69",
              },
            }}
            style={{
              fontSize: Mq.sm ? "18px" : "20px",

              cursor: "pointer",
            }}
          >
            @{work_experience.company_name}
          </Text>
        </Box>
        <Text2
          style={{
            marginBottom: "4px",
          }}
        >
          {work_experience.date}
        </Text2>

        {work_experience.extra && (
          <Box
            style={{
              display: "flex",
              marginBottom: "4px",
              flexDirection: Mq.sm ? "column" : "row",
            }}
          >
            <Text>{"app has 50K+ downloads :"}</Text>
            <Text
              onClick={() => {
                window.open(work_experience.extra.appLink, "_blank");
              }}
              sx={{
                "&:hover": {
                  color: isDark ? "#6EB69D" : "#035a69",
                },
              }}
              style={{
                marginLeft: "1px",
                cursor: "pointer",
              }}
            >
              {"PlayStoreLink "}
            </Text>
          </Box>
        )}
        {work_experience.points.map((point, index) => {
          return <ExpPoints key={index} content={point} />;
        })}
      </Box>
    );
  }

  function ExpPoints({ content }) {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          marginBottom: "10px",
          alignItems: "start",
        }}
      >
        <IoIosArrowForward
          size={Mq.sm ? "1.5rem" : "35px"}
          style={{
            color: isDark ? "#6EB69D" : "#035a69",
            marginRight: "6px",
          }}
        />
        <Text2>{content}</Text2>
      </Box>
    );
  }

  function expLeft() {
    return companyArr.map((item, index) => {
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
  function CenterCardStyle() {
    return {
      width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "50vw",
      display: "flex",
      marginLeft: Mq.sm ? "0px" : "50px",
      marginBottom: Mq.sm ? "100px" : "0px",
      justifyContent: "center",
      alignItems: "center",
    };
  }
  function expStyle() {
    return {
      fontFamily: "Be Vietnam Pro",
      fontSize: Mq.sm ? "1.5rem" : Mq.md ? "25px" : "35px",
      fontWeight: "600",
      marginBottom: "10px",
    };
  }
}

export default Experience;
