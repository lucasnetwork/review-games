import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
`;

export const Main = styled.main`
  grid-column: span 12;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const ContainerType = styled.div`
  grid-column-start: 2;
  grid-column-end: 13;
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    font-weight: normal;
    color: #eadeda;
    margin-bottom: 2rem;
  }

  .item {
    height: 323px;
    width: 219px;
    background-color: #fff;
  }
  .item-container {
    display: flex;
    flex-direction: column;
    row-gap: 26px;
  }
`;