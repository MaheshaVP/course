import { useRef } from "react";

export default function Focusinp() {
    const inputElement = useRef();

    const handleInput = () => {
        inputElement.current.focus();
    }

    return(
        <div>
            <input 
            type="text"
            ref={inputElement}/><br/>
            <button type="button" onClick={handleInput}>Focus Input</button>
        </div>
    )
}