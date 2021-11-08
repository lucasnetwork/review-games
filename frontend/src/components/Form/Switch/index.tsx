import React, { HTMLAttributes } from 'react';
import ReactSwitch from 'react-switch';

import Container from './styles';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  options?: HTMLAttributes<HTMLDivElement>;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, options = {} }) => (
  <Container {...options}>
    <ReactSwitch
      offColor="#2E294E"
      onColor="#780139"
      width={43}
      height={17}
      onChange={onChange}
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      borderRadius={50}
      onHandleColor="#D90368"
      offHandleColor="#D90368"
    />
  </Container>
);

export default Switch;
