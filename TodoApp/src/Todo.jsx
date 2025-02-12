import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todo.css'


export default function TodoList() {
    let [todos,setTodos] = useState([{task: "Sample-task" , id: uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo] = useState("");

    function addNewTask() {
        setTodos((prevTodos)=> {
            return[...prevTodos,{task:newTodo, id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
    }

    let updateTodoValue= (event) => {
        setNewTodo(event.target.value);
        // console.log(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
    }

    let markAllDone = () => {
        setTodos ( (prevTodos) => 
            prevTodos.map((todo)=> {
            return{
                ...todo,
                // task:todo.task.toUpperCase()
                isDone:true,
            };
        })
    );
    };

    let markasDone = (id) => {
        setTodos ( (prevTodos) => 
            prevTodos.map((todo)=> {
                if(todo.id == id) {
                    return{
                        ...todo,
                        isDone:true,
                    };
                }else{
                    return todo;
                }
            
        })
    );
    }

    let uppercaseAll = () => {
        setTodos((todos) => 
        todos.map((todo) => {
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            };
        })
        );
    }

    return(
        <div>

            <div className="tasks">
            <h1>Tasks Todo</h1>
            <ol type="number">
                {
                    todos.map((todo)=> (
                        <li key={todo.id}>
                            <span style={todo.isDone? {textDecorationLine:"line-through"} : {}}>
                                {todo.task}
                                </span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)} className="delete"><i class="fa-solid fa-trash"></i></button> &nbsp;&nbsp;
                            <button onClick={()=>markasDone(todo.id)} className="done"><i class="fa-solid fa-check"></i></button>
                            </li>
                    ))
                }
            </ol>
            </div>
                
            <div className="bottom">
            <button onClick={uppercaseAll} className="finalbtn">Uppercase All</button>
            <button onClick={markAllDone} className="finalbtn">Mark All as Done</button>
            <br /><br />
            <hr />
            <br />

            <div className="in">
            <input placeholder="Add a task" 
            value={newTodo} 
            onChange={updateTodoValue}>
            </input>
            <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            </div>
            </div>
                
                

        </div>
    );
  }