import { useState } from 'react'

import './App.css'
import { nanoid } from 'nanoid';
import data from "./data"

function App() {
  const [count,setCount]= useState(0);
  const [text,setText] = useState<string[]>([]);

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    setText(data.slice(0, count));
  }

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item:any) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
      
  )
}

export default App
