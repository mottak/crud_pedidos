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
    if (result.data.accessToken) {
      localStorage.setItem('user', {
        accessToken: result.data.accessToken,
        role: result.data.role,
        userName: result.data.name,
      });
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
    <div className="page-header min-vh-100">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg py- pe-1">
                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                  Criar seu cadastro
                </h4>
              </div>
            </div>
            <div className="card-body">
              <form className="text-start">
                <div className="input-group input-group-outline my-3">
                  <label htmlFor="name">
                    Nome Completo:
                    <input
                      className="form-control"
                      id="name"
                      value={name}
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="input-group input-group-outline my-3">
                  <label htmlFor="email">
                    E-mail:
                    <input
                      className="form-control"
                      id="email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="input-group input-group-outline my-3">
                  <label htmlFor="password">
                    senha:
                    <input
                      className="form-control"
                      id="password"
                      value={password}
                      type="text"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                </div>
                <div className="input-group radio-container my-1">
                  <label htmlFor="role">
                    Criar usuário como:
                    <div className="input-group radio-container justify-content-between my-3">
                      <input
                        className="form-check-input mx-4 mt-0"
                        value="client"
                        type="radio"
                        name="role"
                        checked={role === 'client'}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      Cliente
                      <input
                        className="form-check-input mx-4 mt-0"
                        value="seller"
                        type="radio"
                        name="role"
                        checked={role === 'seller'}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      Vendedor
                    </div>
                  </label>
                </div>
                {/* <h6>Que tal já salvar seu endereço de entrega?</h6>
  <button className="btn btn-secondary" type="button">
    Cadastrar endereço
  </button>
  <button className="btn btn-secondary" type="button">
    Mais tarde
  </button>
*/}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
