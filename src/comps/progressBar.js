import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';

/**
* @author
* @function progressBar
**/

const ProgressBar = ({file,setFile}) => {
    const {url,progress}=useStorage(file);
    //console.log(progress);
    useEffect(()=>{
        if(url){
            setFile(null,setFile);
        }
    },[url,setFile])
  return(
    <div className="progress-bar" style={{width:progress+'%'}}> progressBar</div>
   )

 }

export default ProgressBar;