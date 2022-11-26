import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ title }) {
  const userStorage = localStorage.getItem('user');
  const user = JSON.parse(userStorage);

  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.removeItem('user');
    navigate('../', { replace: true });
  };
  return (
    <div className="header-container">
      <h3>{title}</h3>
      <div className="header-container-secondary">
        <h6>{`Bem vindo ${user.userName}`}</h6>
        <button
          className="btn btn-default"
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          sair
        </button>
      </div>
    </div>
  );
}

export default Header;
