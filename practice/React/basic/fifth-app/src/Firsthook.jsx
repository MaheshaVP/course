//useState
import { useState } from "react";


function Firsthook () {
    const[car, setCar] = useState({
        brand : "Ford",
        color : "red",
        model : "mustag",
        year : 1984
    });
    const[count, setCount] = useState(0)

    const changeColor = () => {
        setCar(previousState =>{
            return{...previousState, color:"Blue" , brand:"SUV"}
    });
    }

    const decrement = () => setCount(count - 1);

    const increment = () => {
        setCount(count => count + 1)
    }

    return (
        <div>

            <h1>My car is {car.brand}</h1>
            <p>
                And it is {car.color} colored {car.model} invented in {car.year}
            </p>

            <button type="button" onClick={changeColor}>Blue Car</button>
            <br/>
            <hr />
            <button onClick={decrement}>decrement</button>
            <h1>The count is : {count}</h1>
            <button onClick={increment}>increment</button>

        </div>
    )
}

export default Firsthook;