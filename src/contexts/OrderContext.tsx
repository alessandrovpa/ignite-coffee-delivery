import { createContext, ReactNode, useEffect, useState } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface OrderContextData {
  addNewProduct: (product: Omit<Product, 'id'>) => void;
  removeProduct: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  amountOrderItens: number;
  orderItens: Product[];
}

export const OrderContext = createContext({} as OrderContextData);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Product[]>([]);
  const [amountOrderItens, setAmountOrderItens] = useState(0);

  function addNewProduct(product: Omit<Product, 'id'>) {
    const newProduct = {
      ...product,
      id: String(new Date()),
    };

    setOrder((state) => [...state, newProduct]);
    console.log(order);
  }

  function removeProduct(id: string) {
    const filteredOrder = order.filter((product) => product.id !== id);
    setOrder(filteredOrder);
  }

  function updateQuantity(id: string, newQuantity: number) {
    setOrder((state) =>
      state.map((item) => {
        if (item.id === id) {
          item.quantity = newQuantity;
          return item;
        } else {
          return item;
        }
      })
    );
  }

  useEffect(() => {
    const initialValue = 0;
    const totalItens = order.reduce(
      (accumulator, product) => accumulator + product.quantity,
      initialValue
    );
    setAmountOrderItens(totalItens);
  }, [order]);

  return (
    <OrderContext.Provider
      value={{
        addNewProduct,
        removeProduct,
        amountOrderItens,
        orderItens: order,
        updateQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
