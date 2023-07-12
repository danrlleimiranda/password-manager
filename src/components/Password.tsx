import React from 'react';

type PasswordProps = {
  serviceInfo: {
    serviço: string;
    login: string;
    senha: string;
    url: string;
  },
  handleDelete: (() => void) | undefined,
  checkbox: boolean
};

export function Password({ serviceInfo, handleDelete, checkbox }: PasswordProps) {
  return (
    <div>
      {handleDelete
      && <button data-testid="remove-btn" onClick={ handleDelete }>X</button>}
      <a
        href={ serviceInfo.url }
        target="_blank"
        rel="noreferrer"
      >
        { serviceInfo.serviço }

      </a>
      <p>{serviceInfo.login}</p>
      { checkbox ? <span>******</span> : <p>{ serviceInfo.senha }</p>}
    </div>
  );
}
