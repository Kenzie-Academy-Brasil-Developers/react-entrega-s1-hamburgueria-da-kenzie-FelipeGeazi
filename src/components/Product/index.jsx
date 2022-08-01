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
        <p>R$ {product.price.toFixed()},00</p>
        <BtnAdicionar onClick={() => handleClick(product.id)}>
          Adicionar
        </BtnAdicionar>
      </Texto>
    </Card>
  );
};

export default Product;
