import react,{createContext, useState, useEffect } from 'react'

import { fetchDataFromApi } from '../utils/api'

export const context = createContext()

export const AppContext = (props) => {
    const [loading,setLoading] = useState(false) 
    const [searchResults, setSearchResults] = useState([])
    const [selectCategory,setSelectCategory] = useState("New")
    const [mobileMenu,setMobileMenu] = useState(false)

    useEffect(() => {
      fetchSelectedCatogaryData(selectCategory)
    }, [selectCategory])
    
    const fetchSelectedCatogaryData =(query) =>{
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(
            ({contents}) => {
                console.log(contents)
                setSearchResults(contents)
                setLoading(false)
            }
        )
    }


    return (
        <context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectCategory,
                setSelectCategory,
                mobileMenu,
                setMobileMenu
            }}
        >
            {props.children}
        </context.Provider>
    )

}



