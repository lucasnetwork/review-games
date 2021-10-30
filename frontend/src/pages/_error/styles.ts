import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
`;

export const Main = styled.main`
  grid-column: span 12;
  padding-top: 9.56rem;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const ImageContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  height: 43.4rem;
  border: 4px solid #eadeda;

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
  }
`;

export const DescriptionContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  margin-top: 4rem;
  border-top: 1px solid #eadeda;
  padding: 2rem 1rem;
  color: #eadeda;

  h2 {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }

  p {
    padding: 0 1rem;
    font-size: 1.5rem;
  }
`;

export const CommentContainer = styled.div`
  color: #eadeda;
  margin-bottom: 1rem;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 6.25rem;
      height: 6.25rem;
      object-fit: cover;
      border-radius: 100%;
      background-color: #000;
    }

    h3 {
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
`;
