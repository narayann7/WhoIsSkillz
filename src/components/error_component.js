import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import common_styles from "./common_styles";

const { Text } = common_styles;

function Error() {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        borderRadius: "0px",
        height: "100vh",
      }}
    >
      <Text
        style={{
          fontSize: "2rem",
        }}
      >
        404 Page Not Found ☹️
      </Text>
      <Link to={"/who-is-skillz"}>go back</Link>
    </Card>
  );
}
export default Error;
