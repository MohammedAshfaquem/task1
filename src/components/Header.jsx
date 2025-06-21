import { useState, useEffect } from "react";

function Header(props) {
  const [count, setCount] = useState(0);
  const clicked = () => {
    return setCount(count + 1);
  };

  useEffect(() => {
    console.log("Abcd" + count);
  }, []);

  return (
    <div className={props.className}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <img src="./assets/sign.png" alt="" />
    </div>
  );
}

export default Header;
