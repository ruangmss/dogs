import React from 'react';

const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
    message: 'Por favor, insira um e-mail válido.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }

    setValue(target.value);
  }

  function validate(value) {
    if (type === false) {
      return true;
    }

    if (value.length === 0) {
      setError('Por favor, preencha o campo.');
      return false;
    }

    // O [type] é porque não é possível acessar usando .type (porque type é uma string), então precisa ser acessado como colchetes, por exemplo: types['email'] na prática
    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), // Já faz a validação só de chamar
    onBlur: () => validate(value),
  };
};

export default useForm;
