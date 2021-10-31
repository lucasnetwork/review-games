import styled, { css } from 'styled-components';

export default styled.div<{ active: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 3rem;

  textarea {
    height: 100%;
    width: 100%;
    min-height: 3rem;
    border: 1px solid #d90368;
    border-radius: 8px;
    background: none;
    resize: none;
    padding-left: 0.8rem;
    padding-top: 0.8rem;
    color: #eadeda;
    font-size: 1rem;
  }

  .maxNumber {
    color: ${({ theme }) => theme.text.primary};
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    font-size: 0.7rem;
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
