import { useTheme } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
import { useRootContext } from "./../context_api/root_context";
const { BackgroundCard, CenterCard, Text } = common_styles;
function About() {
  const theme = useTheme();
  const { Mq, isDark } = useRootContext();

  return (
    <BackgroundCard id="about">
      <CenterCard
        style={{
          // backgroundColor: "grey",
          width: Mq.sm ? "75vw" : "50vw",
          display: "flex",
          marginLeft: Mq.sm ? "0px" : "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // marginTop: Mq.sm?"10vh":"0vh",y
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
              fontSize: Mq.sm ? "1.5rem" : "2.5rem",
              fontWeight: "600",
              marginBottom:  "10px",
            }}
          >
            about me.
          </Text>
        </div>
        <div>
          <Text
            style={{
              fontSize: Mq.sm ? "1.2rem" :Mq.md ? "1.5rem" :  "1.7rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            dicta temporibus distinctio dolores. Consectetur tempore corrupti
            nulla, reprehenderit id dolor. Explicabo iste inventore ratione ex
            deleniti suscipit libero. Odio, magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            dicta temporibus distinctio dolores. Consectetur tempore corrupti
            nulla, reprehenderit id dolor. Explicabo iste inventore ratione ex
            deleniti suscipit libero. Odio, magni.
          </Text>
        </div>
      </CenterCard>
    </BackgroundCard>
  );
}

export default About;
{
  /* <Text
>
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
  quasi. Veritatis cumque quaerat cupiditate est non! Magni modi quam ex
  placeat quas, voluptatem, tempore exercitationem expedita blanditiis
  sapiente consectetur ab. "
</Text> */
}
