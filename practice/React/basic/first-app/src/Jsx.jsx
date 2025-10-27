

export default function Jsx() {

    const myList = (
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    )

    const brand = "Ford";
    const model = "Mostag";
    const hp = 28 * 8;

    const myobj = {
        name : "fiat",
        model : 500,
        color : "gray"
    }

    const myfunc = () => {
        alert("Hello world");
    }

    const mystyle = {
        color : "red",
        fontSize : "20px",
        backgroundColor : "light blue"
    }

    

    return(
        <div>
            const myElem = <h1>I Love {/* This is comment */} JSX</h1>
            <input type="text" className="mycalss"  />
            <p>Fruits List : {myList} </p>
            
            <h2>My Car</h2>
            <p>This is {brand} {model}</p>

            <p>It has {42 * 4} HorsePower</p>
            <p>It has {hp}</p>

            <p>This is {myobj.color} {myobj.name} {myobj.model}</p>

            <button onClick={myfunc} style={mystyle}>Click me</button>

            


        </div>
    );
}