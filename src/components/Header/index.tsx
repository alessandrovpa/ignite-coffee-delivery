import { House, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { HeaderContainer, Nav } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
      <Nav>
        <Link to="/">
          <House size={24} weight="fill" />
        </Link>
        <Link to="/checkout">
          <ShoppingCart size={24} weight={'duotone'} />
          <span>10</span>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}
