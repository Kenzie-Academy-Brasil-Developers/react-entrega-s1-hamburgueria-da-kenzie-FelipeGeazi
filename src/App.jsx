import {
  Header,
  Logo,
  BarraPesquisa,
  InputDigitado,
  ButtonPesquisar,
  Main,
} from "./styles/style";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [currentSale, setCurrentSale] = useState([]);

  /* const [cartTotal, setCartTotal] = useState(0); */

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        return setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function showProducts(value) {
    //setFilteredProducts(value);
    const itemPesquisado = products.filter(
      (item) =>
        item.category.includes(filteredProducts) ||
        item.name.includes(filteredProducts)
    );
    setFilteredProducts([itemPesquisado]);
    setProducts([itemPesquisado]);
  }

  console.log(filteredProducts);

  function handleClick(productId) {
    const itemEscolhido = products.find((item) => {
      return item.id === productId;
    });
    const itemIncluso = currentSale.find((item) => {
      return item.id === productId;
    });
    console.log(itemIncluso);
    if (itemIncluso === undefined) {
      setCurrentSale([itemEscolhido, ...currentSale]);
      return <Cart key={productId} currentSale={currentSale} />;
    } else {
      alert("Item já Incluso no carrinho");
    }
  }

  return (
    <>
      <Header>
        <Logo>Burguer kenzie</Logo>
        <BarraPesquisa>
          <InputDigitado
            type="text"
            placeholder="Digite a sua pesquisa"
            // value={filteredProducts}
            onChange={(event) => setFilteredProducts(event.target.value)}
          />
          <ButtonPesquisar
            type="button"
            onClick={(event) => showProducts(event.target.value)}
          >
            Pesquisar
          </ButtonPesquisar>
        </BarraPesquisa>
      </Header>
      <Main>
        <ProductsList products={products} handleClick={handleClick} />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </Main>
    </>
  );
}
export default App;
