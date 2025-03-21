import React, { createContext,useContext,useState,useEffect } from 'react'

export const AppContext = createContext();

const getInitialMode = ()=>{
    const preferDarkMode =  window.matchMedia('(prefers-color-scheme:dark)').matches;

    const storedDarkMode = localStorage.getItem("darkTheme");
    if(storedDarkMode !== null){
        return JSON.parse(storedDarkMode) ;  
    }
    return preferDarkMode ;
}

export const AppProvider = ({children}) => {

    const [isDarkTheme,setIsdarkTheme] = useState(getInitialMode());
    const [searchTerm,setSearchTerm]   = useState("cat")

    const toggleDarkTheme = ()=>{
        const newDarkTheme = !isDarkTheme
        setIsdarkTheme(newDarkTheme);
        localStorage.setItem("darkTheme",JSON.stringify(newDarkTheme ));
    }

    useEffect(()=>{
        document.body.classList.toggle("dark-theme",isDarkTheme)
    },[isDarkTheme])

  return <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = ()=>useContext(AppContext)  //custom hook for the context