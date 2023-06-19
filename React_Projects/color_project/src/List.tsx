import React from 'react'
import SingleColor from './singleColor';
import { nanoid } from 'nanoid';

export default function List({colors}:any) {
  return (
    <section className='colors'>
        {
            colors.map((color:any,index:number)=>{
                return <SingleColor key={nanoid()} color={color} index={index} />;
            })
        }
    </section>
  )
}
