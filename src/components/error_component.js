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
            height: Mq.sm ? "200px" : "300px",
          }}
          src={images.error_404}
          alt="error_404"
        />
      </div>
      <Text
        style={{
          fontSize: Mq.sm ? "18px" : "30px",
          color: "#cde0fc",
        }}
      >
        this page is taking nap 😴
      </Text>
      <Button
        onClick={() => {
          window.open("/", "_self");
        }}
        style={{
          paddingLeft: Mq.sm ? "5px" : "20px",
          paddingRight: Mq.sm ? "5px" : "20px",
          paddingTop: Mq.sm ? "2px" : "8px",
          paddingBottom: Mq.sm ? "2px" : "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "none",
          borderRadius: Mq.sm ? "0.4rem" : "0.8rem",
          border: isDark ? "2px solid #035a69" : "2px solid #6EB69D",
          marginTop: "20px",
          backgroundColor: "#8ea6f4",
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
