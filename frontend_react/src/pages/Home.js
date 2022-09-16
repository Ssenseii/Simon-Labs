import React from 'react'
import Nav from '../components/Nav'
import Hero from '../layout/home/Hero'
import Endorsement from '../layout/home/Endorsement'
import { images } from '../constants'


const Home = () => {
  return (
    <div className='home'>
      <div className='bg__home'>
        <img src={images.bg_home} alt='' />
      </div>
      <Nav />
      <Hero />
      <Endorsement />
    </div>
  )
}

export default Home