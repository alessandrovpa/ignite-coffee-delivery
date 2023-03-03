import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.25rem;
  margin: 1rem 0;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background: ${(props) => props.theme.purpleLight};
    border-radius: 4px;
    gap: 0.1rem;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`;
