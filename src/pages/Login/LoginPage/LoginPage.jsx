import React from 'react';
import Input from '../../../components/Form/Input/Input';
import '../../../components/Form/Button/Button.css';
import Button from '../../../components/Form/Button/Button';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';
import './LoginPage.css';
import Error from '../../../components/Form/Error/Error';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const user = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function submitForm(event) {
    event.preventDefault();

    if (user.validate() && password.validate()) {
      await userLogin(user.value, password.value);
    }
  }

  return (
    <section className="login-bg">
      <h1 className="title">Login</h1>
      <form onSubmit={submitForm} className="login-form">
        <Input label="Usuário" type="text" name="user" {...user} />
        {/* Desestruturação do objeto para ser possível utilizar seus atributos e métodos no Input */}
        <Input label="Senha" type="password" name="password" {...password} />
        <Button label={loading ? 'Carregando...' : 'Login'} type="submit" disabled={loading} />
        <Error error={error} />
      </form>

      <Link to="/login/esqueceu-senha" className="login-forgot-password">
        Esqueci Minha Senha
      </Link>

      <div className="login-registration">
        <h2 className="login-subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/cadastro" className="button">
          Cadastrar-se
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
