import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [can,setCan]=useState(0)
  const [temp,setTemp]=useState(0)
  useEffect(()=>{
     console.log("ilk kez render edildiğinde çalışır")
  },[])
  useEffect(()=>{
    console.log("her zaman çalışır")
  })
  useEffect(()=>{
    console.log("ilk kez render edildiğinde çalışır + can state i her değiştiğinde çalışır")
  },[can])
  return (
    <div className="App" 
      style={{
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }}>
      <div 
      style={{
        marginRight:30,
      }}>
        <button onClick={()=>setCan(can+1)}>Can ++</button>
        <div>Can:{can}</div>
      </div>
      <div>
        <button onClick={()=>setTemp(temp-1)}>Temp --</button>
        <div>Temp:{temp}</div>
      </div>
    </div>
  );
}

export default App;
