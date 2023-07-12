import React from 'react';
import { Password } from './Password';

type PasswordListProps = {
  registerValue: { serviço: string,
    login: string,
    senha: string,
    url: string }[]
};
export function PasswordList({ registerValue }:PasswordListProps) {
  return (
    <ul>
      {registerValue.map((value) => (
        <li key={ value.serviço }>
          <Password serviceInfo={ value } />
        </li>
      ))}
    </ul>
  );
}
