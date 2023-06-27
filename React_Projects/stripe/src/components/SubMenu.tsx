import AppContext from '../context/appContext';
import sublinks from '../data';
import { useContext, useRef } from 'react';
const SubMenu = () => {
  const { pageId, setPageId } = useContext(AppContext);
  const currentPage = sublinks.find((item:any) => item.pageId === pageId);

  const submenuContainer = useRef<HTMLDivElement>(null);

  const handleMouseLeave = (e:any) => { 
            console.log(pageId);
      if(submenuContainer.current !=  null){
        const { left, right, bottom } = submenuContainer.current.getBoundingClientRect();
        const { clientX, clientY } = e;
    
        if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
          setPageId(null);
        }
      }
    
  };
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            (currentPage?.links?.length == undefined ? 0 :  currentPage?.links?.length) > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          return (
            <a key={link.id} href={link.url}>
              {link.icon}
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export  {SubMenu};