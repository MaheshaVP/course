//API
import { useEffect, useState } from "react";
import axios from 'axios';

function FetchUsers () {
    const[users, setUsers] = useState([]);  

    
//1. Basic Example using fetch() and .then()
    // useEffect(() => {
    //     const api = "https://jsonplaceholder.typicode.com/users";
    //     fetch(api)
    //     .then((response) => response.json())
    //     .then((data) => setUsers(data))
    //     .catch((error) => console.error("Error :", error))
    // }, []);


//2. Using fetch() with async/await (Modern & Cleaner)
    const getUsers = async () => {
        const api = "https://jsonplaceholder.typicode.com/users";

        try{
            const response = await fetch(api);
            const data = await response.json();
            setUsers(data);
        }catch(error){
            console.error("Error fetching user", error)
        }
    }

    useEffect(() => {
        getUsers();
    }, []); 

//3. Using Axios (Simpler Syntax)
    // useEffect(() => {
    //     const api = "https://jsonplaceholder.typicode.com/users";

    //     axios
    //     .get(api)
    //     .then((response) => setUsers(response.data))
    //     .catch((error) => console.error("Error",error));

    // }, [])



    return(
        <div>

            <h2>Users list using fetch</h2>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default FetchUsers;