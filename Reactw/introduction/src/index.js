import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';


const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

  //----using jsx ------
  const jsx = <h1>I Love JSX!</h1>

  //----without jsx -----------
  const jsxwo = React.createElement('h1',{},'I dont Love jsx');

  //----inserting html code to react------
  const myElement = <h1>React is {5+10} times better</h1>


  //----multiple html lines--------
  const myUlList = (
    <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
    </ul>
    
    <input type='text' />
    </div>
  )

  const myHeading = <h1 className='myclass'>Hello world</h1>


  const x=6;
//   let text = "Good Bye";

//   if(x<10) {
//     text = "Hello";
//   }

//   const myif = <h1>{text}</h1>

const myternary = <h1>{(x)<10 ? "Good" : "try again"}</h1>


//-----------function render -------------
function Car(props) {
    return <h2>I am {props.color} color Lamborgini car!</h2>;
}

function Georage() {
    return (
        <>
            <h1>Who lives in the garage</h1>
            <Car color="red"/>
        </>
    )
}

//--------class car ---------------
class Car2 extends React.Component{
  render() {
    return <h2>This is car2 </h2>
  }
}


//-------------render()----------
class Car3 extends React.Component{
  constructor() {
    super();
    this.state = {color : "green"};
  }
  render() {
    return <h2>I am a {this.state.color} car</h2>
  }
}


//-----------props------------
class Car4 extends React.Component{
  render(){
    return <h1>This is car3 and color is {this.props.color}</h1>
  }
}

//----mounting constructor-----------
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}


//-------------mounting render----------------
class Header1 extends React.Component{
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    )
  }
}

//----------------mounting didmount----------------
class Header2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {favcolor : "red"}
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({favcolor:"pink"})
    },1000)
  }

  render() {
    return (
      <h1>My favourite color is {this.state.favcolor}</h1>
    );
  }
}

//---------render---------------------

class Render extends React.Component{
  constructor(props){
    super(props);
    this.state = {favcolor : "red"};
  }
  changecolor=() => {
    this.setState({favcolor:"Green"})
  }

  render() {
    return(
      <div>
        <h1>My fav color is {this.state.favcolor}</h1>
        <button type='button' onClick={this.changecolor} >Click me</button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// const conatiner = document.getElementById('root');
// const root1 = ReactDOM.createRoot(conatiner);
// root1.render(
//   <App/>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
