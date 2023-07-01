import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import { useFilterContext } from '../context/filter_context'
import Filters from '../components/Filters'
import Sort from '../components/Sort'
import GridView from '../components/GridView'
import ListView from '../components/ListView'


const ProductsPage = () => {
    const {filtred_products} = useFilterContext();
    const isGrid =false;

  return <main>
    <PageHero title="products"/>
    <Wrapper className="page">
        <div className="section-center products">
        <Filters/>
        <div>
            <Sort/>
            { isGrid  ? <GridView products={filtred_products}/> : <ListView products={filtred_products}/> }
        </div>
        </div>
        <h1>products page</h1>
       
        </Wrapper>   
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage