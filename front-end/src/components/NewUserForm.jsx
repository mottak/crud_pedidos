import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/userApiService';

function NewUserForm() {
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
      if (role === 'client') navigate('../ordersclient', { replace: true });
      if (role === 'seller') navigate('../ordersseller', { replace: true });
    }
    setErrorMsg(result.data.message);
  };

  useEffect(() => {
    const fiedlsFull =
      name.length > 0 && email.length > 0 && password.length > 0;
    if (fiedlsFull) {
      setDisable(false);
    }
  }, [name, email, password, role]);

  return (
    <div>
      <h4>Titulo: {role}</h4>
      <form>
        <label htmlFor="name">
          Nome:
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
            checked={role === 'client'}
            onChange={(e) => setRole(e.target.value)}
          />
          Cliente
          <input
            value="seller"
            type="radio"
            name="role"
            checked={role === 'seller'}
            onChange={(e) => setRole(e.target.value)}
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

        {errorMsg !== '' ? <span>{errorMsg}</span> : null}
      </form>
    </div>
  );
}

export default NewUserForm;
