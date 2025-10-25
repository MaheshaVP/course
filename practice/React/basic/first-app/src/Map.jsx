
const Fruits = ["Apple","banana","carrot"];

function Map() {
    return(
        <div>
            <ol type='1'>
                {Fruits.map(fruit => 
                    <li key={fruit}>{fruit}</li>
                )}
            </ol>
        </div>
    );
}

export default Map;