import React from 'react';

import './Header.css';

function Header({ title }) {
  const userStorage = localStorage.getItem('user');
  const user = JSON.parse(userStorage);
  return (
    <div>
      <h3>{title}</h3>
      <h6>{`Bem vindo ${user.userName}`}</h6>
    </div>
  );
}

export default Header;
