import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import { storage, db } from "../../fbConfig";

import Error from "../Error";

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
  const { setError, error } = useContext(LabordeContext);

  const [imageUpload, setImageUpload] = useState(null);
  const [subida, setSubida] = useState(false);
  const [book, setBook] = useState({
    name: "",
    desc: "",
    price: "",
    image: "",
  });
  useEffect(() => {
    if (imageUpload) {
      getDownloadURL(ref(storage, `images/${imageUpload.name}`)).then(
        (link) => {
          setBook({ ...book, image: link });
        }
      );
    }
    //eslint-disable-next-line
  }, [subida]);
  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([book.name, book.desc, book.price].includes("")) {
      setError({ state: true, message: "Completa todos los campos" });
      return;
    }
    try {
      setError({ state: false, message: "" });
      const bookData = book;
      await setDoc(doc(db, "books", `${book.name}`), bookData);
      setBook({ name: "", desc: "", price: "", image: "" });
    } catch (err) {
      console.log("error bicho");
      setError({ message: err.message, state: true });
    }
  };
  const handleUpload = (e) => {
    e.preventDefault();

    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, book.image).then(() => {
      console.log("image uploaded");
      setSubida(!subida);
    });
  };
  return (
    <Formulary onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        id="name"
        value={book.name}
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

      {error.state && <Error message={error.message} />}
      <input type="submit" value="Agregar" />
    </Formulary>
  );
};

export default AddBook;
