

function Events() {

    // const shoot1 = () => {
    //     alert("Great Shot");
    // }

    const shoot2 = (a,b) => {
        alert(a);
        <p>{b.type}</p>
    }


    return(
        <div>
            <h2>Event handling</h2>
            {/* <button onClick={shoot1}>Shoot</button> */}
            <button onClick={(event)=>shoot2("Great",event)}>Shoot</button>
            

        </div>
    );
}

export default Events;