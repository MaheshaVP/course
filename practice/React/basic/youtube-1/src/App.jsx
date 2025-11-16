
// import React, { useState } from 'react';
// import './App.css';
// import Test from './Test';

// //functional component
// //state and props 
// //Event handler
// const App = () => {
//   const[data, setData] = useState({
//     name: 'mahesh',
//     age: 24
//   })

//   const {name, age} = data;

//   const[name1, setName1] = useState('');

//   return (
//     <div>

//         {/* <Test name={name} age={age}/> */}
//         <h5>Name : {name1}</h5><br />
//         <input type="text" name='name' onChange={(e)=>setName1(e.target.value)} /><br />
//         <button onClick={() => alert(`Hello ${name1}`)}>Click me</button>

//         <br />
//           <Test name={name} age ={age}/>

//     </div>
//   )
// }


// //class component
// // class App extends React.Component {
// //   render() {
// //     let name = 'Mahesh';
    
// //     return (
// //       <div>
// //         <h1>My name is {name}</h1>
// //       </div>
// //     )
// //   }
// // }

// export default App


//Router
import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Pagenotfound from "./Pagenotfound";
import Simple from "./Simple";

function App() {

    return(
        <div>
            <h1>Welcome to page </h1>
            <Simple />
            <br />
            <br />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<Pagenotfound />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
