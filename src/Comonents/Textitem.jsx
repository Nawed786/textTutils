import React, { useState } from 'react'

export default function Textitem(props) {

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClear = () => {
    let newText = '';
    setText(newText)
  }

  const handleCopy = () =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/\s+/);
    setText(newText.join(" "))
  }



  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const [text, setText] = useState("");

  return (
    <>

      <div className="mb-3">
        <h2> {props.heading} </h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick} > Convert To UpperCase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} > Convert To LowerCase </button>
        <button className="btn btn-primary mx-1" onClick={handleClear} > Clear Text </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} > Copy Text </button>

        <div className="container my-3">
          <h2> Your Text Summary  </h2>
          <p> <b> {text.split(" ").length} </b> Words and <b>{text.length} </b> Characters </p>
          <p> <b>{0.008*text.split(" ").length} </b>  Mintes take to read. </p>
          <h3> Preview </h3>
          <p >  {text?text:"Enter the text for Preview."} </p>
        </div>
     

      
        </>
  )
}
