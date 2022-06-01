import React from 'react'
import image1 from '../img/pet-klub.jpg';
import image2 from '../img/moj-ljubimac.jpg';
import image3 from '../img/veterinar.jpg';

const ThreeImg = () => {
  return (
   <div className='three-img'>
       <a href='/pet-klub'><img src={image1} alt='klub'/></a>
       <a href='/ljubimac'><img src={image2} alt='ljubimac'/></a>
       <a href='/veterinar'><img src={image3} alt='veterinar'/></a>
   </div>
  )
}

export default ThreeImg