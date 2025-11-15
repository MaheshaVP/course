
import React, { useState } from 'react'
import './App.css'
import Test from './Test';

//functional component
//state and props 
//Event handler
const App = () => {
  const[data, setData] = useState({
    name: 'mahesh',
    age: 24
  })

  const {name, age} = data;

  const[name1, setName1] = useState('');

  return (
    <div>

        {/* <Test name={name} age={age}/> */}
        <h5>Name : {name1}</h5><br />
        <input type="text" name='name' onChange={(e)=>setName1(e.target.value)} /><br />
        <button onClick={() => alert(`Hello ${name1}`)}>Click me</button>

        <br />
          <Test name={name} age ={age}/>

    </div>
  )
}


//class component
// class App extends React.Component {
//   render() {
//     let name = 'Mahesh';
    
//     return (
//       <div>
//         <h1>My name is {name}</h1>
//       </div>
//     )
//   }
// }

export default App