import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import Auth from "../../fbConfig";

const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 1rem;

  border: 1px solid #e6e6e6;
  label {
    margin: 0.5rem 0;
    width: 100%;
  }
  input[type="submit"] {
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem;
    outline: 0;
    border: 0;
    background-color: #000;
    color: #fff;
    width: 100%;
  }
`;
const Login = () => {
  const { setUser } = useContext(LabordeContext);
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [setUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usuario = await signInWithEmailAndPassword(
        Auth,
        login.email,
        login.password
      );
      setUser(usuario);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formulary onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        value={login.email}
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        id="password"
        value={login.password}
      />
      <input type="submit" value="Ingresar" />
    </Formulary>
  );
};

export default Login;
