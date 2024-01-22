/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
const LoginContext = createContext();

const LoginProivder = ({children}) => {
    let [loggedIn, setLoggedIn] = useState(false);
    function updateLoggedIn(){
        console.log("triggered update")
        setLoggedIn(true)
    }
    useEffect(() => {
        console.log(loggedIn)
    }, [loggedIn])
    return(<LoginContext.Provider value={{loggedIn, updateLoggedIn}}>
        {children}
    </LoginContext.Provider>)
}

export {LoginContext, LoginProivder};