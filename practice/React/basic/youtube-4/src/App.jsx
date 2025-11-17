import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h1>Counter: {count}</h1>

      <button onClick={()=>dispatch(increment())}>+</button><br /><br />
      <button onClick={()=> dispatch(decrement())}>-</button><br /><br />
      <button onClick={() => dispatch(reset())}>Reset</button><br /><br />
    </div>
  )
}

export default App;
