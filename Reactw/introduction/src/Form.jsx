import { useState } from "react";
import React from "react";

function Form() {
    const [name,setName] = useState("");

    return(
        <form>
            <label>
                enter your name : 
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>

            </label>
        </form>
    )
}

export default Form;