import { useState } from 'react'
import data from './data.tsx'
import './App.css'

function App() {
  const [currentPerson, setCurrentPerson] = useState<number>(0);


  const goNext= ()=>{
    setCurrentPerson((currentPerson)=>{
      if(currentPerson<data.length-1){
        return currentPerson+1;
      }else{
        return 0;
      }
    })
  }
  const goPrev= ()=>{
      setCurrentPerson((currentPerson)=>{
        if(currentPerson>0){
          return currentPerson-1;
        }else{
          return data.length-1;
        }
      })
    }

    const goRandom = ()=>{
      let rndNumber = Math.floor(Math.random() * data.length);
      if(rndNumber === currentPerson){
        rndNumber = rndNumber+1;
      }
      setCurrentPerson(rndNumber);
      
    }


  return (
    <main className='container'>
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>


      <section className='review'> 
      <div className="img-container">
      <img className='person-img' src={data[currentPerson].image} alt="" />
    <span   className='quote-icon'>
      icon
    </span>
      </div>
        <h4 className='author'>{
          data[currentPerson].name
        }</h4>
        <p className='job' >{
          data[currentPerson].job
        }</p>
        <p className='info'>
          {
                 data[currentPerson].text

          }
        </p>

        <div className='btn-container'>
          <button onClick={goNext} className='btn prev-btn'>prev</button>
          <button onClick={goPrev} className='btn next-btn'>next</button>
        </div>

        <button onClick={goRandom} className='btn'>surprise me</button>
      </section>
    </main>
  )
}

export default App
