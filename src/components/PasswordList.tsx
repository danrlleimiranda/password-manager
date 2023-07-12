import React from 'react';
import { Password } from './Password';

type PasswordListProps = {
  registerValue: { serviço: string,
    login: string,
    senha: string,
    url: string }[]
  handleDelete: (value: string) => void
};
export function PasswordList({ registerValue, handleDelete }:PasswordListProps) {
  return (
    <div>
      <ul>
        {registerValue.map((value) => (
          <li key={ value.serviço }>
            <Password
              serviceInfo={ value }
              handleDelete={ () => handleDelete(value.serviço) }
            />
          </li>
        ))}
      </ul>

    </div>
  );
}
