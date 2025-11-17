import { useContext, useState } from "react";
import { store } from "./App";


const Display = () => {
    const[data, setData] = useContext(store);
    const[name, setName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        setData([...data, {brandname:name}])

        setName("");
    }

    return(
        <div className="card">
            <div className="card-body">

                {data.map((item, index) => 
                    <h4 className="card-title" key={index}>{item.brandname}</h4>
                )}

                <form className="form" onSubmit={submitHandler}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your brand" />
                    <input type="submit" value="ADD" />
                </form>

            </div>
        </div>
    )
}

export default Display;