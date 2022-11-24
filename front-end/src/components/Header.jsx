import React, { useContext } from 'react';
import UserContext from '../context/userContext/UserContext';
import './Header.css';

function Header({ title }) {
  const { userName } = useContext(UserContext);
  return (
    <div>
      <h3>{title}</h3>
      <h6>{`Bem vindo ${userName}`}</h6>
    </div>
  );
}

export default Header;
