import { QuantityContainer } from './styles';

interface QuantityProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function Quantity({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityProps) {
  return (
    <QuantityContainer>
      <button onClick={decrementQuantity}>-</button>
      <strong>{quantity}</strong>
      <button onClick={incrementQuantity}>+</button>
    </QuantityContainer>
  );
}
