import {
  getDocs,
  collection,
  updateDoc,
  increment,
  doc,
} from "firebase/firestore";
import Spinner from "./../Spinner";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import Error from "./../Error";
import { db } from "../../fbConfig";
import Success from "../Success";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2e2e2e;
  margin: 1rem;
  padding: 0.5rem;
  color: #fff;
  input {
    margin: 0.5rem 0;
  }
  button {
    cursor: pointer;
    outline: 0;
    border: 0;
    background-color: #6c757d;
    color: #fff;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
  }
`;
const UpdatePrice = () => {
  const { error, success, setSuccess, setError, loading, setLoading } =
    useContext(LabordeContext);
  const [percent, setPercent] = useState("");
  const updatePrecio = async (porcentaje) => {
    console.log(porcentaje);
    console.log(porcentaje.includes(""));
    if (porcentaje < 0 || porcentaje === "") {
      setError({ state: true, message: "Completa todos los campos" });
      return;
    }
    setLoading(true);
    setError({ state: false, message: "" });
    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.forEach(async (document) => {
      const docRef = doc(db, "books", `${document.id}`);
      const newFields = {
        price: increment(document.data().price * (porcentaje / 100)),
      };
      await updateDoc(docRef, newFields);
    });
    setLoading(false);
    setSuccess({ state: true, message: "Se actualizo correctamente" });
    setPercent("");
    setTimeout(() => {
      setSuccess({ state: false, message: "" });
    }, 3000);
  };
  const handleChange = (e) => setPercent(e.target.value);
  return (
    <Container>
      <label>Indica % a actualizar</label>
      <input
        type="number"
        name="update"
        id="update"
        onChange={handleChange}
        value={percent}
      />
      {loading && <Spinner />}
      {error.state && <Error message={error.message} />}
      <button onClick={() => updatePrecio(percent)}>Actualizar </button>
      {success.state && <Success message={success.message} />}
    </Container>
  );
};

export default UpdatePrice;
