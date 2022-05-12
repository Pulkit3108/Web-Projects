import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, corrupti.');
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted To Uppercase","success");
    };
    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted To Lowercase","success");
    };
    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared","success");
    };
    const handleCapitalizeClick = () => {
        setText(text.toUpperCase().charAt(0) + text.substr(1).toLowerCase());
        props.showAlert("Capitalized","success");
    };
    const removeExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' '));
        props.showAlert("Removed Extra Spaces","success");
    };
    const removePunctuations = () => {
        setText(text.replace(/[^\w\s]/g, ''));
        props.showAlert("Removed Punctuations","success");
    };
    const removeNumbers = () => {
        setText(text.replace(/\d+/g, ''));
        props.showAlert("Removed Numbers","success");
    };
    const handleCopyClick = () => {
        const copyText = document.createElement('textarea');
        copyText.value = text;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand('copy');
        document.body.removeChild(copyText);
        props.showAlert("Copied","success");
    };
    const handleOnChange = event => {
        setText(event.target.value);
    };
    return (
        <>
        <div className="container my-3" style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
            <h2>{props.title}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode=== 'dark' ? 'grey' : 'white',color: props.mode=== 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div> 
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick} >UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick} >LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick} >Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={removePunctuations} >Remove Punctuations</button>
            <button className="btn btn-primary mx-2" onClick={removeNumbers} >Remove Numbers</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
        </div>
        <div className="container my-3"style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
            <h2>Text Summary</h2>
            <ul>
                <li>{text.length} characters</li>
                <li>{text.split(' ').length} words</li>
            </ul>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

