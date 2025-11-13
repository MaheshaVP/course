//Conditional Rendering

import { useState } from "react"

function Conditional () {
    const[showPwsd, setShowPswd] = useState(false);


    return (
        <div>
            <input type={showPwsd? "text": "password"} placeholder="Enter password" />

            <button onClick={()=>setShowPswd(!showPwsd)}>
                {showPwsd ? "Hide" : "show"}
            </button>
        </div>
    )
}

export default Conditional;