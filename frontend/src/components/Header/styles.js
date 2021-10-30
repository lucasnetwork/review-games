import styled from 'styled-components';

export default styled.header`
  grid-column: span 12;
  height: 6.25rem;
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  h1 {
    color: ${({ theme }) => theme.text.primary};
    font-size: 2.25rem;
    font-weight: 400;
  }

  button {
    color: ${({ theme }) => theme.text.primary};
    background: none;
    border: none;
    font-size: 2.25rem;
    cursor: pointer;
    transition: opacity 0.2s linear;

    :hover {
      opacity: 0.6;
    }
  }
`;
