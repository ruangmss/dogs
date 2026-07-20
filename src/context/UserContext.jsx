import React from 'react';
import { LOGIN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');

      if (!token) {
        return;
      }

      try {
        setError(null);
        setLoading(true);

        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Token inválido.');
        }

        await getUser(token); // getUser é assíncrona, por isso o await
        navigate('/conta');
      } catch (error) {
        userLogout(); // Faz com que os estados sejam resetados em casos de erro
      } finally {
        setLoading(false);
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(user, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = LOGIN_POST(user, password);
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(`Ocorreu um erro no login. Por favor, verifique suas credenciais e tente novamente.`); // Fica disponível no catch
      }

      localStorage.setItem('token', json.token);
      await getUser(json.token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};
