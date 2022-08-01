import Product from "../Product";
import { ListaProdutos } from "./style";

const ProductsList = ({ products, handleClick, filteredProducts }) => {
  return (
    <ListaProdutos>
      {products.map((element) => (
        <Product
          products={products}
          product={element}
          key={element.id}
          handleClick={handleClick}
        />
      ))}
    </ListaProdutos>
  );
};

export default ProductsList;
