import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/userApiService';
import './newUserForm.css';

function AddressForm() {
  const [disable, setDisable] = useState(true);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  // const [defaultAddress, setDefaultAddress] = useState(true);

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    const result = await api.createNewUserWithAddress(user, {
      street,
      number,
      complement,
      neighborhood,
      city,
    });
    if (result.data.token) {
      localStorage.setItem('token', result.data.token);
      if (role === 'client') navigate('../ordersclient', { replace: true });
      if (role === 'seller') navigate('../ordersseller', { replace: true });
    }
    setErrorMsg(result.data.message);
  };

  useEffect(() => {
    const fiedlsFull =
      street.length > 0 &&
      number.length > 0 &&
      neighborhood.length > 0 &&
      city.length > 0;
    if (fiedlsFull) {
      setDisable(false);
    }
  }, [street, number, complement, neighborhood, city]);

  return (
    <div className="form-container">
      <h4>Adicionar endereço</h4>
      <form className="input-group mb-3">
        <label htmlFor="street">
          Rua:
          <input
            className="form-control"
            id="street"
            value={street}
            type="text"
            name="street"
            placeholder="Informe sua rua"
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            className="form-control"
            id="email"
            value={number}
            name="number"
            placeholder="Informe número do endereço"
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label htmlFor="complement">
          Complemento:
          <input
            className="form-control"
            id="complement"
            value={complement}
            type="text"
            name="complement"
            placeholder="Informe o complemento, se existir"
            onChange={(e) => setComplement(e.target.value)}
          />
        </label>
        <label htmlFor="neighborhood">
          Bairro:
          <input
            className="form-control"
            id="complement"
            value={neighborhood}
            type="text"
            name="neighborhood"
            placeholder="Informe o bairro"
            onChange={(e) => setNeighborhood(e.target.value)}
          />
        </label>

        <label htmlFor="city">
          Cidade:
          <input
            className="form-control"
            id="city"
            value={city}
            type="text"
            name="city"
            placeholder="Informe a cidade"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <button
          className="btn btn-secondary"
          type="button"
          disabled={disable}
          onClick={() => {
            handleClick();
          }}
        >
          Salvar endereço
        </button>

        {errorMsg !== '' ? <span>{errorMsg}</span> : null}
      </form>
    </div>
  );
}

export default AddressForm;
