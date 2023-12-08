import { useState } from "react";




function TextForm(props) {

    const [text, setText] = useState('');

    const handleonchange = (event) => {

        setText(event.target.value);

    }

    const handleonupclick = () => {
        const newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase","success");

    }
    const handleonloclick=()=>{
        const newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase","success");

    }
    const handleonremoveclick=()=>{
        const newtext=text.split(/[ ]+/);
        setText(newtext.join(" ")); 
        props.showAlert("Removed extra spaces","success");

        
    }
    const handlecopyclick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Coppied text to Clipboard","success");
    }

    return (
        <>

            <div className="container my-3">
                <h1 className="mb-3" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>Your Text Analyzer</h1>

                <div className="mb-3">

                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
                    
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonupclick}>Convert to upperCase</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonloclick}>Convert to lowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonremoveclick}>Remove extra space</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>Copy text</button>







            </div>
            <div className="container my-2" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}}>

               <h2>Analyis</h2>
               <p >{text.split(" ").filter((e)=>{return e.length!==0}).length} Words {text.length} Characters</p>
               <p>{0.008 *text.split(" ").filter((e)=>{return e.length!==0}).length } Seconds to read the above text!</p>
              
               <p><strong>{text.length>0?text:'Enter some text in textbox to preview it!'}</strong></p>


            </div>






        </>
    )

}

export default TextForm;

