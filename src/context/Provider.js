import React ,{useState} from "react";
import Context from "./Context";

function Provider({ children }) {
    const [name, setName] = useState('')
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [changeInputs,setChangeInputs] = useState([])
    const globalState = { name, setName, isMenuActive, setIsMenuActive, changeInputs, setChangeInputs }
    return (
        <Context.Provider value={globalState}>{children}</Context.Provider>
    )
}  
export default Provider