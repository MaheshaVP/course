import { useState } from "react";

// function MyForm() {
//     const [name,setName] = useState(" ");

//     return (
//         <form>
//             <label>
//                 Enter your name : &nbsp;
//                 <input 
//                 type="text"
//                 value={name}
//                 onChange={(e)=>setName(e.target.value)}
//                 />
//             </label>
//         </form>
//     )
// }

function MyForm() {
  const [name,setName] = useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was : ${name}`)
  }

  return (
      <form onSubmit={handleSubmit}>
          <label>
              Enter your name : &nbsp;
              <input 
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
          </label><br/>
          <input type="submit"/>
      </form>
  )
}

export default MyForm;