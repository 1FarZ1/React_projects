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
        
    }
});


const AppProvider = ({ children } : any) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);

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

    
    return <AppContext.Provider value={
        {
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu
        }
    }>{children}</AppContext.Provider>;
    } 

export default AppContext;
export { AppProvider };
