const persons = [
    { id:1, name:"Mahesh", age:22 },
    { id:2, name:"Chethan", age:24 },
    { id:3, name:"Jeethu", age:23 },
    { id:4, name:"Kalyan", age:22 }
]

export default function Map2() {
    return (
        <div>
            <ul>
                {persons.map(person =>
                    <li key={person.id}>Name is {person.name} and age is {person.age}</li>
                )}
            </ul>
        </div>
    )
}
