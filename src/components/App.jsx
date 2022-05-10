import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../Notes.js"
import InputArea from "./InputArea";

function App() {

  const [notes,addNote]=useState(note);
  const[isexpand,expand]=useState(false);
  const [inote,cnote]=useState({title :"",content :""});
  function deletenote(id)
  {
    console.log(id);
     addNote(prev=>{
       return prev.filter((item,index) => {
         return index!==id;
       })
     })
    
  }
  function addItem(event)
  {
    
    if(inote.title==="" || inote.content==="")
    {
      alert("fields cannot be empry");
      return;
    }
    addNote(prev=>{
      return [...prev, inote];
    });
    
    cnote({title : "",content : "" });
    expand(false);
  }
  function handleChange(e)
  {
     expand(true);

     if(e.target.name==="title")
     {
       cnote({title : e.target.value , content : inote.content});
     }
     else
     {
      cnote({title : inote.title , content : e.target.value});
     }
    
  }
  return (
    <div>
      <Header />
      <InputArea addItem={addItem} handleChange={handleChange} title={inote.title} content={inote.content} isexpand={isexpand}/>
        {notes.map((props,index) =>{
         return <Note title={props.title} content={props.content}  id={index} deletenote={deletenote}/>
          
        })}
       
      <Footer />
    </div>
  );
}

export default App;