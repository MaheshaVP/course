import { memo } from "react";


const Todo1 = ({todos,addTodo}) => {
    console.log("child render");

    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo,index)=>{
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default memo(Todo1)