import React from "react";

export default function Counter() {
  console.log("start of application");
  const [count, setCount] = React.useState(5);

  const increment = () => {
    // setCount((prev) => {
    //   return prev + 1;
    // });
    // setCount((prev) => {
    //   return prev + 1;
    // });
    setCount(count + 1);

    console.log("Inside of increment function", count);
  };

  return (
    <>
      <h1>My React App {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}
