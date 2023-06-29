import React from 'react'
import { useGlobalContext } from '../context/AppContext'
import Loading from './loading'
import Card from './Card';

export default function Menu() {
    const {cocktails , loading } = useGlobalContext()
    console.log(cocktails);
    if(loading){
        return <Loading/>;
    }

    if (cocktails.length < 1) {
        return (
          <h2 className='section-title'>
            no cocktails matched your search criteria
          </h2>
        )
      }
    return (
        <section className='section'>
        <h2 className='section-title'>cocktails</h2>
        <div className='cocktails-center'>
          {cocktails.map((item:any) => {
            return <Card key={item.id} {...item} />
          })}
        </div>
      </section>
    )

}
