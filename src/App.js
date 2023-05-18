import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';

const App = () => {
  const [count,setCount] = useState(10);
  useEffect(()=>{
    const settime = setTimeout(()=>setCount(count=>count-1),1000)
    if (count<0){
      clearTimeout(settime);
      alert("Time's up")
      setCount(0)
    }
  })
  return (
    <div>
      <h2>Count down form {count}</h2>
    </div>
  );
  }

export default App;



