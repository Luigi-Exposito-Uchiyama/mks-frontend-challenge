import styled from "styled-components";
import { FecharCarrinho } from "../carrinho/styles";

export const ContainerProduto = styled.div`
  position: relative;
  width: 100%;
  height: 95px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  border-radius: 8px;
  background: ${(props) => props.theme.colors?.white};
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
`;

export const ImgProduto = styled.img`
  width: 85%;
  height: 100%;
`;

export const TituloProduto = styled.p`
  color: ${(props) => props.theme.colors?.card.text};
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`;

export const Texto = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 7px;
  font-weight: 400;
`;

export const Quantidade = styled.div`
  background-color: ${(props) => props.theme.colors?.white};
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
`;

export const Valor = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const Numero = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 14px;
  font-weight: 400;
  padding: 0 5px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
`;

export const Preco = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const Fechar = styled(FecharCarrinho)`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 18px;
  height: 18px;
  font-size: 10px;
  z-index: 1000;
`;
