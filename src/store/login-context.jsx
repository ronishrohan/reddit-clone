/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const LoginContext = createContext();

const LoginProivder = ({children}) => {
    let [loggedIn, setLoggedIn] = useState(false);
    return(<LoginContext.Provider value={{loggedIn}}>
        {children}
    </LoginContext.Provider>)
}

export {LoginContext, LoginProivder};