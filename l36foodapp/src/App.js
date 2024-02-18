import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(async () => {
    let foodData = await axios.get('http://localhost:4444/');
    console.log(foodData);
    return foodData;

  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
