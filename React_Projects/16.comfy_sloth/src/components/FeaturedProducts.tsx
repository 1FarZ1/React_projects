import React from 'react'
import { useProductsContext } from '../context/product_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'



const FeaturedProducts = () => {
    const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext()

      return <Wrapper className="section">
    <div className="title">
        <h2>featured products</h2>
    </div>
    <div className="section-center featured">
        {
            loading ? <Loading/> : error ? <Error/> : featured.map((product,index) => {
                const {id,name,image,price} = product
              if(index <= 2){
                return <article key={id}>
                <Link to={`/products/${id}`}>
                    <img src={image} alt={name}/>
                </Link>
                <h4>{name}</h4>
                <p>${price}</p>
            </article>
              }
            }
            )}
    </div>
    <Link to="/products" className="btn">
        all products
    </Link>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts