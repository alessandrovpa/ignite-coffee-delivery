import { ShoppingCartSimple } from 'phosphor-react';
import { useContext, useState } from 'react';
import Product from '../../../../assets/product.svg';
import { Quantity } from '../../../../components/QuantityOption';
import { OrderContext } from '../../../../contexts/OrderContext';
import { CardContainer, Price, Tags } from './styles';

interface CardProps {
  title: string;
  description: string;
  price: number;
  tags: string[];
}

export function Card({ title, description, price, tags }: CardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addNewProduct } = useContext(OrderContext);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    setQuantity((state) => {
      return state > 0 ? state - 1 : 0;
    });
  }

  function addProduct() {
    if (quantity > 0) {
      addNewProduct({
        title,
        quantity,
        price,
      });
    }
  }

  return (
    <CardContainer>
      <img src={Product} alt="" />
      <Tags>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </Tags>
      <h3>{title}</h3>
      <small>{description}</small>
      <Price>
        <small>R$</small>
        <strong>{price}</strong>
        <Quantity
          quantity={quantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
        <button onClick={addProduct}>
          <ShoppingCartSimple weight="fill" />
        </button>
      </Price>
    </CardContainer>
  );
}
