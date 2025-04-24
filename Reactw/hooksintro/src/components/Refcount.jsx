import { useState,useEffect,useRef } from "react";

export default function Refcount() {
    const [input,setInput] = useState("");
    const count = useRef(0);

    useEffect(()=> {
        count.current = count.current + 1;
    })

    return(
        <div>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)} />

            <h1>Render Count : {count.current}</h1>
        </div>
    )


}

