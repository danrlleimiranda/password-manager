import React, { useState } from 'react';
import { Password } from '../Password';
import './PasswordList.css';

type PasswordListProps = {
  registerValue: { serviço: string,
    login: string,
    senha: string,
    url: string }[]
  handleDelete: (value: string) => void;
};
export function PasswordList({ registerValue, handleDelete }:PasswordListProps) {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <div className="password-box">

      <label htmlFor="hide-password">
        <span className="hide">Esconder senhas</span>
        <input
          type="checkbox"
          id="hide-password"
          className="hide-password"
          onClick={ () => {
            setCheckbox(!checkbox);
          } }
        />
      </label>

      <ul className="password-list">
        {registerValue.map((value) => (
          <li key={ value.serviço }>
            <Password
              serviceInfo={ value }
              handleDelete={ () => handleDelete(value.serviço) }
              checkbox={ checkbox }
            />
          </li>
        ))}
      </ul>

    </div>
  );
}
