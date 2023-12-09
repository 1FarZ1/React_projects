import { useCallback, useEffect, useState } from 'react'
import {FaAngleDoubleRight } from 'react-icons/fa'
import './App.css'
import axios from 'axios';


const endPoint = 'https://course-api.com/react-tabs-project';

function App() {
    const [data,setData] = useState<any[]>([]);
    const [index,setIndex] = useState<number>(0);
  const fetchData =useCallback( async ()=>{
   try {
    const res = await axios.get(endPoint);
    console.log(res.data)
    setData(res.data);
   } catch (error) {
      console.log(error);
   }
  },[] )

  useEffect(
    ()=>{
        fetchData();
    },[fetchData])
  return (
      
          <section className='jobs-center'>
            {
              data.length === 0 ? 
              <div className='loading'/>
            
               : 

            <>
                <div className='button-container'>
                {data.map((item:any, indexMap:number) => {
        return (
          <button
            key={item.id}
            onClick={() => setIndex(indexMap)}
            className={indexMap === index ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        );
      })}
                </div> 
               <div style={{
                "width":"100vh",
              }}>


                <article className='job-info'>
      <h3>{data[index].title}</h3>
      <span className='job-company'>{data[index].company}</span>
      <p className='job-date'>{data[index].dates}</p>
      {
        data[index].duties.map((elm:any,index:number)=>{
          // const id = uuidv4();
          const id =  index;
          return <div key={id} className='job-desc'>
              <FaAngleDoubleRight className="job-icon"  ></FaAngleDoubleRight>
            <p>{elm}</p>
          </div>
        })
      }
    </article>
              </div>
            </>
            }
            </section> 


  
  )
}

export default App
