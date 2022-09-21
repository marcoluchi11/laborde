import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  img {
    margin: 1rem;
    cursor: pointer;
  }
`;

const Social = () => {
  return (
    <Container>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/laborde.libreriayeditorial/"
      >
        <img
          src="https://icongr.am/fontawesome/instagram.svg?size=25&color=currentColor"
          alt="instagram"
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/labordelibreriayeditorial"
      >
        <img
          src="https://icongr.am/fontawesome/facebook-f.svg?size=25&color=currentColor"
          alt="facebook"
        />
      </a>
      <img
        src="https://icongr.am/fontawesome/whatsapp.svg?size=25&color=currentColor"
        alt="whatsapp"
      />
    </Container>
  );
};

export default Social;
