import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  border-bottom: 3px solid ${(props) => props.theme.card};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  a {
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.purpleLight};
    border-radius: 8px;
    padding: 0.5rem;

    &:hover {
      color: ${(props) => props.theme.purpleDark};
    }

    position: relative;
    span {
      font-size: 0.8rem;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      background-color: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.purpleLight};
      border-radius: 50%;
      top: -10px;
      right: -10px;
    }

    &:hover span {
      background-color: ${(props) => props.theme.purpleDark};
    }
  }
`;
