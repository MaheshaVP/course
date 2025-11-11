//useEffect

import { useEffect, useState } from "react";

function Secondhook () {
    const[count, setCount] = useState(0)
    const[calculation, setCalculation] = useState(0)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count)=> count + 1)
    //     }, 1000);
    // },[]);


    //timeout and clear
    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setCount((count)=> count + 1)
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // },[]);

    useEffect(() => {
        setCalculation(() => count * 2)
    },[count])

    return(
        <div>
            {/* <h1>I have rendered {count} times</h1> */}

            <p>Count : {count}</p>
            <button onClick={()=>setCount((count) => count + 1)}>+</button>
            <p>Calculation : {calculation}</p>
        </div>
    )
}

export default Secondhook;