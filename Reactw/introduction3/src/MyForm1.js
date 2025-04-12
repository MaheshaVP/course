// import { useState } from "react";

// function MyForm1() {
//     const [inputs,setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values,[name]:value}));
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//     }

//     return (
//         <form onSubmit={handleSubmit}>

//             <label>Enter Your Name :
//             <input 
//             type="text"
//             name="username"
//             value={inputs.username || ""} 
//             onChange={handleChange}
//             />
//             </label>
//             <br/>

//             <label>Enter Your Age :
//             <input 
//             type="number"
//             name="age"
//             value={inputs.age || ""} 
//             onChange={handleChange}
//             />
//             </label>
//             <br/>

//             <input type="submit"/>
//         </form>
//     )
// }

// export default MyForm1;


import { useState } from "react";

function MyForm1() {
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name :
                <input 
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                />
            </label>
            <br/>

            <label>
                Enter your age :
                <input 
                type="text"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
                />
            </label>
            <br/>

            <input type="submit"/>
        </form>
    );
}

export default MyForm1;