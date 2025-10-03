import React from 'react'
import _WirelessHeadset from '../assets/Wireless-Headset.png';

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero-text'>
            <h1 className= 'heading'>Latest Arrivals</h1>
            <p className='para'>Discover the newest products in our collection</p>
            <button className='shop-Btn'>Shop Now</button>
        </div>

        <div className='hero-banner'>
            <img src={_WirelessHeadset} alt="" />
        </div>

    </section>
  )
}

export default Hero
