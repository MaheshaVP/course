import { useState } from "react";
import Firsthook from "./Firsthook";
import Secondhook from "./Secondhook";
import Time from "./Time";
import Thirdhook from "./Thirdhook";
import Fourthhook from "./Fourthhook";
import Fifthhook from "./Fifthhook";
import Todo from "./Todo";
import Conditional from "./Conditional";
import FetchUsers from "./Fetchusers";


function App(){
  const[color, setColor] = useState("Pink")

  return(
    <div>
      <FetchUsers />
      <hr />

      <Conditional />
      <hr />

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
      <hr />

      <p>useContext hook</p>
      <Thirdhook />
      <hr />

      <p>useRef hook</p>
      <Fourthhook />
      <hr />

      <p>useCallback hook</p>
      <Fifthhook />
      <hr />

      <Todo />

    </div>
  )
}

export default App;