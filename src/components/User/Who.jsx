import styled from "styled-components";
import imagen from "./images/laborde-img.webp";

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem 5rem;
  section {
    height: 19rem;
    h1 {
      text-align: center;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
    }
    p {
      margin: 3rem 0;
      padding: 0;
      text-align: justify;
      font-size: 1.1rem;
    }
  }
  img {
    margin: 1rem;
    width: 30rem;
    height: 19rem;
    border-radius: 100%;
  }
`;
const Who = () => {
  return (
    <Container>
      <section>
        <h1>Quienes Somos - Laborde Editor</h1>
        <p>
          Somos un grupo de personas que nos dedicamos al libro desde hace mas
          de 30 años. Hace mas de 15 que editamos libros de autores rosarinos en
          los temas de: EDUCACIÓN, PSICOLOGÍA, FILOSOFÍA, NARRATIVA, SOCIOLOGÍA,
          POLÍTICA. Hoy tenemos en producción nuestra propia revista anual y un
          extenso catálogo de libros de autores expertos en su materia. En este
          sitio podrá encontrar información sobre las últimas publicaciones de
          Laborde Editor, así como también podrá realizar su compra de forma
          online. Si necesita consultar precio o disponibilidad no dude en
          contactarse con nosotros.
        </p>
      </section>
      <div>
        <img src={imagen} alt="" />
      </div>
    </Container>
  );
};

export default Who;
