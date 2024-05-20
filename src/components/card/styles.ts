import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled.div`
  background: ${(props) => props.theme.colors?.white};
  width: 218px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

export const ImagemProduto = styled(motion.img)`
  width: 60%;
  height: 40%;
  margin-top: 10px;
`;

export const BgProduto = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
  padding: 0 11px 0 14px;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors?.card.text};
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
`;

export const BgPreco = styled.div`
  background: ${(props) => props.theme.colors?.card.bgPrice};
  border-radius: 5px;
`;

export const Preco = styled.h2`
  color: #fff;
  padding: 4px 7px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const Descricao = styled.p`
  color: ${(props) => props.theme.colors?.card.text};
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  padding: 0 15px;
`;

export const BotaoComprar = styled(motion.div)`
  background-color: ${(props) => props.theme.colors?.blue01};
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
`;

export const Comprar = styled(motion.p)`
  color: ${(props) => props.theme.colors?.white};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;
`;
