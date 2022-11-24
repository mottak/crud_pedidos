import React, { useState, useMemo } from 'react';
import Context from './UserContext';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const contextValue = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      userName,
      setUserName,
    }),
    [setUserName, userName],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
