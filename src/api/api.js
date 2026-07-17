const API_URL = 'https://dogsapi.origamid.dev/json';

export function LOGIN_POST(user, password) {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // O endpoint espera ua string JSON
        user: user,
        password: password,
      }),
    },
  };
}

export function USER_GET(token) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
