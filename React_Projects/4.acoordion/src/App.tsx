import questions from './data.ts'
import {useState} from 'react'
import './App.css'



// u can change them to seperate component to have indepandent state for each question
function App() {
  const [shown,setShown] = useState<boolean[]>([false,false,false,false,false]);

 return (
  <main>
      <div className="container">
        <h1>
          Questions
        </h1>

       {
        questions.map((elm,index)=>{
          return <div className='question' key={elm.id}>
          <header>
             <h5>{elm.title}</h5>
             <button  onClick={()=>{
                const temp = [...shown];
                temp[index] = !temp[index];
                setShown(temp);
             }} className="question-btn">
            <span className="plus-icon"/>
          </button>
          </header>
 
          {
                 shown[index] &&  <p>{elm.info}</p>
            
          }
   
 
 
 
         </div>
        })
       }
      </div>
  </main>
 )
}

export default App
