import { useEffect, useRef, useState } from "react";

// function PreviousCount() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(null)

//   useEffect(()=>{
//     prevCount.current = count;
//     console.log(prevCount.current);

//   })
//   const onClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >

//       <h1>Current count :{count}</h1>
//       <h2>Prev Count:{prevCount.current}</h2>
//       <button onClick={onClick}>Click Do</button>
//     </div>
//   );
// }

function Prevtext() {
  const [input, setInput] = useState("");
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current = input;
  });
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <h1>Current Text:{input}</h1>
      <h1>Previoes Text:{inputRef.current}</h1>
    </div>
  );
}

export default Prevtext;
