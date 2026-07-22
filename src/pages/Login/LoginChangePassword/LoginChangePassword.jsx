import React from 'react';
import Input from '../../../components/Form/Input/Input';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Form/Button/Button';
import { PASSWORD_RESET } from '../../../api/api';
import useFetch from '../../../hooks/useFetch';
import Error from '../../../components/Form/Error/Error';
import { useNavigate } from 'react-router-dom';
import useHead from '../../../hooks/useHead';

const LoginChangePassword = () => {
  useHead('Alterar | Dogs', 'Defina uma nova senha para proteger e recuperar o acesso à sua conta.');

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm('password');

  const { error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  async function sendForm(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({ login, key, password: password.value });
      const { response } = await request(url, options);

      if (response.ok) {
        navigate('/login');
      }
    }
  }

  return (
    <section className="bg">
      <h1 className="title">Alterar Senha</h1>

      <form onSubmit={sendForm}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        <Button label={loading ? 'Alterando...' : 'Alterar'} disabled={loading} />
      </form>

      <Error error={error} />
    </section>
  );
};

export default LoginChangePassword;
