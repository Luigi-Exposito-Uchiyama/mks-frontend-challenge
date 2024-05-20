"use client";

import { Produtos } from "../../interface/page";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useApi } from "../api/page";

export type ShoppingContextProps = {
  shopping: Produtos[];
  buyProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  setTotal: Dispatch<
    SetStateAction<{
      [key: number]: number;
    }>
  >;
  total: {
    [key: number]: number;
  };
};

export const ShoppingContext = createContext({} as ShoppingContextProps);

export const ShoppingProvider = ({ children }: { children: ReactNode }) => {
  const [shopping, setShopping] = useState<Produtos[]>([]);
  const [total, setTotal] = useState<{ [key: number]: number }>({});

  const { data } = useApi();

  const buyProduct = (id: number) => {
    const filteredProduct = data?.products.filter(
      (product) => product.id === id
    );

    if (filteredProduct && !shopping.find((item) => item.id === id)) {
      setShopping((product) => [...product, ...filteredProduct]);
    }
  };

  const deleteProduct = (id: number) => {
    setShopping((currentShopping) =>
      currentShopping.filter((product) => product.id !== id)
    );

    setTotal((currentTotal) => {
      const newTotal = { ...currentTotal };
      delete newTotal[id];
      return newTotal;
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        shopping,
        buyProduct,
        deleteProduct,
        setTotal,
        total,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => useContext(ShoppingContext);
