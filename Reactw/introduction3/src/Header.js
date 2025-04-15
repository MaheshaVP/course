import './Header.css';

import './header.scss';

const Header = () => {

    const myStyle = {
        color : "white",
        backgroundColor : "DodgerBlue",
         padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return (
        <>
        <h1 style={{color:"red"}}>Add Style</h1>
        <p style={{backgroundColor:"blue"}}>Add a new style</p>
        <h2 style={myStyle}>Hello World</h2>

        <div className="body">
            <h2>Another way of adding styles to your application is to use CSS Modules.

                CSS Modules are convenient for components that are placed in separate files.</h2>
        </div>

        <h4>This sass css and installed sass extension</h4>
        </>
    )
}

export default Header;