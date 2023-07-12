import React, { HtmlHTMLAttributes } from 'react';
import './Button.css';

export function Button(
  props: HtmlHTMLAttributes<HTMLButtonElement>,
) {
  return (

    <button { ...props }>cadastrar nova senha</button>
  );
}
