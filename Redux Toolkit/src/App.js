// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.count)
  return (
    <div className="App">
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      <button onClick={() => {
        dispatch(() => { return { type: "inc" } })
      }}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => { dispatch({ type: "dec" }) }}>-</button>

    </div>
  );
}

export default App;