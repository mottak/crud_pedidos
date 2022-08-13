import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    const result = await api.createNewUser(name, email, password, role);
    if (result.data.token) {
      localStorage.setItem('token', result.data.token);
      if (role === 'client') navigate('./ordersclient', { replace: true });
      if (role === 'seller') navigate('./ordersseller', { replace: true });
    }
    setErrorMsg(result.data.message);
  };

  useEffect(() => {
    const fiedlsFull =
      name.length > 0 && email.length > 0 && password.length > 0;
    if (fiedlsFull) {
      setDisable(false);
    }
  }, [name, email, password]);

  return (
    <div>
      <h4>Titulo: {role}</h4>
      <form>
        <label htmlFor="name">
          senha:
          <input
            id="name"
            value={name}
            type="text"
            name="name"
            placeholder="Informe sua senha"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          e-mail:
          <input
            id="email"
            value={email}
            name="email"
            placeholder="Informe seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          senha:
          <input
            id="password"
            value={password}
            type="text"
            name="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="role">
          Criar usuário como:
          <input
            value="client"
            type="radio"
            name="role"
            checked={setRole('client')}
          />
          Cliente
          <input
            value="seller"
            type="radio"
            name="role"
            checked={setRole('seller')}
          />
          Vendedor
        </label>

        <button
          type="button"
          disabled={disable}
          onClick={() => {
            handleClick();
          }}
        >
          Cadastrar
        </button>
      </form>

      {errorMsg !== '' ? <span>{errorMsg}</span> : null}
    </div>
  );
}

export default LoginForm;
