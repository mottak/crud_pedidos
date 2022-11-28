import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const userStorage = localStorage.getItem('user');
  const user = JSON.parse(userStorage);

  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.removeItem('user');
    navigate('../', { replace: true });
  };
  return (
    <div>
      <nav className="navbar blur border-radius-xl top-0 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
        <div className="container-fluid align-content-between ps-2 pe-0">
          <h2 className="modal-title">Mercadão</h2>
          {user ? (
            <div className="align-content-end">
              <p>{`Bem vindo ${user.userName}`}</p>
              <button
                className="navbar-toggler shadow-none ms-2"
                type="button"
                onClick={() => {
                  handleClick();
                }}
              >
                Sair
              </button>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Header;
