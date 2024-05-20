import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FinishShopping from "../page";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "../../shopping/page";

describe("<FinishShopping />", () => {
  const fecharShopping = jest.fn();

  const productData = [
    {
      id: 1,
      name: "Simula produto",
      brand: "",
      description: "descricao Produto", 
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

  it("renderiza", () => {
    render(<FinishShopping fecharShopping={fecharShopping} />);

    const title = screen.getByText("Carrinho de compras");

    expect(title).toBeInTheDocument();
  });

  it("fecha o carrinho", () => {
    render(<FinishShopping fecharShopping={fecharShopping} />);

    const closedButton = screen.getByText("X");
    fireEvent.click(closedButton);
    expect(fecharShopping).toHaveBeenCalledTimes(1);
  });

  it("renderiza produto", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <FinishShopping fecharShopping={fecharShopping} />
      </ShoppingContext.Provider>
    );

    const product = screen.getByText("Simula produto");

    expect(product).toBeInTheDocument();
  });
});
