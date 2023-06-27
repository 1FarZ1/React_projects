import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { cartContext } from '../context/cartContext';
const NavBar = () => {
    
    const {amount}  = useContext(cartContext);
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;