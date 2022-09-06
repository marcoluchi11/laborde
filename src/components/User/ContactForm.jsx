import styled from "styled-components";
const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  label {
    margin: 0.5rem 0;
  }
  div {
    display: flex;
    align-items: center;
  }
  button {
    margin: 1rem 0;
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
    outline: 0;
    border: 0;
    border-radius: 25px;
    color: #000;
    background-color: #fff;
    img {
      margin: 0 0.4rem;
    }
  }
`;
const ContactForm = () => {
  return (
    <Formulary>
      <label htmlFor="nombre">Nombre</label>
      <input
        placeholder="Escriba su nombre..."
        type="text"
        name="nombre"
        id="nombre"
      />
      <label htmlFor="message">Mensaje</label>
      <textarea
        placeholder="Escriba su mensaje..."
        name="message"
        id="message"
        cols="30"
        rows="10"
      />
      <div>
        <button type="submit">
          <img
            src="https://icongr.am/fontawesome/paper-plane.svg?size=16&color=currentColor"
            alt="message"
          />
          Enviar
        </button>
      </div>
    </Formulary>
  );
};

export default ContactForm;
