import {useState} from "react"

export const useBoolean = (initialValue) =>{

    const [boolean, setBoolean] = useState(initialValue);

    const setTrue = () => setBoolean(true);
    
    const setFalse = () => setBoolean(false);

    const setTogle = () => setBoolean(!boolean);

    return {
        boolean,
        setTrue,
        setFalse,
        setTogle
    }
}