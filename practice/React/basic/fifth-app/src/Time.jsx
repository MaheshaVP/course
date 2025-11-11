//Realt time is working 

import { useEffect, useState } from "react";

function Time () {
    const[time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div>
            <h1>Current Time is : {time}</h1>
        </div>
    )
}

export default Time;