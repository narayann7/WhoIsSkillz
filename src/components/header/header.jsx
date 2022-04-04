import "./header.css";
import Blur1 from "../svgs/blur1";

var lorum =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequuntur sunt debitis saepe recusandae quo impedit, quibusdam, natus fugit velit ut totam dolorem suscipit? Nihil in molestias earum porro sunt?";
const Header = () => {
  return (
    <section class="HeaderSection">
      <div class="blur_bg">
        <div class="blur1">
          <Blur1 />
        </div>
      </div>
    </section>
  );
};

export default Header;
