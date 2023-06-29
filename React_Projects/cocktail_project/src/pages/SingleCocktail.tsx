import axios from 'axios';
import React from 'react'
import {Link, useParams} from "react-router-dom"

const url ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export default function SingleCocktail() {
    const {id} =  useParams();
    const [loading , setLoading] = React.useState(false);
    const [cocktail , setCocktail] = React.useState<any>(null);
    const [ingrediants,setIngrediants]  = React.useState<any[]>([]);
    const fetchData = async ()=>{
        setLoading(true);
        const res = await axios(url + id);
        let i = 1;
        const q = "strIngredient"
        const temp = [];
        while(res.data.drinks[0][q+i]){
            temp.push(res.data.drinks[0][q+i]);
                i++;
        }
        setIngrediants(temp);
        setCocktail(res.data.drinks[0]); 
        setLoading(false);
    }

    React.useEffect(()=>{
        fetchData();
    },[id])
    if(loading){    
        return <h2 className='section-title'>Loading...</h2>
    }
    if(!cocktail){
        return <h2 className='section-title'>No cocktail to display</h2>
    }

    return (
        <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{cocktail.strDrink}</h2>
        <div className='drink'>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {cocktail.strDrink}
            </p>
            <p>
              <span className='drink-data'>category :</span> {cocktail.strAlcoholic}
            </p>
            <p>
              <span className='drink-data'>info :</span> {cocktail.strDrink}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {cocktail.strGlass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {cocktail.strInstructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingrediants.map((item, index) => {
                console.log(ingrediants);
                return item ? <span key={index}> {item}</span> : "no ingrediants"
              })}
            </p>
          </div>
        </div>
      </section>
    );
}
