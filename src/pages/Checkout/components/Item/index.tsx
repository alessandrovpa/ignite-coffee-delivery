import { Trash } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import ProductImage from '../../../../assets/product.svg';
import { Quantity } from '../../../../components/QuantityOption';
import { OrderContext } from '../../../../contexts/OrderContext';
import { ItemContainer, ItemInfo } from './styles';

interface ItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export function Item({ id, title, price, quantity }: ItemProps) {
  const [finalQuantity, setFinalQuantity] = useState(quantity);
  const { removeProduct, updateQuantity } = useContext(OrderContext);

  function incrementQuantity() {
    setFinalQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    setFinalQuantity((state) => {
      return state > 0 ? state - 1 : 0;
    });
  }

  useEffect(() => {
    updateQuantity(id, finalQuantity);
  }, [id, finalQuantity, updateQuantity]);

  function handleRemoveProduct() {
    removeProduct(id);
  }

  return (
    <>
      <ItemContainer>
        <img src={ProductImage} alt="" />
        <div>
          <p>{title}</p>
          <ItemInfo>
            <Quantity
              quantity={finalQuantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
            <button onClick={handleRemoveProduct}>
              <Trash />
              Remover
            </button>
          </ItemInfo>
        </div>
        <div>
          <small>R$</small>
          <strong>{price}</strong>
        </div>
      </ItemContainer>
      <hr />
    </>
  );
}
