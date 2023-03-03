import styled from 'styled-components';

export const QuantityContainer = styled.div`
  font-family: 'Baloo 2';
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  background: ${(props) => props.theme.grey};
  border: 0;
  border-radius: 4px;
  padding: 0.2rem;
  width: 3rem;

  button {
    opacity: 0.7;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.purple};

    &:hover {
      cursor: pointer;
    }
  }
`;
