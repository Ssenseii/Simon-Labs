import React from 'react'
import Nav from '../components/Nav'
import Hero from '../layout/home/Hero'
import Tools from '../layout/home/Tools'
import Brand from '../layout/home/Brand'
import { images } from '../constants'


const Home = () => {
  return (
    <div className='home'>
      <div className='bg__home'>
        <img className='bg__home-desktop' src={images.bg_home} alt='' />
        <img className='bg__home-mobile' src={images.bg_home_mobile} alt='' />
      </div>
      <Nav />
      <Hero />
      <Tools />
      <Brand />
    </div>
  )
}

export default Home