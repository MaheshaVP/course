import { useState } from "react";

function Car() {

    // const [brand, setBrand] = useState("Ford");
    // const [model, setModel] = useState("Mustang");
    // const [year, setYear] = useState("1964");
    // const [color, setColor] = useState("red");

    const [car,setCar] = useState({
        carname : "I20",
        brand : "maruthi",
        color : "green",
        year : 1956
    })

    const [count,setCount] = useState(0);

    const changeColor = () => {
        setCar(previousState => {
            return {...previousState, color:"pink"}
        })
    }

    return (
        <div>
            <h1>My {car.carname} </h1>
            <p>
               it is a {car.color} {car.brand} {car.year}.
            </p>
            <button 
            type="button"
            onClick={changeColor}>Pink</button>

            <hr/>

            <h4>Count is : {count}</h4>
            <button 
            type="button"
            onClick={()=>setCount(count + 1)}
            >+</button>
            <hr/>
        </div>
    )
}

export default Car