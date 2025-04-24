import { useState , useCallback } from "react";
import Todo1 from "./Todo1";

export default function App1() {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);

    const inCrement = () => {
        setCount((c)=> c+1)
    }

    const addTodos = useCallback ( () => {
        setTodos((t)=>[...t, "New Todo"])
    },[todos])

    return(
        <div>
            <Todo1 todos={todos} addTodo={addTodos}/>
            <hr/>

            <div>
                Count : {count}
                <button onClick={inCrement}>+</button>
            </div>
        </div>
    )
}