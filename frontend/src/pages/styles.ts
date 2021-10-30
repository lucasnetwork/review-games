import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const Main = styled.main`
  grid-column: span 12;
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
    border: 2px solid #eadeda;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .item-container {
    display: flex;
    flex-direction: column;
    row-gap: 26px;
  }
`;
