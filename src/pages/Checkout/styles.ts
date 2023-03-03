import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  padding: 1rem 0;
`;

export const SectionContainer = styled.div`
  background-color: ${(props) => props.theme.card};
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 1rem 2rem;
`;

export const Description = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const AddressForm = styled.form`
  margin-top: 1rem;
  input {
    width: 100%;
    margin-top: 0.5rem;
    border: 0;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: lightgrey;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const PaymentOption = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 0.5rem;

  button {
    width: 100%;
    border: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.purple};
    background-color: transparent;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.purpleLight};
    }
    &:hover svg {
      color: ${(props) => props.theme.purpleLight};
    }
  }
`;
