import { Button, Card } from "@mui/material";
import common_styles from "./common_styles";
import { useRootContext } from "../context_api/root_context";
import { useNavigate } from "react-router-dom";
const { Text } = common_styles;

function Error() {
  const { Mq, isDark } = useRootContext();
  const navigate = useNavigate();
  var data = " (>_<)";
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
      {/* <div>
        <img
          style={{
            height: Mq.sm ? "200px" : "300px",
          }}
          src={images.error_404}
          alt="error_404"
        />
      </div> */}
      <Text
        style={{
          fontSize: Mq.sm ? "60px" : "170px",
          color: "#cde0fc",
          letterSpacing: "10px",
          fontFamily: "Poppins",
        }}
      >
        {data}
      </Text>
      <Text
        style={{
          fontSize: Mq.sm ? "14px" : "20px",
          marginTop: "20px",
          color: "#cde0fc",
        }}
      >
        Unfortunately, this page doesn't exist.
      </Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
        style={{
          padding: "5px 15px",
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
            fontSize: Mq.sm ? "14px" : "18px",

            fontWeight: "700",
            letterSpacing: "0.03rem",
            color: isDark ? "black" : "white",
          }}
        >
          lets go back 🚀
        </Text>
      </Button>
    </Card>
  );
}
export default Error;
