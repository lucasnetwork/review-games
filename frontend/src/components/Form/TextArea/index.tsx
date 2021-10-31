import React, { TextareaHTMLAttributes, HTMLAttributes, useState } from 'react';

import Container from './styles';

interface InputProps {
  label?: HTMLAttributes<HTMLLabelElement>;
  labelValue?: string;
  input?: TextareaHTMLAttributes<HTMLTextAreaElement>;
  container?: HTMLAttributes<HTMLDivElement>;
  maxValue: string;
}

const Textarea: React.FC<InputProps> = ({
  input,
  container,
  label,
  labelValue = '',
  maxValue = '200',
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container active={focus || Boolean(input?.value)} {...container}>
      <label {...label}>{labelValue}</label>
      <textarea
        {...input}
        placeholder=""
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />

      <span className="maxNumber">0/{maxValue}</span>
    </Container>
  );
};

export default Textarea;
