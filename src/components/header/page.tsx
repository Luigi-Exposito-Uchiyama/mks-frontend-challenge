import carrinho from "../../../public/carrinho.png";
import Image from "next/image";
import * as S from "./styles";

const Header = () => {

  return (
    <S.Container>
      <S.Logo>
        <S.Titulo>MKS</S.Titulo>
        <S.SubTitulo>Sistemas</S.SubTitulo>
      </S.Logo>

      <S.Shopping>
        <Image src={carrinho} alt="carrinho de compras" width={19} height={18} />
        <S.QuantidadeDeProdutos></S.QuantidadeDeProdutos>
      </S.Shopping>
    </S.Container>
  );
};

export default Header;
