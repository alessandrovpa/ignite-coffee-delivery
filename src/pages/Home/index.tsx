import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react';
import CoffeeImage from '../../assets/coffee.svg';
import { Card } from './components/Card';
import { HomeContainer, Intro, Products } from './styles';

interface Product {
  title: string;
  description: string;
  price: number;
  tags: string[];
}

const products: Product[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
];

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
          {products.map((product) => (
            <Card
              title={product.title}
              description={product.description}
              price={product.price}
              tags={product.tags}
              key={product.title}
            />
          ))}
        </ul>
      </Products>
    </HomeContainer>
  );
}
