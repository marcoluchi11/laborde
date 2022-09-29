import { nanoid } from "nanoid";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Success from "./../Success";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import Spinner from "../Spinner";
import InputEdit from "./InputEdit";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 15px;

  border: 0.8px solid #2e2e2e;
  h1 {
    border-top: 1px solid #2e2e2e;
    text-align: center;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 720px) {
    p {
      display: none;
    }
  }
  h3 {
    width: 10rem;
  }
  p {
    margin: 1rem;
    width: 10rem;
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
const EditBook = () => {
  const { getBooks, booklist, loading, success, setSuccess } =
    useContext(LabordeContext);
  const [edit, setEdit] = useState(false);
  const [editElem, setEditElem] = useState({});
  useEffect(() => {
    if (booklist.length !== 0) return;
    getBooks();
    //eslint-disable-next-line
  }, []);
  const handleEdit = (elem) => {
    setEditElem(elem);
    setEdit(true);
  };
  return (
    <Container>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          {booklist.map((elem) => (
            <Item key={nanoid()}>
              <h3>{elem.title}</h3>
              <p>{elem.isbn}</p>
              <p>{elem.published}</p>
              <p>${elem.price}</p>

              <button onClick={() => handleEdit(elem)}>Modificar</button>
            </Item>
          ))}
          <h1>Modificar</h1>

          {success.state && <Success message="Actualizado correctamente" />}
          {edit && (
            <InputEdit
              elem={editElem}
              setEdit={setEdit}
              setSuccess={setSuccess}
              success={success}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default EditBook;
