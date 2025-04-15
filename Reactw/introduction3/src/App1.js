import { useState } from "react";
import Todo from "./Todo";
import React from "react";
import App2 from "./App2";

const App1 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
  
    return (
      <>
        <Todo todos={todos} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>

          <hr/>

          <App2/>
        </div>
      </>
    );
  };
  
  export default App1;