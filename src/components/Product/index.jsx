import { Card, Imagem, Texto, BtnAdicionar } from "./style";

const Product = ({ products, product, key, handleClick, filteredProducts }) => {
  return (
    <Card key={product.id}>
      <Imagem>
        <img src={product.img} alt="" />
      </Imagem>
      <Texto>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>
          {" "}
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <BtnAdicionar onClick={() => handleClick(product.id)}>
          Adicionar
        </BtnAdicionar>
      </Texto>
    </Card>
  );
};

export default Product;
