import React, {useState} from 'react'
import images from '../../constants/index'

const Hero = () => {

  const [Adjective, setAdjective] = useState("Innovative")

  const RandomAdjective = () => {
    const adjectives = ["innovative", "smart", "creative", "structured", "aesthetic", "imaginative", "elegant", "ornamental", "stimulating", "sublime", "tasteful", "refined"]
  }
  

  return (
    <div className="hero">
      <div className='hero__bg'></div>
        <img src={images.bg_hero} alt="BG_hero" />
      <div className="hero__content">


      <div className='hero__content-text'>
        <h1>Brushing <span>Perfection</span></h1>
        <h2>one line of <span>code</span> at a time</h2>

        <p>Millions of businesses strive to achieve our <span>{Adjective}</span> framework design, beautiful UI, and content flow.</p>

        <p>With Simon Labs, so can you...</p>

        <div hero__text-actions>
        <button>Start Now</button>
        <a href="">Learn More</a>
        </div>

        <div className='hero__content-graphic'>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero