
export default function Car(props){
    return(
        <div>
            <Componets />
            <h2>This is {props.brand}</h2>
        </div>
        
    );    
}

 function Componets() {
    const hstyle = {
        color : "Green",
        fontStyle : "Bold"
    }

    return(
        <div>
            <h1 style={hstyle}>Who lives in Garage</h1>
        </div>
    );
}