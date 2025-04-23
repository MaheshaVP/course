import React,{useState} from "react";

function Favcolor() {
    const [color,setColor] = useState("red");


    return(
        <>
        
        <h1>My fav color is {color}</h1>

        <br/>

        <button type="button" onClick={()=>setColor("blue")}>Blue</button><br/>
        <button type="button" onClick={()=>setColor("red")}>red</button><br/>
        <button type="button" onClick={()=>setColor("yellow")}>yellow</button><br/>
        <button type="button" onClick={()=>setColor("pink")}>Pink</button><br/>



        </>
    )
}

export default Favcolor;