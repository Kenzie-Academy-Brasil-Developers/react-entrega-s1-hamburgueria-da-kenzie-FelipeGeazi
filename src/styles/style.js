import styled from "styled-components";

export const Header = styled.header `
  box-sizing: border-box;
  width: 100vw;

  display: flex;
  justify-content: center;
  padding: 0rem 1rem;
  padding-bottom: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  height: 148px;
  background: #f5f5f5;

  @media (min-width: 700px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.h1 `
  box-sizing: border-box;
  font-size: 2rem;

  color: linear-gradient(90deg, #333333 62.64%, #eb5757 64.74%);

  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  @media (min-width: 700px) {
    width: 60%;
    justify-content: flex-start;
  }
`;

export const BarraPesquisa = styled.form `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0.5rem 0px 0.7rem;
  gap: 3rem;

  background: #ffffff;
  /* grey-100 */

  width: 100%;
  height: 50px;

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  @media (min-width: 700px) {
    width: 35%;
    justify-content: space-evenly;
    max-width: 420px;
  }
`;

export const InputDigitado = styled.input `
  border: none;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  width: 50%;
`;

export const ButtonPesquisar = styled.button `
  display: flex;
  height: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0.8rem;
  cursor: pointer;

  background: #27ae60;
  /* color-primary */

  border: 2px solid #27ae60;
  border-radius: 8px;
  color: #fff;
`;

export const Main = styled.main `
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;