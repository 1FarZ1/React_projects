import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props:any) {
  return (
    <article className='cocktail'>
    <div className='img-container'>
      <img src={props.strDrinkThumb} alt={props.strDrink} />
    </div>
    <div className='cocktail-footer'>
      <h3>{props.strDrink}</h3>
      <h4>{props.strGlass}</h4>
      <p>{props.strInstructions}</p>
      <Link to={`/cocktail/${props.idDrink}`} className='btn btn-primary btn-details'>
        details
      </Link>
    </div>
  </article>
  )
}
