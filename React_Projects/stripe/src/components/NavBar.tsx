import { FaBars } from "react-icons/fa";
import  Appcontext  from "../context/appContext";  
import sublinks from "../data";
import { useContext } from "react";
export function Navbar() {
  const {openSidebar , setPageId}  = useContext(Appcontext);
  const handleHover = (e:any)=>{
    if(!e.target.classList.contains('nav-link')){
      setPageId(null);
    }
  }
  return (
    <nav  onMouseOver={handleHover}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={()=>openSidebar()}>
          <FaBars />
        </button>
        <div className='nav-links'>
      {
        sublinks.map((item)=>{
          return <button className="nav-link" key={item.pageId}>
              {item.page}
             </button>
        })
      }
    </div>
      </div>
    </nav>
  )
}
