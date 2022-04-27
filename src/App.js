import React,{useState} from 'react';
import DateTime from './Components/Date-Time';

function App(){
const [data,setData]=useState(null)  
  function getData(event){
    setData(event.target.value)
  }
      return (
        <div className="App">
         <h1>WEATHER APP</h1>
         <input type="sarch" onChange={getData}></input>
         <DateTime name={data}/>
         
  
        </div>
      )
    

}

    



export default App