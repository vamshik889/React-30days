import { useState } from "react"

const useToggle = (initialValue = true)=>{  //default param to avoid errors if the value is not passed
    const [isToggle,setIsToggle] = useState(initialValue);

    const toggle = ()=>{
        setIsToggle(!isToggle)
    }
    return [toggle,isToggle]
}
export default useToggle