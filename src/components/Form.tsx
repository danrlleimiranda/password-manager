import React, { HtmlHTMLAttributes, useState } from 'react';

type ButtonPropsType = {
  showForm: (state:boolean) => void
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function Form({ showForm }: ButtonPropsType, props:ButtonPropsType) {
  function handleCancelButton(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    showForm(false);
  }

  const validClass = 'valid-password-check';
  const invalidClass = 'invalid-password-check';
  const regexLetterAndNumber = /^(?=.*[0-9])(?=.*[a-zA-Z])/;
  const regexSpecial = /^(?=.*[@!#$%^&*()/\\])/;

  const [formValue, setFormValue] = useState({ serviço: '',
    login: '',
    senha: '',
    url: '' });

  function handleChange({ target }:React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [target.id]: target.value,
    });
  }

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

  return (
    <form>
      <label htmlFor="serviço">
        Nome do Serviço
        <input
          type="text"
          id="serviço"
          name="serviço"
          value={ formValue.serviço }
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          id="login"
          value={ formValue.login }
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          type="password"
          id="senha"
          value={ formValue.senha }
          onChange={ (event) => handleChange(event) }
        />
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
        <input
          type="text"
          id="url"
          value={ formValue.url }
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <button disabled={ isValid() } type="submit">Cadastrar</button>
      <button onClick={ (event) => handleCancelButton(event) }>Cancelar</button>

    </form>
  );
}
