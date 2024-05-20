import { useEffect, useState } from "react";
import * as S from "./styles";
import { Produtos } from "../../interface/page";
import { useShopping } from "../shopping/page";

const CardOfShopping = ({ product }: { product: Produtos }) => {
  const [contar, setContar] = useState(1);

  const { deleteProduct, setTotal } = useShopping();

  const increase = () => {
    if (contar < 99) {
      setContar((contar) => contar + 1);
    }
  };

  const decrease = () => {
    if (contar > 1) {
      setContar((contar) => contar - 1);
    }
  };

  useEffect(() => {
    const newTotal = Number(product.price) * contar;

    setTotal((prevTotal) => ({
      ...prevTotal,
      [product.id]: newTotal,
    }));
  }, [contar, product.id, product.price, setTotal]);

  return (
    <S.ContainerProduto>
      <S.ImgProduto
        src={product.photo}
        alt={"Imagem do produto: " + product.name}
      />
      <S.TituloProduto>{product.name}</S.TituloProduto>
      <div>
        <S.Texto>Qtd:</S.Texto>
        <S.Quantidade>
          <S.Valor onClick={decrease} data-testid="decrease">-</S.Valor>
          <S.Numero data-testid="contar">{contar}</S.Numero>
          <S.Valor onClick={increase} data-testid="increase">+</S.Valor>
        </S.Quantidade>
      </div>

      <S.Preco>R${product.price.split(".")[0]}</S.Preco>

      <S.Fechar
        onClick={() => deleteProduct(product.id)}
        data-testid="deleteProduct"
      >
        x
      </S.Fechar>
    </S.ContainerProduto>
  );
};

export default CardOfShopping;
