import React from 'react'
import Hero from '../layout/home/Hero'
import Nav from '../components/Nav';


const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Hero></Hero>
    </div>
  );
}

export default Home