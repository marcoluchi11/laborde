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
      <img src={logo} alt="imagenlogo" />
      <Menu />
    </Nav>
  );
};

export default Navbar;
