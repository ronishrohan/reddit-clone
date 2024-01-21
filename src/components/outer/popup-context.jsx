import { createContext, useState } from "react";

let PopupContext = createContext()
const PopupProvider = ({children}) => {
    let [content, setContent] = useState('');
    let [show, setShow] = useState(false)

    function showContent(text){
        setContent(text)
        setShow(true);
        
    }
    function hideContent(){
        setShow(false)
    }
    return <PopupContext.Provider value={{content, show, showContent, hideContent}} >
        {children}
    </PopupContext.Provider>
}

export {PopupContext, PopupProvider}