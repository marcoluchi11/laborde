import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";
import Menu from "./Menu";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="imagenlogo" />
      </Link>

      <Menu />
    </Nav>
  );
};

export default Navbar;
