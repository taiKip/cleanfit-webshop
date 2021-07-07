import { createContext,Dispatch } from "react";
type searchContextType = {
    searchItem: string,
    setSearchItem: (a: string) => void;
}
const SearchContext = createContext<searchContextType>({searchItem:'',setSearchItem:(a)=>console.warn('no string provided')})

export default SearchContext;