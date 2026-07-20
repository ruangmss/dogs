import React from 'react';
import Input from '../../../components/Form/Input/Input';
import Button from '../../../components/Form/Button/Button';
import useForm from '../../../hooks/useForm';
import { USER_POST } from '../../../api/api';
import { UserContext } from '../../../context/UserContext';

const LoginRegistration = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);

  async function registrateUser(event) {
    event.preventDefault();

    const { url, options } = USER_POST(username.value, email.value, password.value);

    const response = await fetch(url, options);

    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="bg">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={registrateUser}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button label="Cadastrar-se" />
      </form>
    </section>
  );
};

export default LoginRegistration;
