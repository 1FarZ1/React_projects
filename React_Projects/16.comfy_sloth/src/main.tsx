import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProductProvider } from './context/product_context.tsx'
import { FilterProvider } from './context/filter_context.tsx'
import { CartProvider } from './context/cart_context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
)
