import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/userApiService';

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    const result = await api.login(email, password);
    if (result.data.accessToken) {
      localStorage.setItem(
        'user',
        JSON.stringify({
          accessToken: result.data.accessToken,
          role: result.data.role,
          userName: result.data.name,
        }),
      );
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
    <div>
      <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
          <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
            Login
          </h4>
          <div className="row mt-3" />
        </div>
      </div>
      <div className="card-body">
        <form className="text-start">
          <div className="input-group input-group-outline my-3">
            <input
              className="form-control"
              id="email"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group input-group-outline mb-3">
            <input
              className="form-control"
              id="password"
              value={password}
              type="text"
              name="password"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn bg-gradient-primary w-100 my-4 mb-2"
              disabled={disable}
              onClick={() => {
                handleClick();
              }}
            >
              Continuar
            </button>
          </div>
          <p className="mt-4 text-sm text-center">
            Ainda não tem cadastro?
            <Link to="/register">
              <button
                type="button"
                className="btn bg-gradient-primary w-100 my-4 mb-2"
              >
                Criar Cadastro
              </button>
            </Link>
          </p>
        </form>
      </div>

      {errorMsg !== '' ? (
        <span className="mt-4 text-sm text-center">{errorMsg}</span>
      ) : null}
    </div>
  );
}

export default LoginForm;
