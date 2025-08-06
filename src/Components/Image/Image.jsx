import React from 'react'
import './Image.css'
import { useContext } from 'react'
import PixabayContext from '../../context/PixabayContext.jsx';
function Image() {
  const {apiData} = useContext(PixabayContext);
  
  return (
    <div className="container">
    <div className='all-image'>{apiData.map( (data)=> <div key={data.id} >
      <img src={data.largeImageURL} className="image" alt="" />
    </div>)}
    </div>
    </div>
  )
}

export default Image