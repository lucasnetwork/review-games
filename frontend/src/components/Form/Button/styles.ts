import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s linear;

  :hover {
    background-color: #66004d;
  }
`;
