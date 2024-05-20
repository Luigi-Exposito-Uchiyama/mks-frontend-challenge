export interface ApiProdutos {
  count: number;
  products: Produtos[];
}

export interface Produtos {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface Card {
  image: string;
  name: string;
  price: string;
  description: string;
  id: number;
}
