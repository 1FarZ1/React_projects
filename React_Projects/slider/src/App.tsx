import { useState,useEffect } from 'react'
import  {longList}  from './data'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


import './App.css'

function App() {
  const [personIndex,setPersonIndex] = useState(0);

  

  useEffect(() => {
    const sliderId = setInterval(() => {
      setPersonIndex((prev) => {
        return (prev + 1) % longList.length;
      })
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [personIndex]);

  return (
    <main>

      <h2>Reviews</h2>
        <div className="slider-container">
        {
          longList.map((elm:any,index:number)=>{
              return  <article
              className='slide'
              style={{
                transform: `translateX(${100 * (index - personIndex)}%)`,
                opacity: index === personIndex ? 1 : 0,
                visibility: index === personIndex ? 'visible' : 'hidden',
              }}
              key={elm.id}
            >
              <img src={elm.image} alt={elm.name} className='person-img' />
              <h5 className='name'>{elm.name}</h5>
              <p className='title'>{elm.title}</p>
              <p className='text'>{elm.quote}</p>
            </article>       
          })
           
        }
        <button className='prev' onClick={()=>{
            setPersonIndex((prev) => {
               return  (prev - 1 + longList.length) % longList.length;
            });
        }}>
          <FiChevronLeft/>
        </button>

        <button className='next' onClick={()=>{
          setPersonIndex((prev) => {
            return (prev + 1) % longList.length;
          })
        }}>
          <FiChevronRight/>
        </button>
        </div>
    </main>
  )
}

export default App
