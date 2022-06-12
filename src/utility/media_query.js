import { useMediaQuery } from "@mui/material";

class Mq {

  static sm = useMediaQuery("(max-width:330px)");
  static md = useMediaQuery("(max-width:900px)");
  static lg = useMediaQuery("(min-width:900px)");
}
