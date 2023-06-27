import { FaTimes } from 'react-icons/fa';
import  appContext from '../context/appContext';
import sublinks from '../data';
import { useContext } from 'react';
const SideBar = () => {
  const  {isSidebarOpen,closeSidebar} = useContext(appContext);
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item) => {
            return (
              <article key={item.pageId}>
                <h4>{item.page}</h4>
                <div className='sidebar-sublinks'>
                  {item.links.map((link) => {
                    return (
                      <a key={link.id} href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export  {SideBar};