//useRef()

import { useEffect, useRef, useState } from "react";

function Fourthhook() {
    const[inputValue, setInputValue] = useState("");
    const count = useRef(0);

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    }
  
    useEffect(() => {
        count.current += 1;
    })


    return(
        <div>
            <p>Type in the input field : </p>

            <input type="text" 
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}/>

            <h4>The render is : {count.current}</h4>

            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus input</button>
        </div>
    )
}

export default Fourthhook;


