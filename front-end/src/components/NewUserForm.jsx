import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/userApiService';
import UserContext from '../context/userContext/UserContext';
import './newUserForm.css';

function NewUserForm() {
  const [disable, setDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [role, setRole] = useState('client');

  const [errorMsg, setErrorMsg] = useState('');

  const { setUserName } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = async () => {
    const result = await api.createNewUser(name, email, password, role);
    if (result.data.accessToken) {
      localStorage.setItem('accessToken', result.data.accessToken);
      setUserName(result.data.name);
      if (role === 'client') navigate('../productsclient', { replace: true });
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
    <div className="form-container">
      <h4>Quero criar uma conta</h4>
      <form className="input-group mb-3">
        <label htmlFor="name">
          Nome:
          <input
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            id="password"
            value={password}
            type="text"
            name="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="input-group radio-container">
          <label htmlFor="role">
            Criar usuário como:
            <input
              className="form-check-input mt-0"
              value="client"
              type="radio"
              name="role"
              checked={role === 'client'}
              onChange={(e) => setRole(e.target.value)}
            />
            Cliente
            <input
              className="form-check-input mt-0"
              value="seller"
              type="radio"
              name="role"
              checked={role === 'seller'}
              onChange={(e) => setRole(e.target.value)}
            />
            Vendedor
          </label>
        </div>

        <button
          className="btn btn-secondary"
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
