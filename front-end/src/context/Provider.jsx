import React, { useState, useMemo } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const contextValue = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
    }),
    [email, password],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
