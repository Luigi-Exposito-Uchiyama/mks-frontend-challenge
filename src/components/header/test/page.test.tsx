import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../page";

describe("Header", () => {
  it("renderiza se ta certo", () => {
    render(<Header />);

    const logo = screen.getByText("MKS");

    expect(logo).toBeInTheDocument();
  });

  it("should opened FinishShopping", async () => {
    render(<Header />);
    const cartButton = screen.getByAltText("shopping cart");
    userEvent.click(cartButton);

    const text = await screen.findByText("Seu carrinho está vazio.")

    expect(text).toBeInTheDocument();
  });
});
