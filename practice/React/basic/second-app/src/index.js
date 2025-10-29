import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class Car2 extends React.Component{
//   constructor(){
//     super();
//     this.state = {color:"red"};
//   }

//   render(){
//     return <h2>This is a {this.state.color} Car</h2>
//   }
// }


class Car2 extends React.Component{
  render() {
    return <h2>Im a {this.props.color} car</h2>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car2 color = "red"/> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
