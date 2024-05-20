import { useApi } from "../api/page";
import Card from "../card/page";
import * as S from "./styles";
import Skeleton from "../skeleton/page";
import { useState, useEffect } from "react";
import { useShopping } from "../shopping/page";
import { motion } from "framer-motion";

const Main = () => {
  const [prevLength, setPrevLength] = useState(0);
  
  const { data, error } = useApi();

  const { shopping } = useShopping();

  useEffect(() => {
    if (shopping?.length > prevLength) {
      const timer = setTimeout(() => {
        setPrevLength(shopping?.length);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [prevLength, shopping]);

  if (error)
    return (
      <S.Container>
        <p>
          Ocorreu um erro inesperado. <strong>{error.message}</strong>
        </p>
      </S.Container>
    );

  return (
    <S.Container>
      <S.Bgprodutos>
        {data
          ? data.products.map((product) => (
              <Card
                key={product.id}
                description={product.description}
                image={product.photo}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))
          : Array.from({ length: 8 }, (_, i) => <Skeleton key={i} />)}
      </S.Bgprodutos>

      {shopping?.length > prevLength && (
        <S.Notificacao>
          <motion.div
            initial={{ x: "10vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            Produto Adicionado com Sucesso no seu Carrinho!
          </motion.div>
        </S.Notificacao>
      )}
    </S.Container>
  );
};

export default Main;
