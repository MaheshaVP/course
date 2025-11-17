//ContextAPI
import { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Count from "./Count";
import Display from "./Display";
import './App.css'


export const store = createContext();

function App() {
  const [data, setData] = useState([
    {
      brandname: "Nokia"
    },
    {
      brandname: "Realme"
    },
    {
      brandname: "MI"
    }
  ]);

  return(
    <store.Provider value={[data, setData]} >
      <h1>Context API</h1>
      <Count />
      <Display />
    </store.Provider>
  )
} 

export default App;


