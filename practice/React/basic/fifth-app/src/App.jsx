import { useState } from "react";
import Firsthook from "./Firsthook";
import Secondhook from "./Secondhook";
import Time from "./Time";


function App(){
  const[color, setColor] = useState("Pink")

  return(
    <div>
      <Time />
      <hr/>
      <h1>React</h1>
      <p>The color is {color}</p>

      <button type="button" onClick={()=>setColor("Red")}>Red</button>
      <hr/>

      <p>UseState hook</p>
      <Firsthook />
      <hr />

      <p>useEffect hook</p>
      <Secondhook />

    </div>
  )
}

export default App;