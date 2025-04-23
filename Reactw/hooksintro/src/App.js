import './App.css';
import Favcolor from './Favcolor'
import Car from './Car';
import FavoriteColor from './FavoriteColor';
import Timer from './Timer';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1 className='heading'>Hello world</h1>
      <hr/>

    <Counter/>
    <hr/>

    <Timer/>

    {/* <Favcolor/>
    <hr/>

    <Car/>
    <hr/>

    <FavoriteColor/> */}
    </div>
  );
}

export default App;
