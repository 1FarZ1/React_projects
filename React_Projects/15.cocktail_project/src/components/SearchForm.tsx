import React from 'react'
import { useGlobalContext } from '../context/AppContext'
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if(searchValue.current !== null){
        searchValue.current.focus();

    }
  }, [])

  function searchCocktail() {
    if(searchValue.current !== null){
        setSearchTerm(searchValue.current.value)

    }
  }
  function handleSubmit(e:any) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}