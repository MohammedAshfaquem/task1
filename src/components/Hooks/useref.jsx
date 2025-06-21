import React, { useRef } from "react";

function Useref() {
    const inputRef = useRef(null)

    const cliked =()=> {
         inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type " />
            <button onClick={cliked}>click do</button>
        </div>
    )
}
export default Useref;


// Access and interact with DOM elements directly.
// Store mutable values that don’t cause re-renders when changed.
// it return a object {currentvalue:initialValue}


// 2. How is useRef different from useState?
// useState triggers a re-render when the state changes.
// useRef does not cause a re-render when .current changes.

// 12. Can you store a function in useRef?
// Yes. You can store anything:
// const myFuncRef = useRef(() => {});
// myFuncRef.current = () => console.log("Updated function")
