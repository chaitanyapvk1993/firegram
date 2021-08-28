import useFireStore from '../hooks/useFireStore';
import React from 'react';


const ImageGrid = ( ) => {
  const { docs } = useFireStore('images');


  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
          <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="uploadedpic"/>
              </div>
      )
      )}
    </div>
  )
}

export default ImageGrid;