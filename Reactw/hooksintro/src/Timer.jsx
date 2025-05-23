// import { useState,useEffect } from "react";

// function Timer() {
//     const [count, setCount] = useState(0);


//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1)
//         },1000)
//     })

//     return(
//         <div>
//             <h1>I have rendered {count} times</h1>
//         </div>
//     )
// }
// export default Timer


// import { useState,useEffect } from "react";

// export default function Timer() {
//     const [count, setCount] = useState(0);


//     useEffect(()=> {
//         let timer = setTimeout(()=> {
//             setCount((count)=>count+1)
//         },1000)

//         return ()=>clearTimeout(timer);
//     },[])


//     return <h1>Count is : {count}</h1>
// }

import { useState,useEffect } from "react";

export default function Timer() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count)=>count + 1);
        },2000);
    
        return ()=>clearTimeout(timer);
    },[])

    return <h1>the count  : {count}</h1>
}