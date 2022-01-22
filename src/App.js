import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar.js';
import Alert from './component/Alert';
import Title from './component/Title';
import { useState } from 'react';
import React from "react";





function App() {

  const [msg, setmsg] = useState("hiii ,how are you");

  const [dan, setdan] = useState("info");


  const den=()=>{
    if(dan==="info")
    {
      setdan("warning");
     // document.body.style.backgroundColor="#95c1b9";
    }
    else
    {
      setdan("info");
      //document.body.style.backgroundColor="#dd5d6f";

    }


  }


  const [ndark,setndark]=useState("light");
  const [rev, setrev] = useState("dark");
  

  const fun=()=>
  {
    if(ndark==="light")
    {
      setndark("dark");
      document.body.style.backgroundColor="#041021";
      setmsg("Succefully darkmode is enable");
      setrev("white");
      
    }
    else{
      setndark("light");
      document.body.style.backgroundColor="white";
      setmsg("Succefully  dark mode is deasable");
      setrev("dark")
     
    }
  }

  return (
    <>
 
 <Navbar mode={ndark} fun={fun} mod={rev} fot={dan} cos={den}/>
  <Alert ale={msg} mod="enable this mode"/>
 
<Home mode={ndark} fun={fun} setmsg={setmsg} fot={dan}  heading="Enter your text"/> 
 </>
  );
}

export default App;
