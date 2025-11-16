// import { useState } from "react";


// function Test(props) {

//     const[data, setData] = useState({
//         email: '',
//         password: ''
//     })

//     const handleChange = (e) => {
//         setData({...data,
//             [e.target.name]: e.target.value
//         })
//     }

//     const HandleSubmit = (e) => {
//         e.preventDefault();
//     if(data.password.length < 6){
//         alert("Password must be at least 6 characters long");
//     }else{
//         console.log(data);
//     }
// }

//     return(
//         <div>
//             <form onSubmit={HandleSubmit}>
//                 <label htmlFor="email">E-mail</label><br />
//                 <input type="email" id="email" name="email" onChange={handleChange}/><br />
//                 <label htmlFor="password">Password</label><br />
//                 <input type="password" id="password" name="password" onChange={handleChange}/><br />
//                 <button type="submit">Submit</button>
//             </form>

//             <h1>Name:{props.name} age : {props.age}</h1>
//         </div>
//     );
// }


// export default Test;