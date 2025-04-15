import { useState } from "react";
import Todo2 from './Todo2';
import Header from "./Header";

const App2 = () => {
const [count,setCount] = useState(0);
const [todo,setTodo] = useState(["todo 1","todo 2"]);

const increment = () => {
    setCount((c)=> c + 1);
}

return (
    <>
    <Todo2 todo={todo}/>
    <hr/>
    <div>
        Count : {count}
        <button onClick={increment}>+</button>
    </div>

    <Header/>
    </>
)


}

export default App2;