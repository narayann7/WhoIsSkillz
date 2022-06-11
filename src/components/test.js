import { Box, Button } from "@mui/material";
import React from "react";
import { useRootContext } from "../context_api/root_context";

function Test() {
  const { switchTheme } = useRootContext();

  return (
    <div
      style={{
        postion: "fixed",
      }}
    >
      <Button
        onClick={() => {
          switchTheme();
        }}
      >
        Landing
      </Button>
    </div>
  );
}

export default Test;
