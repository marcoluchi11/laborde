import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";
import Menu from "./Menu";
const Nav = styled.nav`
  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
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
