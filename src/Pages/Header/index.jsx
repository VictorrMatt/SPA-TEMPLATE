import { Link } from "react-router-dom";
import { HeadBar } from "./styles";

function Header() {
  return (
    <HeadBar>
      <div>LOGO</div>

      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/history">HISTORY</Link>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </HeadBar>
  );
}

export default Header;
