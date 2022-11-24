import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/userApiService';
import UserContext from '../context/userContext/UserContext';
import './loginForm.css';

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { setUserName } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = async () => {
    const result = await api.login(email, password);
    if (result.data.accessToken) {
      localStorage.setItem('accessToken', result.data.accessToken);
      setUserName(result.data.name);
      if (result.data.role === 'client')
        navigate('./productsclient', { replace: true });

      if (result.data.role === 'seller')
        navigate('./ordersseller', { replace: true });
    }
    setErrorMsg(result.data.message);
  };

  useEffect(() => {
    const fiedlsFull = email.length > 0 && password.length > 0;
    if (fiedlsFull) {
      setDisable(false);
    }
  }, [email, password, setEmail, setPassword]);

  return (
    <div className="form-login-container">
      <form className="input-group mb-3">
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

        <button
          className="btn btn-secondary"
          type="button"
          disabled={disable}
          onClick={() => {
            handleClick();
          }}
        >
          Continuar
        </button>
      </form>

      {errorMsg !== '' ? <span>{errorMsg}</span> : null}
    </div>
  );
}

export default LoginForm;
