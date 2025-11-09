import './App.css';
import Car from './Components';
import Color from './Color';
import Props from './props';
import Destructure from './Destructure';
import Events from './Events';
import Goal from './Goal';
import Mycars from './Mycars';
import Form from './Form';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Car brand = "Audi"/>
      <Color />
      <hr/>
      <Props hero="Allu Arjun" family="mega family" state="AP" age={43} />
      <hr />
      <Destructure color="Red" name="APPLE" model="Local" time={20} /> <hr/>
      <Events />
      <hr />
      <Goal Goal={true}/>
      <Mycars /><hr />
      <Form />

    </div>
  );
}

export default App;
