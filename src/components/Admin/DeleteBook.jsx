import { deleteDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import { db } from "../../fbConfig";
import Spinner from "../Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 15px;

  border: 1px solid #2e2e2e;
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
const DeleteBook = () => {
  const { booklist, setBookList, getBooks, loading } =
    useContext(LabordeContext);
  const handleDelete = async (title) => {
    await deleteDoc(doc(db, "books", `${title}`));
    const deleteList = booklist.filter((elem) => title !== elem.title);
    setBookList(deleteList);
  };
  useEffect(() => {
    if (booklist.length !== 0) return;
    getBooks();
    //eslint-disable-next-line
  }, []);
  return (
    <Container>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        booklist.map((elem) => (
          <Item>
            <h3>{elem.title}</h3>
            <p>{elem.isbn}</p>
            <p>{elem.published}</p>
            <p>${elem.price}</p>
            <button onClick={() => handleDelete(elem.title)}>Eliminar</button>
          </Item>
        ))
      )}
    </Container>
  );
};

export default DeleteBook;
