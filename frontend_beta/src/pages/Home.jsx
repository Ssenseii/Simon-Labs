import React from 'react'
import Nav from '../components/Nav';
import Hero from '../layout/home/Hero'
import Whoami from '../layout/home/Whoami'
import Tools from '../layout/home/Tools';
import Focus from '../layout/home/Focus';

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <Whoami />
      <Tools />
      <Focus />
    </div>
  );
}

export default Home