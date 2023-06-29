/* eslint-disable @typescript-eslint/no-empty-function */
import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext({
    loading: false,
    cocktails: [],
    setSearchTerm: (value: any) => {
    },

})

// type Tdrink = {

// }

const AppProvider = ({ children }:any) => {

    const [loading , setLoading] = useState(false);
    const [searchTerm , setSearchTerm] = useState('a');
    const [cocktails,setCocktails] = useState([]);

    const fetchData = useCallback(async ()=>{
        setLoading(true);
        const res =  await axios.get(url + searchTerm);
        setCocktails(res.data.drinks);
        setLoading(false);

    },[searchTerm]);


    useEffect(()=>{
        fetchData(); 
    },[searchTerm])
  return <AppContext.Provider value={
    {
        loading: loading,
        cocktails: cocktails,
        setSearchTerm: setSearchTerm,
    }
  }>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }