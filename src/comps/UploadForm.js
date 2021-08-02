import React, { useState } from 'react'
import ProgressBar from './progressBar';
import progressBar from './progressBar';

/**
* @author
* @function UploadForm
**/

const UploadForm = () => {
    const [file,setFile]=useState(null);
    const types=['image/png','image/jpeg','image/jpg'];
    const [error,setError]=useState(null);
    const changeHandler=(e)=>
    {
        let selected=e.target.files[0];
       
        if(selected &&types.includes(selected.type))
        {
            setFile(selected);
            setError('');
            
        }
        else
        {
            setFile(null);
            setError('please select valied image file');

        }
    }
  return(

    <form>
        <input type="file" onChange={changeHandler}/>
        <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
    </form>
   )

 }

export default UploadForm;