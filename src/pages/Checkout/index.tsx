import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { Item } from './components/Item';
import {
  AddressForm,
  CheckoutContainer,
  Description,
  PaymentOption,
  SectionContainer,
} from './styles';

export function Checkout() {
  const { orderItens } = useContext(OrderContext);

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <SectionContainer>
          <Description>
            <MapPinLine size={24} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Description>
          <AddressForm>
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
          </AddressForm>
        </SectionContainer>
        <SectionContainer>
          <Description>
            <CurrencyDollar size={24} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Description>

          <PaymentOption>
            <button>
              <CreditCard weight="fill" />
              Cartão de crédito
            </button>
            <button>
              <Bank />
              Cartão de débito
            </button>
            <button>
              <Money weight="fill" />
              Dinheiro
            </button>
          </PaymentOption>
        </SectionContainer>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <SectionContainer>
          {orderItens.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </SectionContainer>
      </div>
    </CheckoutContainer>
  );
}
