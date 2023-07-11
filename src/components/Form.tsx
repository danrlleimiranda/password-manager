import React, { HtmlHTMLAttributes, useState } from 'react';

type ButtonPropsType = {
  showForm: (state:boolean) => void
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function Form({ showForm }: ButtonPropsType, props:ButtonPropsType) {
  function handleCancelButton(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    showForm(false);
  }

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
