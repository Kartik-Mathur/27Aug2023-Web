import './App.css';
import { increaseCounter, decreaseCounter } from './action/action';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counterState = useSelector(state => state.counterReducer);
  // console.log(counterState);
  const dispatch = useDispatch();
  let obj = JSON.parse(localStorage.getItem("obj"));
  console.log(obj)
  return (
    <>
      <button onClick={()=>dispatch(increaseCounter)}>+</button>
      <button onClick={()=>dispatch(decreaseCounter)}>-</button>
      <div>{counterState.value}</div>
    </>
  );
}

export default App;
