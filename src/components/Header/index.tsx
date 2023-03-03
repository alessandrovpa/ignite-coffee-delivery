import { House, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { OrderContext } from '../../contexts/OrderContext';
import { HeaderContainer, Nav } from './styles';

export function Header() {
  const { amountOrderItens } = useContext(OrderContext);

  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
      <Nav>
        <Link to="/">
          <House size={24} weight="fill" />
        </Link>
        <Link to="/checkout">
          <ShoppingCart size={24} weight={'duotone'} />
          <span>{amountOrderItens}</span>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}
