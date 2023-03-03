import { ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';
import Product from '../../../../assets/product.svg';
import { Quantity } from '../../../../components/QuantityOption';
import { CardContainer, Price, Tags } from './styles';

export function Card() {
  const [quantity, setQuantity] = useState(0);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    setQuantity((state) => {
      return state > 0 ? state - 1 : 0;
    });
  }

  return (
    <CardContainer>
      <img src={Product} alt="" />
      <Tags>
        <span>Tags</span>
        <span>Tags</span>
      </Tags>
      <h3>Expresso Tradicional</h3>
      <small>O tradicional café feito com água quente e grãos moídos</small>
      <Price>
        <small>R$</small>
        <strong>9,90</strong>
        <Quantity
          quantity={quantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
        <button>
          <ShoppingCartSimple weight="fill" />
        </button>
      </Price>
    </CardContainer>
  );
}
