import { useState } from "react";

function Condtition(){
const [defaul,setDefaul] = useState("white")

const clicked = ()=>{
    setDefaul(!defaul)
}
  return (
     <div style={{backgroundColor:defaul?"white":"black",height:"300px"}}>
        <button onClick={clicked}>Click Me</button>
     </div>

  );
}


export default Condtition;