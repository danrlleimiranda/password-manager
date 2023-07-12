import React, { useState } from 'react';
import { Password } from './Password';

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
    <div>
      <label htmlFor="hide-password">
        Esconder senhas
        <input
          type="checkbox"
          id="hide-password"
          onClick={ () => {
            setCheckbox(!checkbox);
          } }
        />

      </label>
      <ul>
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
