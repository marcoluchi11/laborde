import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import { storage, db } from "../../fbConfig";

import Error from "../Error";
import Success from "../Success";

const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  label {
    margin: 1rem 0;
  }
  input[type="text"],
  input[type="number"],
  textarea {
    outline: 0;
    border: 1px solid #090909;
    border-radius: 5px;
  }
  input[type="submit"] {
    cursor: pointer;
    margin: 3rem 0;
    padding: 1rem;
    outline: 0;
    border: 0;
    border-radius: 5px;
    background-color: #e6e6e6;
  }
`;

const AddBook = () => {
  // const mountainImagesRef = ref(storage, "images/mountains.jpg");
  const { setError, error, success, setSuccess } = useContext(LabordeContext);

  const [imageUpload, setImageUpload] = useState(null);
  const [subida, setSubida] = useState(false);
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    isbn: "",
    image: "",
    author: "",
  });
  useEffect(() => {
    if (imageUpload) {
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      getDownloadURL(imageRef).then((link) => {
        setBook({ ...book, image: link });
      });
    }
    //eslint-disable-next-line
  }, [subida]);
  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      [
        book.name,
        book.desc,
        book.price,
        book.isbn,
        book.published,
        book.category,
      ].includes("")
    ) {
      setError({ state: true, message: "Completa todos los campos" });
      return;
    }
    try {
      setError({ state: false, message: "" });
      const bookData = book;
      await setDoc(doc(db, "books", `${book.title}`), bookData);
      setBook({
        title: "",
        category: "",
        desc: "",
        price: "",
        image: "",
        isbn: "",
        author: "",
        published: "",
      });
    } catch (err) {
      console.log("error bicho");
      setError({ message: err.message, state: true });
    }
  };
  const handleUpload = (e) => {
    e.preventDefault();

    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      setSuccess({ ...success, state: true });
      setSubida(!subida);
      setTimeout(() => {
        setSuccess({ ...success, state: false });
      }, 3000);
    });
  };
  return (
    <Formulary onSubmit={handleSubmit}>
      <label htmlFor="name">Titulo</label>
      <input
        type="text"
        name="title"
        id="title"
        value={book.title}
        onChange={handleChange}
      />
      <label htmlFor="category">Categoría</label>
      <select onChange={handleChange} name="category" id="category">
        <option value={""}>--Selecciona Categoria</option>
        <option value="bio">Biología</option>
        <option value="psi"> Psicología</option>
        <option value="sports">Deportes</option>
        <option value="right">Derecho</option>
        <option value="scifi">Ciencia Ficción</option>
      </select>
      <label htmlFor="author">Autor</label>
      <input
        type="text"
        name="author"
        id="author"
        value={book.author}
        onChange={handleChange}
      />
      <label htmlFor="desc">Descripcion</label>
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        value={book.desc}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="price">Precio</label>
      <input
        type="number"
        name="price"
        id="price"
        value={book.price}
        onChange={(e) => setBook({ ...book, price: Number(e.target.value) })}
      />
      <label htmlFor="isbn">ISBN</label>
      <input
        type="text"
        name="isbn"
        id="isbn"
        value={book.isbn}
        onChange={(e) => setBook({ ...book, isbn: e.target.value })}
      />
      <label htmlFor="published">Año publicado</label>
      <input
        type="number"
        name="published"
        id="published"
        value={book.published}
        onChange={(e) => setBook({ ...book, published: e.target.value })}
      />
      <label htmlFor="image">Imagen</label>
      <input
        type="file"
        name="image"
        id="image"
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <button onClick={handleUpload}>Upload</button>
      {success.state && <Success message="Imagen subida!" />}
      {error.state && <Error message={error.message} />}
      <input type="submit" value="Agregar" />
    </Formulary>
  );
};

export default AddBook;
