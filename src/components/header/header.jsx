import "./header.css";
import Blur1 from "../svgs/blur1";

var lorum =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequuntur sunt debitis saepe recusandae quo impedit, quibusdam, natus fugit velit ut totam dolorem suscipit? Nihil in molestias earum porro sunt?";
const Header = () => {
  return (
    <div class="HeaderMainDiv">
      <div class="blur_bg">
        <div class="blur1">
          <Blur1 />
        </div>
      </div>
      <div class="content">
        <h1>skillz</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          aliquam culpa enim? Expedita dolorum sint, voluptas adipisci nam
          temporibus id repellat! Officia minima doloribus ratione quod placeat
          expedita recusandae necessitatibus?
        </p>
      </div>
    </div>
  );
};

export default Header;
