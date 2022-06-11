import React from "react";
import { Box, Button, Card } from "@mui/material";
import AppTheme from "../utility/local_storage";
import { useRootContext } from "../context_api/root_context";

function Landing() {
  const { switchTheme } = useRootContext();
  return (
    <Card
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px",
        margin: "0px",
      }}
    >
      <Button
        onClick={() => {
          switchTheme();
        }}
      >
        Landing
      </Button>
    </Card>
  );
}

export default Landing;
