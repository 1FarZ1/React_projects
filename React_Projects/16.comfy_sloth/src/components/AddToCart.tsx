import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButton'

const AddToCart = (props:any) => {
    const {addToCart} = useCartContext();
    const [currentColor,setCurrentColor] = useState(0);
    const [amount,setAmount]= useState(1);
    const increase = () => {
        if(amount < props.stock){
            setAmount(amount +1)
        }
    }
    const decrease = ()=>{

        if(amount > 1 ){
            setAmount(amount -1)

        }
    }


  return <Wrapper>
    <div className="colors">
        <span>colors :</span>
      <div>
        {
            props.colors.map((color:any, index:any) => {
                const isActive =currentColor === index;
                return <button key={index}  style={{background:color}}  onClick={()=>setCurrentColor(index)} className={isActive ? "color-btn active" : "color-btn"}  
                 >
{                    isActive && <FaCheck/>
}                  </button>
            })
              
        }
      </div>
    </div>
    <div className="btn-container">
        <AmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease} 
        />
        <Link to="/cart" className="btn" onClick={()=>{
          addToCart(props.id,props.colors[currentColor],amount,props);
        }}>
            add to cart
        </Link>
    </div>

  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart