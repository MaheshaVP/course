import Car from "./Car";
import Car1 from "./Car1";
import Car5 from "./Car5"
import Car6 from "./Car6";
import Conatiner from "./Container";

function App() {
  return (
    <div className= "App">
      <h1>Hello world</h1>

      <Car color="red"/>
      <hr/>

      <Conatiner/>
      <hr/>

      <Car1 />
      <hr/>

      <Car5/>
      <hr/>

      <Car6/>
    </div>
  );

}
export default App