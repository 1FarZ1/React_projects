import React from "react";


const AppContext =  React.createContext({
    isSidebarOpen: false,
    isSubmenuOpen: false,
    openSidebar: () => {
        console.log('openSidebar')
    },
    closeSidebar: () => {
        console.log('closeSidebar')
    },
    openSubmenu: () => {
        console.log("open SubMenu")
    },
    closeSubmenu: () => {
        console.log("close SubMenu");
        
    },
    pageId: null,
    setPageId: (value:any) =>{
        console.log("new value");
    },
});


const AppProvider = ({ children } : any) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
    const [pageId, setPageId] = React.useState(null);


    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    const newPageId = (value:any)=>{
        setPageId(value)
    }

    
    return <AppContext.Provider value={
        {
            isSidebarOpen: isSidebarOpen,
            isSubmenuOpen: isSubmenuOpen,
            openSidebar: openSidebar,
            closeSidebar: closeSidebar,
            openSubmenu: openSubmenu,
            closeSubmenu: closeSubmenu,
            pageId: pageId,
            setPageId:newPageId ,
        }
    }>{children}</AppContext.Provider>;
    } 

export default AppContext;
export { AppProvider };
