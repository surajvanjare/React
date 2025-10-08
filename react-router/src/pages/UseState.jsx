import React, { useState, useEffect } from "react";

const UseState = () => {
  // State variable to store the count
  const [count, setCount] = useState(0);

  // State variable to store a message
  const [message, setMessage] = useState("");

  // useEffect to update the document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useEffect to update message whenever count changes
  useEffect(() => {
    if (count === 0) {
      setMessage("Click the button to start counting!");
    } else if (count > 0 && count < 5) {
      setMessage("Keep going, you are doing great!");
    } else {
      setMessage("Wow, that’s a high count!");
    }
  }, [count]);

  // Handler functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>useState & useEffect Example</h1>
      <p><strong>Count:</strong> {count}</p>
      <p><em>{message}</em></p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default UseState;
