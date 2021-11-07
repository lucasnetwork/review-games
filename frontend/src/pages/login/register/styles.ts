import styled from 'styled-components';

export default styled.div`
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

  .button {
    margin-top: 3rem;
  }

  .margin {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
