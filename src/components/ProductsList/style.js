import styled from "styled-components";

export const ListaProdutos = styled.ul `
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;

  width: 100vw;
  padding: 1rem;
  flex-wrap: nowrap;
  overflow: auto;

  list-style: none;
  gap: 1rem;

  @media (min-width: 700px) {
    flex-wrap: wrap;
    width: 60%;
    overflow: auto;
    margin-left: 2rem;
  }
`;