import { useState } from "react"


export default function Radio() {
    const [gender, setGender] = useState("male");

    const handleChange = (e) =>{
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(`Your Gender is : ${gender}`)
        e.preventDefault();
    }


    return(
        <form onSubmit={handleSubmit}>
            <p>Select Gender</p>
            <label htmlFor="male">
                <input type="radio" name="Gender" value="male" checked={gender == 'male'} onChange={handleChange} /> Male
            </label>

            <label htmlFor="female">
                <input type="radio" name="Gender" value="female" checked={gender == 'female'} onChange={handleChange} /> Female
            </label>

            <input type="submit" value="Submit" />
        </form>
    )
}