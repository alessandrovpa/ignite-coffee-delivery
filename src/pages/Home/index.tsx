import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react';
import CoffeeImage from '../../assets/coffee.svg';
import { Card } from './components/Card';
import { HomeContainer, Intro, Products } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <ul>
            <li>
              <ShoppingCart weight="fill" size={10} />
              Compra simples e segura
            </li>
            <li>
              <Package weight="fill" />
              Embalagem mantém o café intacto
            </li>
            <li>
              <Clock weight="fill" />
              Entrega rápida e rastreada
            </li>
            <li>
              <Coffee weight="fill" />O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <div>
          <img src={CoffeeImage} alt="coffee" />
        </div>
      </Intro>
      <Products>
        <h1>Nosso cafés</h1>
        <ul>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </Products>
    </HomeContainer>
  );
}
