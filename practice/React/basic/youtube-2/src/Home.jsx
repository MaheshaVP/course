import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import firebaseDB from "./firebase";

function Home() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });

    const [getData, setGetData] = useState({});

    const deleteHandler = (key) => {
        firebaseDB.child(`register/${key}`).remove((err) => {
            if (err) console.log(err);
        });
    };

    useEffect(() => {
        firebaseDB.child('register').on('value', (details) => {
            setGetData(details.val());
        });
    }, []);

    const { firstname, lastname, email } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await firebaseDB.child('register').push(data, (err) => {
            if (err) console.log(err);
            else alert("Data saved successfully!");
        });

        setData({ firstname: "", lastname: "", email: "" });
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Registration Form</h2><br />

            <form className="form-horizontal" autoComplete="off" onSubmit={submitHandler}>
                <div className="form-group">
                    <label className="control-label col-sm-2">First Name : </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            name="firstname"
                            className="form-control"
                            placeholder="First Name"
                            value={firstname}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Last Name : </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Email : </label>
                    <div className="col-sm-4">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <input type="submit" className="btn btn-success" value="Submit" />
                    </div>
                </div>
            </form>

            <div>
                {getData &&
                    Object.keys(getData).map((key) => (
                        <div className="border" key={key}>
                            <p>FirstName: {getData[key].firstname}</p>
                            <p>LastName: {getData[key].lastname}</p>
                            <p>Email: {getData[key].email}</p>

                            <button
                                className="btn btn-success"
                                onClick={() =>
                                    navigate(
                                        `/edit?firstname=${getData[key].firstname}&lastname=${getData[key].lastname}&email=${getData[key].email}&key=${key}`
                                    )
                                }
                            >
                                Update
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={() => deleteHandler(key)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Home;
