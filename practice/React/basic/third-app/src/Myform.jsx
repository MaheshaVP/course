//handling multiple inputs

import { useState } from "react";

const Myform = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    return(
        <form>

            <label htmlFor="fname" > First Name :
                <input type="text" 
                name="fname"
                value={inputs.fname}
                onChange={handleChange}/>
            </label>

            <label htmlFor="fname" > Last Name :
                <input type="text" 
                name="lname"
                value={inputs.lname}
                onChange={handleChange}/>
            </label>

            <p>Current values : {inputs.fname} {inputs.lname}</p>
        </form>
    )
}

export default Myform;