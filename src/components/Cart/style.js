import styled from "styled-components";

export const Carrinho = styled.aside `
  box-sizing: border-box;
  margin: 2rem 0.5rem;

  //padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 470px;

  @media (min-width: 700px) {
    width: 30%;
  }

  h3 {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ConteudoCarrinho = styled.div `
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 10px;
  width: 100%;
  height: 358px;
  background: #fff;
  border-radius: 0px 0px 5px 5px;
  overflow: scroll;
  gap: 1rem;

  p {
  }
`;

export const ItemCarrinho = styled.div `
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 7rem;

  padding: 0.5rem;

  display: flex;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;

    /* or 133% */
    color: #333333;
  }

  img {
    background-color: aliceblue;
    width: 30%;
    max-width: 100px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 17px;
    /* identical to box height */

    /* Gray 3 */

    color: #828282;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;

    cursor: pointer;
    height: 1rem;
    /* identical to box height */

    /* Gray 4 */

    color: #bdbdbd;

    &:hover {
      color: red;
    }
  }
`;

export const Soma = styled.div `
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e0e0e0;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #828282;
  }
`;

export const RemoverTodos = styled.button `
  width: 100%;
  height: 3rem;
  background-color: #e0e0e0;
  border: 1px solid red;
  color: #828282;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
`;