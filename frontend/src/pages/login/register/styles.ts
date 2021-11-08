import styled from 'styled-components';

export default styled.form`
  grid-column-start: 5;
  grid-column-end: 9;
  border: 1px solid #d90368;
  border-radius: 8px;
  padding: 0 3rem;
  padding-top: 3.75rem;
  padding-bottom: 2.25rem;
  align-self: center;
  display: flex;
  flex-direction: column;

  .switch {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;

    p {
      font-size: 0.8rem;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.text.primary};
    }
  }

  a {
    font-size: 0.6rem;
    margin-top: 1rem;
    color: #fff;
    align-self: flex-end;
  }

  h1 {
    font-size: 2.25rem;
    color: #eadeda;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  .margin {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
