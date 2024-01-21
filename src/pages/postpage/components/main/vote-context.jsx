import { useEffect } from "react"
import { createContext,  } from "react"

const VotesContext = createContext();
const VotesProvider = ({children}) => {
    function updateVotes

    return <VotesContext.Provider value={{}} >
        {children}
    </VotesContext.Provider>
}

export {VotesProvider, VotesContext}