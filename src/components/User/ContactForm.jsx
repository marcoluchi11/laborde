import styled from "styled-components";
const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  margin: 1rem;

  label {
    margin: 0.5rem 0;
    padding: 0.5rem 0;
  }
  textarea {
    margin-bottom: 1rem;
  }
  input[type="submit"] {
    cursor: pointer;
  }
`;
const ContactForm = () => {
  return (
    <Formulary>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" />
      <label htmlFor="message">Mensaje</label>
      <textarea name="message" id="message" cols="30" rows="10" />
      <input type="submit" value="Enviar" />
    </Formulary>
  );
};

export default ContactForm;
