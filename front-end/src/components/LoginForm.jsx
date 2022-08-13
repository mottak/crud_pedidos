import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/userApiService';

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    const result = await api.login(email, password);
    if (result.data.token) {
      localStorage.setItem('token', result.data.token);
      if (result.data.role === 'client')
        navigate('./ordersclient', { replace: true });
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
    <div>
      <h4>Titulo</h4>
      <form>
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

        <button
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
