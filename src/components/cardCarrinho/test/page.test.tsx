import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "../../shopping/page";
import CardOfShopping from "../page";

describe("<CardOfShopping />", () => {
  const productData = [
    {
      id: 1,
      name: "Simula Produto",
      brand: "",
      description: "descricao produto", 
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
  it("deletar produto", async () => {
    const deleteProductMock = jest.fn();
    render(
      <ShoppingContext.Provider
        value={{ ...simulatorContext, deleteProduct: deleteProductMock }}
      >
        <CardOfShopping product={productData[0]} />
      </ShoppingContext.Provider>
    );

    const deleteProduct = screen.getByTestId("deletarProduto");
    fireEvent.click(deleteProduct);

    expect(deleteProductMock).toHaveBeenCalled();
  });

  it("contador", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <CardOfShopping product={productData[0]} />
      </ShoppingContext.Provider>
    );

    const contador = screen.getByTestId("contar");
    const botaoAumentar = screen.getByTestId("aumentar");
    const botaoDiminuir = screen.getByTestId("Diminuir");

    expect(contador.textContent).toBe("1");

    fireEvent.click(botaoAumentar);
    expect(contador.textContent).toBe("2");

    fireEvent.click(botaoDiminuir);
    expect(contador.textContent).toBe("1");
  });
});
