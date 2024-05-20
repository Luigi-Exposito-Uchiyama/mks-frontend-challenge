"use client";

import { ProviderStyle } from "@/styles/Tema";
import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsDataProvider } from "@/components/api/page";
import { ShoppingProvider } from "@/components/shopping/page";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProviderStyle>
      <QueryClientProvider client={queryClient}>
        <ProductsDataProvider>
          <ShoppingProvider>{children}</ShoppingProvider>
        </ProductsDataProvider>
      </QueryClientProvider>
    </ProviderStyle>
  );
};

export default Providers;
