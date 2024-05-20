import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "../../shopping/page";
import Card from "../page";

describe("<Card />", () => {
  const productData = [
    {
      id: 1,
      name: "Simula produto",
      brand: "",
      description: "Descricao Produto",
      photo: "",
      price: "1000",
      createdAt: "",
      updatedAt: "",
    },
  ];
  const simulatorContext: ShoppingContextProps = {
    buyProduct: jest.fn(),
    deleteProduct: jest.fn(),
    shopping: productData,
    setTotal: jest.fn(),
    total: { 1: Number(productData[0].price) },
  };

  it("renderiza produtos", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <Card
          description="description of product"
          id={1}
          image=""
          name="Produto Falso"
          price="1000"
        />
      </ShoppingContext.Provider>
    );

    const nameProduct = screen.getByText("Produto Falso");

    expect(nameProduct).toBeInTheDocument();
  });

  it("Produtos", () => {
    const buyProduct = jest.fn();
    render(
      <ShoppingContext.Provider value={{ ...simulatorContext, buyProduct }}>
        <Card
          description="Descricao Produto"
          id={1}
          image=""
          name="Produto Falso"
          price="1000"
        />
      </ShoppingContext.Provider>
    );

    const buy = screen.getByText("COMPRAR");
    fireEvent.click(buy);

    expect(buyProduct).toHaveBeenCalled();
  });
});
