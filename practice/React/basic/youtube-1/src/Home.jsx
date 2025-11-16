import { Link } from "react-router-dom";
import './index.css';


function Home() {
    const user = "Leo"
    return(
        <div>
            <h1>Welcome to Home Page</h1> <br />

            <Link to={`/dashboard?name=${user}&age=${28}`} className="Link">Dashboard</Link>
            <Link to='/about' className="Link">About</Link>


        </div>
    )
}

export default Home;