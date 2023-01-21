import { React, useState } from "react";
import common_styles from "../components/common_styles";
import { useNavigate } from "react-router-dom";

import { IoChevronBackSharp } from "react-icons/io5";

import { Box, Card } from "@mui/material";
import { useRootContext } from "../context_api/root_context";

const { BackgroundCard, Text2, Text } = common_styles;
function Playlist() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const { isDark, Mq } = useRootContext();
  const navigate = useNavigate();

  var playListLinks = [
    "https://open.spotify.com/embed/playlist/3j0M3SnpY12o5NbG7wNrts",
    "https://open.spotify.com/embed/playlist/5TlrzMjy9d7Lke11BF2nfZ",
    "https://open.spotify.com/embed/playlist/2uCVchtDAwpnlPKE9Ru7cV",
    // "https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit",
    // "https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl",
    // "https://open.spotify.com/embed/playlist/37i9dQZF1EM17IpJjMcIhv",
    // "https://open.spotify.com/embed/playlist/37i9dQZF1Ethq9SIqUCTlA",
  ];

  const playlist_names = [
    "Endeavour",
    "1.43am",
    "IHH Beats",
    // "Top in 2022",
    // "Top in 2021",
    // "Top in 2020",
    // "Top in 2019",
  ];
  const changeIndex = (index) => {
    setcurrentIndex(index);
  };
  return (
    <BackgroundCard
      style={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: Mq.sm ? "10vh" : "0px",
      }}
    >
      <IoChevronBackSharp
        onClick={() => {
          navigate("/");
        }}
        style={{
          fontSize: "30px",
          color: isDark ? "white" : "black",
          margin: "20px",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          height: "70px",
          width: Mq.sm ? "75%" : Mq.md ? "500px" : "70%",
          scrollbarWidth: "thin",
          overflowY: "scroll",
          scrollbarColor: isDark ? "white" : "black",
        }}
      >
        {PlaylistNames()}
      </div>
      <iframe
        title="mySpotifyPlayLists"
        style={{
          borderRadius: "12px",
          height: Mq.sm ? "65%" : Mq.md ? "400px" : "70%",
          width: Mq.sm ? "75%" : Mq.md ? "500px" : "70%",
        }}
        src={playListLinks[currentIndex]}
        allowFullScreen=""
        allow={{
          autoplay: "true",
          clipboardWrite: "true",
          encryptedMedia: "true",
          fullscreen: "true",
          pictureInPicture: "true",
          loading: "lazy",
        }}
      ></iframe>
    </BackgroundCard>
  );
  function PlaylistNames() {
    return playlist_names.map((item, index) => {
      if (index === currentIndex) {
        return (
          <Card
            key={index}
            onClick={() => changeIndex(index)}
            style={{
              minHeight: "43px",
              minWidth: Mq.sm ? "120px" : Mq.md ? "150px" : "200px",
              display: "flex",
              cursor: "pointer",
              borderRadius: "10px",
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
                borderRadius: "10px",
                marginTop: "4px",
                marginBottom: "4px",
                border: isDark ? "2px solid #035a69" : "2px solid #6EB69D",
              },
            }}
            style={{
              width: "200px",
              minWidth: Mq.sm ? "100px" : Mq.md ? "150px" : "200px",
              height: "43px",
              margin: "10px",
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
}

export default Playlist;
