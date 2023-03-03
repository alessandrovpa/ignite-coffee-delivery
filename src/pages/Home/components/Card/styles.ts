import styled from 'styled-components';

export const CardContainer = styled.li`
  background: ${(props) => props.theme.card};
  border-radius: 4px 20%;
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  max-width: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    margin-top: -3rem;
  }

  span {
  }

  small {
    color: ${(props) => props.theme.subtitle};
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme.yellowDark};
  font-size: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  span {
    display: block;
    background: ${(props) => props.theme.yellowLight};
    opacity: 0.7;
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
  }
`;

export const Price = styled.div`
  font-family: 'Baloo 2';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 0.2rem;

  & > button {
    border: 0;
    border-radius: 4px;
    background: ${(props) => props.theme.purpleDark};
    color: ${(props) => props.theme.purpleLight};
    padding: 0.3rem;

    &:hover {
      background: ${(props) => props.theme.purple};
      cursor: pointer;
    }
  }
`;
