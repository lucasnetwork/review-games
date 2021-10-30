import styled, { css } from 'styled-components';

export default styled.div<{ active: boolean }>`
  position: relative;
  width: 100%;
  height: 3rem;

  input {
    height: 100%;
    width: 100%;
    border: 1px solid #d90368;
    border-radius: 8px;
    background: none;
  }

  label {
    position: absolute;
    top: 0.4rem;
    left: 0.8rem;
    color: #eadeda;
    transition: top 0.2s linear, left 0.2s linear, transform 0.2s linear;
    padding: 0.4rem 0.3rem;
    pointer-events: none;

    ${({ active }) =>
      active &&
      css`
        top: 0;
        left: 0.5rem;
        background-color: ${({ theme }) => theme.background.primary};
        transform: translateY(-50%);
      `}
  }
`;
