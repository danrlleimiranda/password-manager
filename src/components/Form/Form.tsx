import React, { useState } from 'react';
// import { S } from 'vitest/dist/types-e3c9754d';
import Swal from 'sweetalert2';
import './Form.css';

type ButtonPropsType = {
  showForm: (state:boolean) => void;
  setFormValue: (state:RegisterType) => void;
  setRegisterValue: (state:any) => void;
  formValue: RegisterType;
  registerValue: RegisterType[];
};

export type RegisterType = {
  serviço: string,
  login: string,
  senha: string,
  url: string
};

export function Form({ showForm, setFormValue,
  formValue, setRegisterValue, registerValue }: ButtonPropsType) {
  function handleCancelButton(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    showForm(false);
  }

  const [inputType, setInputType] = useState('password');

  const validClass = 'valid-password-check';
  const invalidClass = 'invalid-password-check';
  const regexLetterAndNumber = /^(?=.*[0-9])(?=.*[a-zA-Z])/;
  const regexSpecial = /^(?=.*[@!#$%^&*()/\\])/;
  const initialState = { serviço: '',
    login: '',
    senha: '',
    url: '' };

  function handleChange({ target }:React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [target.id]: target.value,
    });
  }
  function handleRegister(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setRegisterValue([...registerValue, { ...formValue }]);
    setFormValue(initialState);
  }

  const handleShowPassword = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  function isValid() {
    const regex = /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,16}$/;
    const regexSpecialResult = regex.test(formValue.senha);
    let boolean = false;
    if (formValue.serviço.trim() === ''
    || formValue.login.trim() === ''
    || formValue.url.trim() === ''
    || regexSpecialResult === false) {
      boolean = true;
    }

    return boolean;
  }

  const registerConcluded = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (

    <form>
      <label htmlFor="serviço">
        Nome do Serviço
        {' '}
        <br />
        <input
          type="text"
          id="serviço"
          name="serviço"
          value={ formValue.serviço }
          placeholder="Digite aqui a plataforma"
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <label htmlFor="login">
        Login
        {' '}
        <br />
        <input
          type="text"
          id="login"
          value={ formValue.login }
          placeholder="Digite o seu login de acesso"
          onChange={ (event) => handleChange(event) }
        />
      </label>

      <label htmlFor="senha">
        Senha
        {' '}
        <br />
        <input
          type={ inputType }
          id="senha"
          value={ formValue.senha }
          placeholder="Digite o sua senha de acesso"
          onChange={ (event) => handleChange(event) }
        />
        {' '}
        <br />
        <button
          data-testid="show-hide-form-password"
          onClick={ (event) => handleShowPassword(event) }
        >
          Esconder/Mostrar senha

        </button>
        <p
          className={ formValue.senha.length < 8
            ? invalidClass : validClass }
        >
          Possuir 8 ou mais caracteres

        </p>
        <p
          className={ formValue.senha.length < 16
            ? validClass : invalidClass }
        >
          Possuir até 16 caracteres

        </p>
        <p
          className={ regexLetterAndNumber.test(formValue.senha) === false
            ? invalidClass : validClass }
        >
          Possuir letras e números

        </p>
        <p
          className={ regexSpecial.test(formValue.senha) === false
            ? invalidClass : validClass }
        >
          Possuir algum caractere especial

        </p>
      </label>

      <label htmlFor="url">
        url
        {' '}
        <br />
        <input
          type="text"
          id="url"
          value={ formValue.url }
          placeholder="Digite o endereço da plataforma"
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <div className="formButtons">
        <button
          disabled={ isValid() }
          type="submit"
          onClick={ (event) => {
            handleRegister(event);
            showForm(false);
            registerConcluded();
          } }
        >
          Cadastrar

        </button>
        <button
          onClick={ (event) => handleCancelButton(event) }
        >
          Cancelar

        </button>
      </div>

    </form>

  );
}
