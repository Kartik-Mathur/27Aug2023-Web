import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Blogs from './User/Blogs';
import Home from './User/Home';
import About from './User/About';
import Contact from './User/Contact';


const myContext = createContext();

function App() {
  const [path, setPath] = useState("Blogs");

  const updatePath = (newPath) => {
    setPath(newPath);
  }
  console.log(path);

  return (
    <myContext.Provider value={updatePath}>
      <div>
        {path == 'Blogs' && <Blogs />}
        {path == 'Home' && <Home />}
        {path == 'About' && <About />}
        {path == 'Contact' && <Contact />}
      </div>
    </myContext.Provider>
  )
}

// function App() {
//   const [cnt, setCnt] = useState(0);
//   let inputRef = useRef("");
//   const clickHandler = ()=>{
//     console.log(inputRef.current);
//     console.log(inputRef.current.value);
//     inputRef.current.value = "";
//   }

//   return (
//     <div className="App">     

//       <input ref={inputRef} type='text' placeholder='Enter Name' />
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   );
//   // Way-1

//   const [inp, setInp] = useState("");

//   const inputHandler = (ev)=>{
//     setInp(ev.target.value);
//     console.log(ev.target.value);
//   }

//   return (
//     <div className="App">     

//       <input value={inp} type='text' onChange={inputHandler} placeholder='Enter Name' />
//     </div>
//   );

// }

/*
function App() {
  const [cnt, setCnt] = useState(0);
  function clickHandler(){
    setCnt(cnt+1);
  }

  useEffect(() => {
    console.log("Inside useEffect");
    setCnt(cnt+1);
  },[]);
  

  return (
    <div className="App">      
      <span>{cnt}</span>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
*/

export default App;
export {myContext};
