import { useState } from "react";

function Simple() {
  const [data, setData] = useState({
    name: '',
    age: ''
  })

  const [fetchedData, setFetchedData] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitHandle = async (e) => {
    e.preventDefault();

    //   fetch('https://test-api-99a07-default-rtdb.firebaseio.com/data.json',
    //     {
    //       method: 'Post',
    //       body: JSON.stringify(data),
    //       headers : {
    //       "Content-Type": 'application/json; charset= UTF-8'
    //     }
    //   }
    //   ).then(res => alert("Data posted")).catch(err => console.log(err));

    try {
      const res = await fetch('https://test-api-99a07-default-rtdb.firebaseio.com/data.json',
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json"
          }
        }
      );

      if (res.ok) {
        alert("Data posted successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log("Error", err);
      alert("Failed to post data");
    }

  }

  const showData = async (e) => {
    try {
      const response = await fetch("https://test-api-99a07-default-rtdb.firebaseio.com/data.json")
      const result = await response.json();
      console.log(result)

      const list = Object.values(result);
      setFetchedData(list);

    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div>
      <h1>API Handling</h1>

      <form onSubmit={submitHandle}>
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" onChange={handleChange} /><br />

        <label htmlFor="age">Age :</label>
        <input type="number" name="age" onChange={handleChange} /><br />

        <input type="submit" value="Post data" />
      </form><br /><br />



      <button onClick={showData}>Show the details</button>

      <div style={{ marginTop: '20px' }}>
        <h1>Fetched Data</h1>

        {fetchedData.length > 0 ? (fetchedData.map((item, index) => (
          <p key={index}>
            <strong>Name: </strong>{item.name} | <strong>Age: </strong>{item.age}
          </p>
        ))) : (
          <p>No data awailable</p>
        )}
      </div>

      <br /><br />


    </div>
  )
}

export default Simple;