import logo from './logo.svg';
import './App.css';
import Inputdata from './Componet/Inputdata';
import {useState} from 'react';
import Detail from './Componet/Detail';

function App() {
  const [dataa,setdata]=useState([]);
  const addEventListener=(datta)=>{
    setdata((previous=>{

      return[datta,...previous]
    }))
    //console.log(datta);
  }
  return (
    <div>
      <Inputdata onAdditem={addEventListener}></Inputdata>
      <Detail regdata={dataa}></Detail>
    </div>
  );
}
export default App;
