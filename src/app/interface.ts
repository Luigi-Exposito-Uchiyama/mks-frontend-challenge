export interface ApiProdutos {
  count: number;
  products: Produto[];
}

export interface Produto {
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
