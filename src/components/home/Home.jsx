import React, { useEffect } from 'react'
import './home.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
  return (
    <section className='home'>
        <div className="secContainer container">
            <div data-aos="fade-up" className="homeText">
                <h1 data-aos="fade-up" className="title">
                    Plan Your Trip with Travel Dot
                </h1>
                <p className="subTitle">
                    Travel to your favourite city with respectful for the environment

                </p>
                <button className='btn'>
                    <a href="#">
                        Explore Now
                    </a>

                </button>
            </div>
            <div className="homeCard grid">
                <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">

                    <label htmlFor="location" className="location">Location</label>
                    <input type="text" placeholder='Grean Destination' />

                </div>
                <div data-aos="fade-right" data-aos-duration="2500"  className="distDiv">
                    <label htmlFor="distance">Distance</label>
                    <input type="text" placeholder='11/Meters' />

                </div>
                <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
                    <label htmlFor="price">Price</label>
                    <input type="text" placeholder='$140 - $500' />
                </div>
                <button data-aos="fade-left" data-aos-duration="3000"  className="btn">
                    Search
                </button>
                
            </div>
            
        </div>

    </section>
  )
}

export default Home