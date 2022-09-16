import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import { db } from "../../fbConfig";
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
const Home = () => {
  const { user } = useContext(LabordeContext);
  const createBook = async () => {
    //FUNCION PARA ADMIN
    try {
      const docData = {
        title: "Del querer al hacer",
        author: "Jack Luchi",
        year: 2019,
      };
      for (let i = 1; i < 32; i++) {
        await setDoc(doc(db, "books", `${docData.title}`), docData);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <Container>{user ? <Options /> : <Login />}</Container>;
};

export default Home;
