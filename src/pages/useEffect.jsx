import React, { useState, useEffect } from "react";

function UseEffectPage() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("useEffect is called");
  }, [count]);
  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </> 
  );
}

export default UseEffectPage;
