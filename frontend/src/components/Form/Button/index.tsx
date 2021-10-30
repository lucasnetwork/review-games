import React, { ButtonHTMLAttributes } from 'react';

import Container from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <Container {...props} />
);

export default Button;
