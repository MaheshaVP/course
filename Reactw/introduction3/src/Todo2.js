import { memo } from "react";

const Todo2 = ({todo}) => {
console.log("child render");

return (
    <>
    <h2>My Todos</h2>
    {todo.map((todo,index)=> {
        return <p key={index}>{todo}</p>
    })}
    </>
)
}

export default memo(Todo2);