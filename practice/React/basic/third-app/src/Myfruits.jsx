
function fruitsFetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Apple','Banana','Cherry']);
        }, 2000);
    })
}

let fruitResource = {
    data : null,
    read(){
        if(this.data !== null) return this.data;
        throw fruitsFetchData().then(result => this.data = result)
    }
}



export default function Myfruits() {

    const fruits = fruitResource.read();

    return(
        <div>
            <h2>My favourite fruits</h2>
            <ul>
                {fruits.map((fruit) => (<li>{fruit}</li>))}
            </ul>
        </div>
    )
}