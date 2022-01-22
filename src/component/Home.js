import React from 'react';
import { useState } from 'react';
import logo from '../Bus.svg';



export default function Home(props) {

  const [area,setarea]=useState({
    color: "black",
    background: "#f8f9fa"
  })
  const [msg, setmsg] = useState("hiii ,how are you");

  const [bus,setbus]=useState("dark mode")
  const ar=()=>
    {
      if(area.color=="black")
      {
        setarea({
            
          color:"white",
    background:"rgb(4 9 17)"
        })
        setbus("white mode")
      }
        else{
          setarea({
            color: "black",
    background: "#f8f9fa"
          })
          setbus("dark mode")
        }
      
    }
  /*------------------------------------------------------------------------------*/

    const clickOn=()=>
    {
      console.log("you click on button"+text);
     let newtext=text.toUpperCase();
     settext(newtext);
     props.setmsg(" Now,your text has been converted to uppercase");
    }
    const handleOnchange=(event)=>
    {
      console.log("you click on  ahndle change button");
      settext(event.target.value);
      
     
      
    }

    const clickOnto= ()=>
    {
      console.log("new value is"+text);
      let low=text.toLowerCase();
      settext(low);
      props.setmsg(" Now,your text has been converted to Lowercase");
    }


    const clear= ()=>
    {
      console.log("new value is"+text);
      let cl="";
      settext(cl);
      props.setmsg(" Now,your text has been clear");

    }


    const copy= ()=>
    {
       const area=document.getElementById("txt");
      area.select();
      navigator.clipboard.writeText(area.value);
      props.setmsg(" Now,your text has been coppied");

    }
    
    
  const [text,settext]=useState("");


  return (
  <>
  <div className="container" id="ravan">
 <h1 className={`my-4 text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</h1>
<div className="mb-3 ">
<label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea style={area} className="form-control" id="txt" rows="5" onChange={handleOnchange} value={text} placeholder='enter text here'></textarea>
</div>
<div className='container my-3'>
<button type="button" className={`btn btn-${props.fot} mx-2 my-3`} onClick={clickOn} > convert to upercase</button>
<button type="button" className={`btn btn-${props.fot} mx-2 my-3`} onClick={clickOnto} >convert to lowercase</button>
<button type="button" className={`btn btn-${props.fot} mx-2 my-3`} onClick={clear}>clear</button>
<button type="button" className={`btn btn-${props.fot} mx-2 my-3`} onClick={copy}>copy</button>
<button type="button" className={`btn btn-${props.fot} mx-2 my-3`} onClick={ar}>{bus}</button>
</div>



<div className={`conatiner my-3 text-${props.mode==="light"?"dark":"light"}`}>
       <div className=" container my-3" id="ima">
       <div className="container">
               <h1>your text summary</h1>
            <div className="container mx-3 my-2">
               <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> character</p>
               <p><b>{0.008*text.split(" ").length}</b> minitu read words</p>
            </div>  
                </div>
                <div className="container mx-12">
                <img className="image" src={logo}  alt="yes" />
               </div>
    
            </div>
            <div className="container "  >
                   <h1>preview</h1>
                      <div className="container my-3"> 
                      <p>{text}</p>
                     </div>
                </div>
         </div>
     </div>


  </>);
}


