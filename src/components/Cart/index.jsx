import {
  Carrinho,
  ConteudoCarrinho,
  ItemCarrinho,
  Soma,
  RemoverTodos,
} from "./style";

const Cart = ({ currentSale, setCurrentSale }) => {
  function deleteItem(event) {
    const id = +event.target.id;
    return setCurrentSale(
      currentSale.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <Carrinho>
      <h3>Carrinho de Compras</h3>

      <ConteudoCarrinho>
        {currentSale.length > 0 ? (
          currentSale.map((item) => {
            return (
              <ItemCarrinho>
                <img src={item.img} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                </div>
                <span
                  onClick={(e) => {
                    console.log(e);
                    console.log(e.target);
                    deleteItem(e);
                  }}
                  id={item.id}
                >
                  X
                </span>
              </ItemCarrinho>
            );
          })
        ) : (
          <>
            <h4>Carrinho Vazio</h4>
            <p>Inclua um item</p>
          </>
        )}
      </ConteudoCarrinho>

      {currentSale.length > 0 ? (
        <Soma>
          <div>
            <h5>Total</h5>
            <p>
              {currentSale
                .reduce((previous, current) => {
                  return previous + current.price;
                }, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </p>
          </div>
          <RemoverTodos onClick={() => setCurrentSale([])}>
            Remover Todos
          </RemoverTodos>
        </Soma>
      ) : (
        <></>
      )}
    </Carrinho>
  );
};

export default Cart;
