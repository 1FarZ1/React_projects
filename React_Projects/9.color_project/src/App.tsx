import { useState } from 'react'
import './App.css'
import List from './List';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';



function App() {
  const [color,setColor] = useState<string>('#f15025');
  const [colors,setColors] = useState(new Values('#f15025').all(10));
  const handleSubmit  =(e:any)=>{
    e.preventDefault();
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error:any) {
      toast.error(error.message);
    }
  }

  return (
    <main >
  <ToastContainer position='top-center' />
    <section className="container">
    <form className='color-form' onSubmit={handleSubmit}>
      <input
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type='text'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button className='btn' type='submit' style={{ background: color }}>
        submit
      </button>
    </form>
    </section>

    <List colors={colors}/>
  </main>
  )
}

export default App
