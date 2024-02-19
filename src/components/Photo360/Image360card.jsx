import React, { useEffect } from 'react';
import image360 from '../../assets/green360.jpg'
import "./Image360card.css"
import "https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.js"

const Image360card = () => {
 useEffect(()=>{
  pannellum.viewer('panorama-360-view', {
    "type": "equirectangular",
    "panorama": "https://i.ibb.co/Wy6R64G/green360.jpg",
    // "panorama": "https://i.ibb.co/wr37GbP/pexels-pixabay-356830.jpg",
    "autoLoad": true,
    "autoRotate":-1,
    "title": "Guliakhali Sea Beach",
    "author": "ABD NIMIT",
    "compass": true,
    "northOffset": 180.0,
    // "haov": 149.87,
    // "vaov": 54.15,
    // "vOffset": 1.17
});
 },[])
  
  return (
    <div>
      360
      <div className='pnlm-container'>

      <div id="panorama-360-view"></div>
      </div>
      <img src={image360} alt="360" className='mt-10'/>
    </div>
  );
};

export default Image360card;