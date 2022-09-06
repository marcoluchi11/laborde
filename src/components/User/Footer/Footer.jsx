import styled from "styled-components";
import Cafecito from "./Cafecito";
import Copyright from "./Copyright";
import Social from "./Social";

const Foot = styled.footer`
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid #000;
  div {
    width: 100%;
    display: flex;
  }
`;
const Footer = () => {
  return (
    <Foot>
      <div>
        <Social />
        <Cafecito />
      </div>
      <Copyright />
    </Foot>
  );
};

export default Footer;
