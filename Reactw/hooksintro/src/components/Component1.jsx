// import { useState } from "react";

// export default function Component1() {
//     const [user,setUser] = useState("Mahi");

//     return (
//         <div>
//             <h2>Component 1</h2>
//             <p>{`the user is ${user}`}</p>
//             <Component2 user={user}/>
//         </div>
//     )
// }

// function Component2({user}) {
//     return (
//         <div>
//             <h2>Component 2</h2>
//             <p>{`the user name is ${user}`}</p>
//             <Component3 user={user} />
//         </div>
//     )
// }

// function Component3({user}) {
//     return (
//         <div>
//             <h2>Component 3</h2>
//             <p>{user}</p>
//         </div>
//     )
// }


import { useState,createContext,useContext } from "react";

const userContext = createContext();

export default function Component1() {
    const [user] = useState("Mahi");

    return (
        <userContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2/>
        </userContext.Provider>
    )
}

function Component2() {
    return (
        <div>
            <h2>Component2</h2>
            <Component3/>
        </div>
    )
}

function Component3() {
const user = useContext(userContext)

    return(
        <div>
            <h1>Component3</h1>
            <p>{`user is ${user} again`}</p>
        </div>
    )
}