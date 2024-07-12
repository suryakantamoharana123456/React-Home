import './App.css'
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(0);

  const add =()=>{
    // console.log("value added",(Math.random()*100 + 1).toFixed(0));
    counter++;
    setCounter(counter);
    // console.log(counter);
  }
  const rem =()=>{
    counter--;
    setCounter(counter);
    // console.log(counter);
  }
  return (
    <>
      <h1>Hello React</h1>
      <p>Count : {counter}</p>
      <button
      onClick={add}
      >Add</button>
      <br />
      <br />
      <button
      onClick={rem}
      >Remove</button>
    </>
  )
}

export default App
