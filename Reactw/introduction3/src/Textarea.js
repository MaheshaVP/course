import { useState } from "react";

function Textarea() {
const [textarea,setTextarea] = useState (" The content of a textarea goes in the value attribute ");

const handleChange = (event) => {
    setTextarea(event.target.value);
}

return (
    <form>
        <textarea value={textarea} onChange={handleChange}/>
    </form>
);
}

export default Textarea;