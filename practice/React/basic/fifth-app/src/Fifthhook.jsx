import React,{ useCallback, useState } from "react";

const Button = React.memo(({onClick,text}) =>{
    console.log(`${text} button rendered`);
    return <button onClick={onClick}>{text}</button>
})

function Fifthhook () {
    const[count1, setCount1] = useState(0);
    const[count2, setCount2] = useState(0);

    const handleClick1 = useCallback(() => {
        setCount1(count1 + 1)
    }, [count1]);

    const handleClick2 = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2]);

    console.log("Parent rendered");
    return(
        <div>
            <h1>useReducer hook</h1>
            <p>Count1 : {count1}</p>
            <p>Count2 : {count2}</p>
            <Button onClick={handleClick1} text="Button1"/>
            <Button onClick={handleClick2} text="Button2"/>
        </div>
    )
}

export default Fifthhook;