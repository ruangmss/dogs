import React from 'react';
import Input from '../../../components/Form/Input/Input';
import Button from '../../../components/Form/Button/Button';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_LOST } from '../../../api/api';
import Error from '../../../components/Form/Error/Error';
import './LoginForgotPassword.css';
import useHead from '../../../hooks/useHead';

const LoginForgotPassword = () => {
  useHead('Esqueceu | Dogs', 'Solicite a recuperação da sua senha para voltar a acessar sua conta no Dogs.');

  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function sendForm(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('esqueceu-senha', 'alterar-senha'),
      });

      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Esqueceu a Senha?</h1>

      {data ? (
        <p className="password-message">E-mail enviado!</p>
      ) : (
        <>
          <form onSubmit={sendForm}>
            <Input label="E-mail / Usuário" type="text" name="login" {...login} />
            <Button label={loading ? 'Enviando...' : 'Enviar'} disabled={loading} />
          </form>

          <Error error={error} />
        </>
      )}
    </section>
  );
};

export default LoginForgotPassword;
