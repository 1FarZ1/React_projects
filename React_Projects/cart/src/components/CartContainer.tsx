import { useContext } from 'react';
import CartItem from './CartItem';
import { cartContext } from '../context/cartContext';
const CartContainer = () => {
    const {cart,reset,cost }= useContext(cartContext);

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>$ {cost}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() =>reset()}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;