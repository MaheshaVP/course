import { useState } from "react"


export default function Form() {
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [car, setCar] = useState("")

    function handleChange1(e) {
        setName(e.target.value);
    }

    // function handleChange2(e) {
    //     setText(e.target.value);
    // }

    function handleSubmit(e){
        e.preventDefault();
        alert(`${name} have the car ${car}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : <input type="text"/></label><br/>

            <label htmlFor="name" value={name} onChange={handleChange1}> Enter Name : 
                <input type="text" />
            </label><br/>

            <label htmlFor="textarea">
                Give Feedback:
                <textarea name="textarea" id="textarea" value={text} onChange={(e)=>setText(e.target.value)}> </textarea>
            </label><br/>

            Select : 
            <select name="car" id="car" value={car} onChange={(e)=>setCar(e.target.value)}>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Mercideiz">Mercideiz</option>
            </select>

            <input type="Submit" />

            <h3>The Content</h3>
            <p>Current name : {name}</p>
            <p>Text content : {text}</p>
            <p>Select value : {car}</p>

        </form>
    )
}