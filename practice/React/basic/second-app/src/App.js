import './App.css';
import Car from './Components';
import Color from './Color';
import Props from './props';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Car brand = "Audi"/>
      <Color />
      <hr/>
      <Props hero="Allu Arjun" family="mega family" state="AP" age={43} />
    </div>
  );
}

export default App;
