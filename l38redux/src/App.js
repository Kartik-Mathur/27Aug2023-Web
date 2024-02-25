import './App.css';
import { increaseCounter, decreaseCounter } from './action/action';
import { useSelector } from 'react-redux';
import store from './store';

console.log(store.getState());

const subscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(increaseCounter);
store.dispatch(decreaseCounter);

function App() {
  const counter = useSelector();
  console.log(counter);
  return (
    <>
      <button>+</button>
      <button>-</button>
      <div>0</div>
    </>
  );
}

export default App;
