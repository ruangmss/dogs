import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import LoginRegistration from './LoginRegistration/LoginRegistration';
import LoginForgotPassword from './LoginForgotPassword/LoginForgotPassword';
import LoginChangePassword from './LoginChangePassword/LoginChangePassword';
import { UserContext } from '../../context/UserContext';
import './Login.css';
import loginImage from '../../assets/login.jpg';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className="login-layout">
      <img src={loginImage} alt="Cachorro" />

      <div className="login-forms">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="cadastro" element={<LoginRegistration />} />
          <Route path="esqueceu-senha" element={<LoginForgotPassword />} />
          <Route path="alterar-senha" element={<LoginChangePassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
