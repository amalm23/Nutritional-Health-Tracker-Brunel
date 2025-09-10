import React, { useState } from 'react';
import "../App.css"


function EmailValidation() {

    const [error,setError]=useState(false)
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const handleChnage =(props)=>{
        if(props.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError(false)
        }else{
            setError(true)
        }
    }
    
    return(
        <div className='container'>
            <h1 className='fh1'>Email:</h1>
            <input placeholder="Email" className="emInput" onChange={(e)=>handleChnage(e.target.value)} />
            {error?<p className ="erP" style={{color:"red"}}>Enter valid Email</p>:''}
        </div>
    );
}


export default EmailValidation