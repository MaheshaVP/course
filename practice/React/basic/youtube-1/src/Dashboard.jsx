import { Link } from "react-router-dom";
import './index.css';
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Dashboard() {
    // let params = useParams();
    // let {search} = useLocation();
    // console.log(search);

    return(
        <div>
            <h1>Welcome to Dashboard Page</h1> <br />
            {/* <h1>Name : {params.name}</h1> */}

            <Link to='/' className="Link">Back to home</Link>


        </div>
    )
}

export default Dashboard;