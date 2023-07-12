import React from 'react';

type PasswordProps = {
  serviceInfo: {
    serviço: string;
    login: string;
    senha: string;
    url: string;
  }
};

export function Password(props:PasswordProps) {
  const { serviceInfo } = props;
  return (
    <div>
      <a
        href={ serviceInfo.url }
        target="_blank"
        rel="noreferrer"
      >
        { serviceInfo.serviço }

      </a>
      <p>{serviceInfo.login}</p>
      <p>{ serviceInfo.senha }</p>
    </div>
  );
}
