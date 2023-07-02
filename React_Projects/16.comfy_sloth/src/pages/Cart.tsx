import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CartContent from '../components/CartContext'

const CartPage = () => {
  return ( <main> 
    <PageHero title='cart' /> 
    <Wrapper className='page'>
      <CartContent />
        </Wrapper>
        </main>
   );
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage