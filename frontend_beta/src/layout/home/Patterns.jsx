import React from 'react'
import images from '../../constants/images'

const Patterns = () => {
  return (
    <section className='pattern'>
      <h2>Art directions I have went with throughout my career:</h2>
      
      <div>
        <img src={images.p_1} alt="" />
        <img src={images.p_2} alt="" />
        <img src={images.p_3} alt="" />
      </div>
    </section>
  )
}

export default Patterns