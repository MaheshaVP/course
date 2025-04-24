import './App.css';
import Favcolor from './Favcolor'
import Car from './Car';
import FavoriteColor from './FavoriteColor';
import Timer from './Timer';
import Counter from './Counter';
import Component1 from './components/Component1'
import Refcount from './components/Refcount';
import Focusinp from './components/Focusinp';
import Previousval from './components/Previousval';
import Todo from './components/Todo';
import App1 from './components/App1';
import App2 from './components/App2';

function App() {
  return (
    <div>
      <h1 className='heading'>Hello world</h1>
      <hr/>

      <Refcount />
      <hr/>

      <Focusinp />
      <hr/>

      <Previousval/>
      <hr/>

      <Todo />
      <hr/>

      <App1 />
      <hr/>
      <hr/>

      <App2/>

    {/* <Counter/>
    <hr/>

     <Timer/>
     <hr/>

    <Component1/>

     <Favcolor/>
     <hr/>

    <Car/>
    <hr/>

    <FavoriteColor/>  */}
    </div>
  );
}

export default App;
