import { useContext } from "react";
import { store } from "./App";


const ComponentB = () => {
    const [data,setData] = useContext(store);

    return(
        <div className="card">
            <div className="card-body">
                Component B {data}
            </div>
        </div>
    )
}

export default ComponentB;