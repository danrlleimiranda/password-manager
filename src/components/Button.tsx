import React, { HtmlHTMLAttributes } from 'react';

export function Button(
  props: HtmlHTMLAttributes<HTMLButtonElement>,
) {
  return (

    <button { ...props }>cadastrar nova senha</button>
  );
}
