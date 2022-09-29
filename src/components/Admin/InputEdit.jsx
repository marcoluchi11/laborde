import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../../fbConfig";
import Success from "../Success";

const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input,
  select {
    border: 0;
    outline: 0;
    margin: 0.3rem;
    width: 250px;
  }
  input[type="submit"] {
    background-color: #98989e;
    color: #000;
    border-radius: 7px;
    cursor: pointer;
    padding: 0.7rem 0;
    margin-top: 3rem;
  }
`;
const InputEdit = ({ elem, setEdit, setSuccess, success }) => {
  const [editBook, setEditBook] = useState({
    title: elem.title,
    author: elem.author,
    desc: elem.desc,
    published: elem.published,
    price: elem.price,
    category: elem.category,
    isbn: elem.isbn,
  });
  const handleChange = (e) =>
    setEditBook({ ...editBook, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookRef = doc(db, "books", `${elem.title}`);
      const newFields = { ...editBook };
      await updateDoc(bookRef, newFields);
      setEdit(false);
      setSuccess({ state: true, message: "Actualizado correctamente" });
      setTimeout(() => {
        setSuccess({ state: false, message: "" });
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formulary onSubmit={handleSubmit}>
      <label htmlFor="category">Categoría</label>
      <select
        name="category"
        id="category"
        value={editBook.category}
        onChange={handleChange}
      >
        <option value={""}>--Selecciona Categoria</option>
        <option value="bio">Biología</option>
        <option value="psi"> Psicología</option>
        <option value="sports">Deportes</option>
        <option value="right">Derecho</option>
        <option value="scifi">Ciencia Ficción</option>
        <option value="self">Auto-ayuda</option>
      </select>
      <label htmlFor="author">Autor</label>
      <input
        type="text"
        name="author"
        id="author"
        value={editBook.author}
        onChange={handleChange}
      />
      <label htmlFor="desc">Descripcion</label>
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        value={editBook.desc}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="price">Precio</label>
      <input
        type="number"
        name="price"
        id="price"
        value={editBook.price}
        onChange={(e) =>
          setEditBook({ ...editBook, price: Number(e.target.value) })
        }
      />
      <label htmlFor="isbn">ISBN</label>
      <input
        onChange={handleChange}
        type="text"
        name="isbn"
        id="isbn"
        value={editBook.isbn}
      />
      <label htmlFor="published">Año publicado</label>
      <input
        onChange={handleChange}
        type="number"
        name="published"
        id="published"
        value={editBook.published}
      />
      <input type="submit" value="Actualizar" />
    </Formulary>
  );
};

export default InputEdit;
