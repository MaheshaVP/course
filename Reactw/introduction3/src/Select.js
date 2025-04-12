import { useState } from "react";

function Select() {
const [myCar,setMycar] = useState("Volvo");

const handleChange = (event) => {
    setMycar(event.target.value);
}

return (
    <form>
    <select value={myCar} onChange={handleChange}>
    <option value="Ford">Ford</option>
    <option value="Volvo">Volvo</option>
    <option value="Fiat">Fiat</option>
    </select>
    </form>
)


}

export default Select;