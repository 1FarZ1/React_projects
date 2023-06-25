import questions from './data.ts'
import {useState} from 'react'
import './App.css'


// you can divide them into componenets , but for now im keeping it that way 
function App() {
  const [shown,setShown] = useState<boolean>(false);

 return (
  <main>
      <div className="container">
        <h1>
          Questions
        </h1>

       {
        questions.map((elm)=>{
          return <div className='question' key={elm.id}>
          <header>
             <h5>{elm.title}</h5>
             <button  onClick={()=>setShown(!shown)} className="question-btn">
            <span className="plus-icon"/>
          </button>
          </header>
 
          {
                 shown &&  <p>{elm.info}</p>
            
          }
   
 
 
 
         </div>
        })
       }
      </div>
  </main>
 )
}

export default App