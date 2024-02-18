import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        Hello I am App Component
      </div>

      <Outlet />
    </>
  );
}

export default App;
