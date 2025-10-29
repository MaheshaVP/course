let x = "ford";

let serialno = [12,13,14];
let details = {name:"Audi",model: "benz"}

function Car(props) {
    return(
        <>
        <h2>This is {props.brand}</h2>
        <p>{props.c.name} is {props.a[1]}</p>
        </>
    )
}


function Props(props) {



    return(
        <div>
            <p>Im a big fan of {props.hero} {props.family} {props.state}</p>
            <p>Age is: {props.age}</p>
            <Car brand={x} a={serialno} c={details}/>
        </div>
    )
}

export default Props;
