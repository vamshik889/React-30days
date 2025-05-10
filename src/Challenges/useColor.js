import { useCallback, useState } from "react";

export default function useColor(...args){
console.log(args);
const [index,setIndex] = useState(0);

const changeColor = useCallback(()=>{
setIndex((prev)=>(prev+1)%args.length)
},[])

return [index,changeColor]
}

