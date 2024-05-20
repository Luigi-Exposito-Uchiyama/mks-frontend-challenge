import IconCart from "../../../public/carrinho.png";

import Image from "next/image";

import * as S from "./styles";

import { useState } from "react";

import FinishShopping from "../carrinho/page";
import { useShopping } from "../shopping/page";

const Header = () => {
  const [Abrir, setAbrir] = useState(false);
  const abrirShopping = () => setAbrir(true);
  const fecharShopping = () => setAbrir(false);

  const { shopping } = useShopping();

  return (
    <S.Container>
      <S.Logo>
        <S.Titulo>MKS</S.Titulo>
        <S.SubTitulo>Sistemas</S.SubTitulo>
      </S.Logo>

      <S.Shopping onClick={abrirShopping}>
        <Image src={IconCart} alt="shopping cart" width={19} height={18} />

        <S.Quantidade>{shopping?.length}</S.Quantidade>
      </S.Shopping>
      {Abrir && <FinishShopping fecharShopping={fecharShopping} />}
    </S.Container>
  );
};

export default Header;
