import React, { useState } from 'react'
import "./App.css"


type item =  {
  id:number,
  text:string
}

const getLocalStorage = () => {
  const isExist = localStorage.getItem('list');
  if(isExist){
     const list = JSON.parse(isExist);
  }

  };


const setLocalStorage = (items:item[]) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');


export default function App() {
  const [items,setItems]= useState<item[]>(defaultList);
  const [text,setText] = useState<string>("");
  const [edit,setEdit] = useState<boolean>(false);
  const [editId,setEditId] = useState<number>(0);
  const handleSubmit = (e:any)=>{
    e.preventDefault()

    const newItem:item = {
      id: Date.now(),
      text: text 
    }
    const newList = [...items,newItem];
    setItems(newList)
    setLocalStorage(newList);
    setText("")

  }

  const handleClick = (e:any,id:number)=>{
    e.preventDefault()
    const newItems = items.filter((elm)=>{
      return elm.id !== id;
    }
    )
    setItems(newItems);
    setLocalStorage(newItems);
    
  }

  const handleEdit = (e:any )=>{
    e.preventDefault();
    const newItems= items.map((elm)=>{
      if(elm.id == editId){
        const newElm = {...elm,text:text};
        return newElm;
      }
      return elm;
    
    })
    setItems(newItems);
    setLocalStorage(newItems);
    setText("");
    setEdit(false);
    setEditId(0);
  }


  return (
<main>
<section className="section-center">
  {
    edit ? 
    <>
      <form onSubmit={handleEdit}>
   <h4>
      EditItem
    </h4>
     <div className='form-control'>
     <input  className='form-input' type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
     <button type='submit' className='btn'>
       Edit item
     </button>

     </div>
    </form> 

    </>
     : <>
     <form onSubmit={handleSubmit}>
   <h4>
      Grocery bud
    </h4>
     <div className='form-control'>
     <input  className='form-input' type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
     <button type='submit' className='btn'>
       Add item
     </button>

     </div>


    </form> 

    {
      items.length === 0 ||  
      <div className="items">
        {
          items.map((elm)=>{
            return <div className="single-item" key={elm.id}>
              <p>{elm.text}</p>
              <button onClick={(e)=>{
                handleClick(e,elm.id);
              }} className='btn remove-btn'>
       remove items
     </button>
              <button onClick={(e)=>{
                setText(elm.text);
                setEdit(true);
                setEditId(elm.id);
              }} className='btn remove-btn'>
       edit item
     </button>
            </div>
          })
        }
      </div>
    }
    
</>
  }

    </section>
</main>
  )
}
