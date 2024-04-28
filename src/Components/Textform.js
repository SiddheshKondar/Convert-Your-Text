import React, { useState } from "react";

export default function Textform(props) {
const handleupclick=()=>{
  console.log("buttonwasclicked");
  let newText= text.toUpperCase();
  settext(newText);
  props.showalert("Converted to Uppercase !", "success")
}
  const handlelowclick=()=>{
    console.log("buttonwasclicked");
    let newText= text.toLowerCase();
    settext(newText);
    props.showalert("Converted to Lowercase !", "success")

}
const handleonchange=(event)=>{
  settext(event.target.value)

}
const cleartext=(event)=>{
  let newText= "";
  settext(newText);
  props.showalert("Type your text to continue", "success")
}



const converttojsx=()=>{
    let newtext= function htmlToJSX(html) {
      html = html.replace(/<(\w+)>/g, "<$1 />");
    
      html = html.replace(/class=/g, "className=");
  
      html = html.replace(/for=/g, "htmlFor=");
    
      html = html.replace(/style=/g, "style={{");
      html = html.replace(/;/g, "}}");
    
      return html;
    }
    settext(newtext);
    }

  const copytext=()=> {
      var copyText = document.getElementById("myBox");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.showalert("Copied to clipboard", "success")
    }

  let [text, settext]= useState('');
  return (
    <div>
        <div className="container">
          <h1 className="my-2">{props.heading}</h1>
          <textarea className="form-control my-3" onChange={handleonchange} value={text}  style={{border:"1px solid black", backgroundColor: props.mode=== "dark"?"#919096":"white"}} id="myBox" rows="8" defaultValue={""} />
            <button className="btn btn-primary m-1" onClick={handleupclick}>Convert to uppercase </button>
            <button className="btn btn-primary m-1" onClick={handlelowclick}>Convert to lowercase </button>
            <button className="btn btn-primary m-1" onClick={cleartext}>Clear Text</button>
            <button className="btn btn-primary m-1" onClick={copytext}>Copy Text</button>
            <button className="btn btn-primary m-1" onClick={converttojsx}>Convert HTML to JSX</button>
        </div>
        <div className="container my-3"> 
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>        
        </div>
      </div>
  );
}