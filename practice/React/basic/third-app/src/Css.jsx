
import styles from './Buttons.modules.css'

export default function Css() {

    const mystyle = {
        color : "red",
        backgroundColor : "gray",
        padding : "10px"
    }

    return(
        <div>
            <h1 style={mystyle}>My name is Mahesh</h1>
            <br />
            <button className={styles.mybtn}>Click me</button>
        </div>
    )
}