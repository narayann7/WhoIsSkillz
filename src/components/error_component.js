import { Button, Card } from "@mui/material";
import common_styles from "./common_styles";
import images from "./../assets/base_assets";
import { useRootContext } from "../context_api/root_context";
const { Text } = common_styles;

function Error() {
  const { Mq, isDark } = useRootContext();
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#060608",
        borderRadius: "0px",
        paddingBottom: "50px",
        height: "100vh",
      }}
    >
      <div>
        <img
          style={{
            height: Mq.sm ? "150px" : "200px",
          }}
          src={images.error_404}
          alt="error_404"
        />
      </div>
      <Text
        style={{
          fontSize: Mq.sm ? "18px" : "20px",
          color: "#cde0fc",
        }}
      >
        {" whoops.."}
      </Text>
      <Text
        style={{
          fontSize: Mq.sm ? "18px" : "20px",
          color: "#cde0fc",
        }}
      >
        {"this page is not available"}
      </Text>
      <Button
        onClick={() => {
          window.open("/", "_self");
        }}
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          // paddingTop: Mq.sm ? "2px" : "8px",
          // paddingBottom: Mq.sm ? "2px" : "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "none",
          borderRadius: "0.5rem",
          border: isDark ? "2px solid #035a69" : "2px solid #6EB69D",
          marginTop: "20px",
          backgroundColor: "#e1ecff",
          color: isDark ? "black" : "white",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            letterSpacing: "0.05rem",
            color: isDark ? "black" : "white",
          }}
        >
          lets go back
        </Text>
      </Button>
    </Card>
  );
}
export default Error;
