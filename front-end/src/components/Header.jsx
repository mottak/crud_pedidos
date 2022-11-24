import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

function Header({ title }) {
  const userStorage = localStorage.getItem('user');
  const user = JSON.parse(userStorage);

  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.removeItem('user');
    navigate('../', { replace: true });
  };
  return (
    <div>
      <h3>{title}</h3>
      <h6>{`Bem vindo ${user.userName}`}</h6>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        sair
      </button>
    </div>
  );
}

export default Header;
