import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors?.blue01};
  padding: 0 88px 0 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors?.white};
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.1875rem;
`;

export const SubTitulo = styled.h3`
  color: ${(props) => props.theme.colors?.white};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.1875rem;
`;

export const Shopping = styled.div`
  width: 90px;
  height: 45px;
  background-color: ${(props) => props.theme.colors?.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

export const Quantidade = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 1.125rem;
  font-weight: 700;
`;
