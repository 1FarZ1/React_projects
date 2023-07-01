import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/product_context'
import { formatPrice } from '../utils/helper'
//   ProductImages,



import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Stars from '../components/Stars'
import ProductImages from '../components/Product_Images'
import AddToCart from '../components/AddToCart'






const SingleProductPage = () => {
    const {getSingleProduct ,single_product,single_product_error,single_product_loading } = useProductsContext();
    const {id} = useParams();
    useEffect(()=>{
        getSingleProduct(id);
    },[id])
    return <Wrapper className='page' >
        <PageHero title="single product "/>
        <div className="section section-center page">
            <Link to="/products" className="btn">
                back to products
            </Link>
            {single_product_loading ? <Loading/> : single_product_error ? <Error/>: <div className="product-center">
                <ProductImages images={single_product.images} />
                <section className="content">
                    <h2>{single_product.name}</h2>
                    <Stars stars={single_product.stars} reviews={single_product.reviews} />
                    <h5 className="price">{formatPrice(single_product.price)}</h5>
                    <p className="desc">{single_product.description}</p>
                    <p className="info">
                        <span>Available : </span>
                        {single_product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <p className="info">
                        <span>SKU : </span>
                        {single_product.id}
                    </p>
                    <p className="info">
                        <span>Brand : </span>
                        {single_product.company}
                    </p>
                    <hr />
                    {single_product.stock > 0 && <AddToCart />}
                </section>
            </div>}
        </div>

    </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage