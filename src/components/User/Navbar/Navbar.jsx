import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";
import DesktopNav from "./DesktopNav";
const Nav = styled.nav`
  /* position: sticky; */
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
      <DesktopNav />
    </Nav>
  );
};

export default Navbar;
