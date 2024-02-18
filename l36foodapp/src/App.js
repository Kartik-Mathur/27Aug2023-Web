import './App.css';
import {useLoaderData} from 'react-router-dom';
import FoodItem from './Components/FoodItem/FoodItem';

function App() {
  const foodData = useLoaderData();

  return (
    <div className="App">
      {foodData.map(item=><FoodItem food={item} />)}
    </div>
  );
}

export default App;
