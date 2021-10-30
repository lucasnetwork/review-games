import React, { InputHTMLAttributes, HTMLAttributes, useState } from 'react';

import Container from './styles';

interface InputProps {
  label?: HTMLAttributes<HTMLLabelElement>;
  labelValue?: string;
  input?: InputHTMLAttributes<HTMLInputElement>;
  container?: HTMLAttributes<HTMLDivElement>;
}

const Input: React.FC<InputProps> = ({
  input,
  container,
  label,
  labelValue = '',
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container active={focus || Boolean(input?.value)} {...container}>
      <label {...label}>{labelValue}</label>
      <input
        {...input}
        placeholder=""
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Container>
  );
};

export default Input;
