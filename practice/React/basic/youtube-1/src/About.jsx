import { Link } from "react-router-dom";
import './index.css';

function About() {
    return(
        <div>
            <h1> About Page</h1> <br />

            <Link to='/' className="Link">Back to home</Link>


        </div>
    )
}

export default About;