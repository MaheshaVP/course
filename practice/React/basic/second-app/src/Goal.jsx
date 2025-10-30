//Conditions
function Madegoal(){
    return <h4>Goal</h4>
}

function MissedGoal(){
    return <h4>Missed</h4>
}


export default function Goal(props) {

    const isGoal = props.Goal;

    // if(isGoal){
    //     return <Madegoal />;
    // }
    // return <MissedGoal />;
    
    return(
        <>
            {isGoal ? <Madegoal />:<MissedGoal />};
        </>
    )
}
