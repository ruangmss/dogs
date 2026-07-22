import React from 'react';
import Input from '../../../components/Form/Input/Input';
import Button from '../../../components/Form/Button/Button';
import useForm from '../../../hooks/useForm';
import { USER_POST } from '../../../api/api';
import { UserContext } from '../../../context/UserContext';
import useFetch from '../../../hooks/useFetch';
import Error from '../../../components/Form/Error/Error';
import useHead from '../../../hooks/useHead';

const LoginRegistration = () => {
  useHead('Cadastre-se | Dogs', 'Crie sua conta no Dogs e comece a compartilhar fotos com a comunidade.');

  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { error, loading, request } = useFetch();

  async function registrateUser(event) {
    event.preventDefault();

    const { url, options } = USER_POST(username.value, email.value, password.value);

    const { response } = await request(url, options);

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

        {loading ? <Button disabled={true} label="Cadastrando..." /> : <Button label="Cadastrar-se" />}

        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginRegistration;
