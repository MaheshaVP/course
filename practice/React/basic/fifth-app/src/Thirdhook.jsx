import { createContext, useContext, useState } from "react";


 const UserContext = createContext();

function Thirdhook(){
    const[user, setUser] = useState("Komal");


    return(
        <div>
            <UserContext.Provider value={user}>
                <h1>Component 1</h1>
                <p>{`Hello ${user} `}</p>
                <Thirdhook1 />
            </UserContext.Provider>
        </div>
    )
}

function Thirdhook1() {
    const user = useContext(UserContext);
    return(
        <div>
            <h1>Component 2</h1>
            <p>{`Welcome to react ms ${user}`}</p>
        </div>
    )
}

export default Thirdhook;