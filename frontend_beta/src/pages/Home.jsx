import React from 'react'
import Nav from '../components/Nav';
import Hero from '../layout/home/Hero'
import Whoami from '../layout/home/Whoami'
import Patterns from '../layout/home/Patterns';
import Tools from '../layout/home/Tools';

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <Whoami />
      <Patterns />
      <Tools />
    </div>
  );
}

export default Home