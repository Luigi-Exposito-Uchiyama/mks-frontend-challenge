"use client";

import { createContext, useContext, ReactNode } from "react";

import { ApiProdutos } from "./interface";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export type ContextoAPI = {
  data?: ApiProdutos;
  error: Error | null;
};

export const Api = createContext(
  {} as ContextoAPI
);

export const ProductsDataProvider = ({ children }: { children: ReactNode }) => {
  const { data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
        )
        .then((res) => res.data),
    retry: 1,
  });

  return (
    <Api.Provider
      value={{
        data,
        error
      }}
    >
      {children}
    </Api.Provider>
  );
};

export const useApi = () => useContext(Api);
