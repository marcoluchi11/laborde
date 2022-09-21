import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";

import Login from "./Login";
import Options from "./Options";

const Container = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
    color: #000;
  }
`;
const HomeAdmin = () => {
  const { user } = useContext(LabordeContext);

  return <Container>{user ? <Options /> : <Login />}</Container>;
};

export default HomeAdmin;
