import styled from "styled-components";

export const Container = styled.header`
  background-color: #0F52BA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 88px 0 65px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const SubTitulo = styled.h1`
  color: #fff;
  font-size: 1.25rem;
  font-weight: normal;
`;

export const Shopping = styled.div`
  background-color: #fff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

export const QuantidadeDeProdutos = styled.p`
  color: #fff;
  font-size: 1.125rem;
  font-weight: bold;
`;
