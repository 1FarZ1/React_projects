import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helper'
import { Link } from 'react-router-dom'
const ListView = (props:any) => {
  return <Wrapper>  
   {
         props.products.map((product:any)=>{
                return <article key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div>
                        <h4>{product.name}</h4>
                        <h5 className="price">{formatPrice(product.price)}</h5>
                        <p>{product.description.substring(0,150)}...</p>
                        <Link to={`/products/${product.id}`} className="btn">
                            Details
                        </Link>
                    </div>
                </article>
            }
         )
   }
  </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView