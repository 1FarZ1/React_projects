import { FaBars } from "react-icons/fa";
import  Appcontext  from "../context/appContext";  
import sublinks from "../data";
import { useContext } from "react";
export function Navbar() {
  const data  = useContext(Appcontext);
  const openSidebar   = () => {
    console.log('openSidebar')
  }
  return (
    <nav >
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <div className='nav-links'>
      {
        sublinks.map((link)=>{
          return <button className="nav-link" key={link.pageId}>
              {link.page}
             </button>
        })
      }
    </div>
      </div>
    </nav>
  )
}
