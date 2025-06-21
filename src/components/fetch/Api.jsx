import { useState } from "react";

function Api() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <>
      <div>
        {data ? (
          <img src={data.results[0].picture.large} alt="" />
        ) : (
          "Loading....."
        )}
      </div>
      <button onClick={fetchData}>Click Me</button>
    </>
  );
}

export default Api;
