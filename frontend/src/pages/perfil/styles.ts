import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
`;

export const Main = styled.main`
  grid-column: span 12;
  padding-top: 9.56rem;
`;

export const ImageContainer = styled.div<{ height: number }>`
  grid-column-start: 2;
  grid-column-end: 6;
  height: ${({ height }) => `${height}px`};
  border-radius: 100%;
  border: 1px solid #eadeda;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerDescription = styled.div`
  grid-column-start: 7;
  grid-column-end: 13;
  margin-top: 2rem;

  > div {
    color: #eadeda;
    margin-bottom: 3.25rem;
    h2 {
      font-size: 2.25rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
    }

    > div {
      display: flex;
      .input {
        max-width: 21.25rem;
        margin-right: 1rem;
      }

      .button {
        max-width: 14rem;
      }
    }
    .button_company {
      max-width: 21.25rem;
      margin-top: 2rem;
    }
  }
`;
