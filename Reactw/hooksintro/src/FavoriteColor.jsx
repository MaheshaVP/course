import { useState } from "react";

function FavoriteColor() {
    const [color,setColor] = useState("Blue");

    return (
        <div>
            <h1>My fav color {color}</h1>

            <button 
            type="button"
            onClick={()=>setColor("pink")}>
                Pink</button>
        </div>
    )
}


export default FavoriteColor