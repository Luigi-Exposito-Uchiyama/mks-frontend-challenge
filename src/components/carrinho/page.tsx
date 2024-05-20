import { useShopping } from "../shopping/page";
import * as S from "./styles";
import CardOfShopping from "../cardCarrinho/page";

const FinishShopping = ({ fecharShopping }: { fecharShopping: () => void }) => {
  const { shopping, total } = useShopping();

  const somaTotal = total && typeof total === 'object' ? Object.values(total).reduce((sum, value) => sum + value, 0) : 0;

  return (
    <S.Container>
      <S.BgTitulo>
        <S.Titulo>Carrinho de compras</S.Titulo>
        <S.FecharCarrinho onClick={fecharShopping}>X</S.FecharCarrinho>
      </S.BgTitulo>

      <S.Produtos>
        {shopping?.length > 0 ? (
          shopping?.map((product) => (
            <CardOfShopping product={product} key={product.id} />
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            Seu carrinho está vazio.
          </p>
        )}
      </S.Produtos>

      <S.BgTotal>
        <S.Total>Total:</S.Total>
        <S.Total>R$ {shopping?.length > 0 ? somaTotal : 0}</S.Total>
      </S.BgTotal>

      <S.Final>Finalizar Compra</S.Final>
    </S.Container>
  );
};

export default FinishShopping;
