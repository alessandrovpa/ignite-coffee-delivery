import { Trash } from 'phosphor-react';
import { useState } from 'react';
import ProductImage from '../../../../assets/product.svg';
import { Quantity } from '../../../../components/QuantityOption';
import { ItemContainer, ItemInfo } from './styles';

export function Item() {
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
    <>
      <ItemContainer>
        <img src={ProductImage} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <ItemInfo>
            <Quantity
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
            <button>
              <Trash />
              Remover
            </button>
          </ItemInfo>
        </div>
        <div>
          <small>R$</small>
          <strong>9,90</strong>
        </div>
      </ItemContainer>
      <hr />
    </>
  );
}
