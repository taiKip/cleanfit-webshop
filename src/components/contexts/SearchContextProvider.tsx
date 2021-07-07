import React, { ReactNode } from 'react'
import { useState } from 'react'
import SearchContext from './SearchContext'

const SearchContextProvider = ({children}:{children:ReactNode}) => {
    const [searchItem, setSearchItem] = useState<string>('')
    return (
        <SearchContext.Provider value={{searchItem,setSearchItem }}>
            {children}
       </SearchContext.Provider>
    )
}

export default SearchContextProvider;
