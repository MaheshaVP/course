

function Mycars() {

    // const cars = ["BMW","Audi","Safari"];

    const cars = [
        {id:221, brand:"BMW"},
        {id:222, brand:"Audi"},
        {id:223, brand:"KIA"}
    ]

    return(
        <div>
            <h1>My cars : </h1>
            {/* {cars.map((car,index)=><li key={index}>The car is {car}</li>)} */}
            <ul>
                {cars.map((car) => <li key={car.id} >The car is {car.brand}</li>)}
            </ul>
        </div>
    )
}

export default Mycars;