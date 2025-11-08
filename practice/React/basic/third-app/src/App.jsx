import Form from "./Form"
import Myform from "./Myform"
import Radio from "./Radio"
import Myapp from "./Myapp"
import Myfruits from "./Myfruits"
import { Suspense } from "react"
import Css from "./Css"


function App(){
  return(
    <div>
      <Css />

      <h1 style={{color:"green", backgroundColor:"lightgray"}}>Hello React</h1>
      <Form />

      <Myform />

      <Radio />
      <br/>
      <Myapp />
      <br/>
      
        <Suspense fallback={<div>Loading....</div>}>
          <Myfruits />
        </Suspense>

    </div>
  );
}

export default App