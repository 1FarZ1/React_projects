import { useEffect, useState } from 'react'
import data from './data.ts'
import './index.css'

function App() {
  const [items,setItems] = useState(data);
  const [category,setCategory] = useState<any[]>([]);


  useEffect(()=>{
    
    const allCategory:unknown[]=[];
    allCategory.push('all');
    items.forEach((elm)=>{
      if(!allCategory.includes(elm.category)){
        allCategory.push(elm.category);
      }
    });
    setCategory(allCategory);
  },[])
  return (
    <main>
        <section className='menu section'>
          <div className='title'>
            <h2>our menu</h2>
            <div className="title-underline"></div>
            </div>
            <div className='btn-container'>
              {
                category.map((elm,index)=>{
                  return <div key={index}>
                   
                      <button className='btn'>
                        {
                          elm
                        }
                      </button>
                    
                  </div>
                })
              }

            </div>
            <div className='section-center'>
              {
                items.map((elm)=>{
                    return <div className="menu-item" key={elm.id}>
                        <img src={elm.img} alt={elm.title} className="img" />
                        <div className="item-info">
                          <header>
                            <h5 className='item-text'>{elm.title}</h5>
                            <h5 className="item-price">{elm.price}</h5>
                          </header>
                          <p className="item-text">{elm.desc}</p>
                    </div>
                  </div>
              }
                )}
              </div>
        </section>
    </main>
  )
}

export default App
