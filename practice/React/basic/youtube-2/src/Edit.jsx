import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import firebaseDB from './firebase';

function Edit() {
    // let query = new useSearchParams(useLocation().search);
    const [query] = useSearchParams();

    const [data, setData] = useState({
            firstname: "",
            lastname: "",
            email: ""
        });

        const { firstname, lastname, email } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setData({ 
            firstname: query.get('firstname') || " ",
            lastname: query.get('lastname') || " ",
            email: query.get('email') || " "
        });
    }, []);

    const submitHandler = e => {
        e.preventDefault();

        firebaseDB.child(`register/${query.get('key')}`).set(
            data,
            err => {
                if(err){
                    console.log(err);
                }else{
                    alert("data updated");
                }
            }
        )
    }

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Edit Form</h2>
            <form className="form-horizontal" autoComplete="off" onSubmit={submitHandler}>
                <div className="form-group">
                    <label className="control-label col-sm-2">First Name : </label>
                    <div className="col-sm-4">
                        <input type="text" value={firstname} name="firstname" onChange={changeHandler} className="form-control" placeholder="First Name" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Last Name : </label>
                    <div className="col-sm-4">
                        <input type="text" value={lastname} name="lastname" onChange={changeHandler} className="form-control" placeholder="Last Name" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control1-label col-sm-2">Email : </label>
                    <div className="col-sm-4">
                        <input type="email" value={email} name="email" onChange={changeHandler} className="form-control" placeholder="Email" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <input type="submit" className="btn btn-success" value="Save" />
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Edit;