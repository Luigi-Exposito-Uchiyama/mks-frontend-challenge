import * as S from "./styles";
import Sacola from "../../../public/sacola.png";
import Image from "next/image";
import { Card } from "../../interface/page";
import { useShopping } from "../shopping/page";
import { useAnimation, motion } from "framer-motion";

const CardPage = ({ image, name, price, description, id }: Card) => {
  const { buyProduct } = useShopping();

  const animeScale = useAnimation();
  return (
    <S.Container>
      <S.ImagemProduto whileHover={{ scale: 1.1 }} src={image} alt={`Image of product: ${name}`} />
      <S.BgProduto>
        <S.Titulo>{name}</S.Titulo>

        <S.BgPreco>
          <S.Preco>R${price.split(".")[0]}</S.Preco>
        </S.BgPreco>
      </S.BgProduto>

      <S.Descricao>{description}</S.Descricao>

      <S.BotaoComprar
        onHoverStart={() => animeScale.start({ scale: 0.9, color: "#eee" })}
        onHoverEnd={() => animeScale.start({ scale: 1.0, color: "#fff" })}
        onClick={() => buyProduct(id)}
      >
        <motion.div animate={animeScale}>
          <Image src={Sacola} alt="Sacola de compras" width={12} height={13} />
        </motion.div>

        <S.Comprar animate={animeScale}>COMPRAR</S.Comprar>
      </S.BotaoComprar>
    </S.Container>
  );
};

export default CardPage;
