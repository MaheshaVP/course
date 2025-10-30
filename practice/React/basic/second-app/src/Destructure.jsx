
//Destructuring
export default function Destructure({name,model,from="kashmir",...rest}) {

    // const {name, model} = props;

    return(
        <div>
            <p>This is {name} {model} fruit {rest.time}.<br/> It is delivered from {from}.</p>
        </div>
    );
}

