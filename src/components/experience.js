import { Box, Card } from "@mui/material";
import React, { useState } from "react";
import common_styles from "../components/common_styles";
import { IoIosArrowForward } from "react-icons/io";
import { useRootContext } from "../context_api/root_context";
import { work_experience_one } from "../utility/constants_data";
const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;
function Experience() {
  const { isDark, Mq } = useRootContext();
  const tempArr = ["Embrays tech.", "Velozity"];
  const [currentIndex, setcurrentIndex] = useState(0);

  const changeIndex = (index) => {
    setcurrentIndex(index);
  };

  return (
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
          <Text style={expStyle()}>Experience.</Text>
        </div>
        <div
          className="experience-content"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              marginRight: "40px",
            }}
          >
            {expRight()}
          </div>

          <Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "1.5rem",
                  marginRight: "20px",
                }}
              >
                {work_experience_one.job_title}
              </Text>
              <Text
                onClick={() => {
                  window.open(work_experience_one.company_link, "_blank");
                }}
                sx={{
                  "&:hover": {
                    color: isDark ? "#6EB69D" : "#035a69",
                  },
                }}
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                @{work_experience_one.company_name}
              </Text>
            </Box>
            <Text2>{work_experience_one.date}</Text2>
            {work_experience_one.points.map((point, index) => {
              return <ExpPoints content={point} />;
            })}
          </Box>
        </div>
      </CenterCard>
    </BackgroundCard>
  );

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

  function expRight() {
    return tempArr.map((item, index) => {
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
      fontSize: Mq.sm ? "1.5rem" : "2.5rem",
      fontWeight: "600",
      marginBottom: "10px",
    };
  }
}

export default Experience;
