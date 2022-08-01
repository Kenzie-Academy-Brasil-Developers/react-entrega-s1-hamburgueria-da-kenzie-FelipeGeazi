import styled from "styled-components";

export const Card = styled.li `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 300px;
  height: 346px;
  left: 115px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`;

export const Imagem = styled.div `
  background-color: #f5f5f5;
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    margin-bottom: 1rem;
  }
`;

export const Texto = styled.div `
  margin-left: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;

    color: #333333;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    /* identical to box height, or 133% */

    /* grey-300 */

    color: #828282;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;

    /* identical to box height, or 171% */

    /* color-primary */

    color: #27ae60;
  }
`;

export const BtnAdicionar = styled.button `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  background: #27ae60;
  /* color-primary */

  border: 2px solid #27ae60;
  border-radius: 8px;

  width: 7rem;
  height: 2rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  /* identical to box height */

  color: #ffffff;
`;