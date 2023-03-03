import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 1rem 0;

  h1 {
    font-family: 'Baloo 2';
    line-height: 130%;
    font-size: 3rem;
  }
`;

export const Intro = styled.main`
  display: flex;

  div {
    width: 50%;

    span {
      display: block;
      margin-top: 1rem;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      margin: 1rem 0;
      gap: 0.5rem 0;

      li {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        width: 50%;
        font-size: 0.75rem;

        svg {
          color: ${(props) => props.theme.background};
          padding: 0.5rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme.purple};
        }
      }
    }
  }
`;

export const Products = styled.main`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(20% - 1rem));
    gap: 1rem;
  }
`;
