import React, { useEffect } from 'react'
import "./popular.scss"
import {BsArrowLeftShort, BsArrowRightShort, BsDot} from "react-icons/bs"
import img from "../../Assets/dubai.jpg"
import img2 from "../../Assets/kenya_life.jpg"
import img3 from "../../Assets/argentina_mountains.jpg"
import img4 from "../../Assets/washington.jpg"
// import img5 from "../../Assets/forest_house.jpg"
import img5 from "../../Assets/abuja.webp"

import Aos from 'aos'

import 'aos/dist/aos.css'
const Data = [{
    id:1,
    imgSrc: img,
    destTitle: 'Dubai',
    location: 'United Arab Emirates',
    grade: "Recreation and Shopping"
},
{
    id:2,
    imgSrc: img2,
    destTitle: 'Nairobi',
    location: 'Kenya',
    grade: "Cultural and Wild Live"
},
{
    id:3,
    imgSrc: img3,
    destTitle: 'Buenos Aires',
    location: 'Argentina',
    grade: "Nature and Tourism"
},
{
    id:4,
    imgSrc: img4,
    destTitle: 'Wahington DC',
    location: 'Peru',
    grade: "Tourism Relax"
},
{
    id:5,
    imgSrc: img5,
    destTitle: 'Abuja',
    location: 'Nigeria',
    grade: "Cultural"
}]

const Popular = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
  return (
    <section className='popular section container'>
        <div className="secContainer">
            <div className="secHeader flex">
                <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                    <h2 className="secTitle">

                        Popular Destination
                        
                     </h2>
                <p>from historic cities to natural specteculars, come see the best of the world</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className="iconsDiv flex">
                <BsArrowLeftShort className='icon leftIcon'/>
                <BsArrowRightShort className='icon rightIcon'/>

            </div>
            </div>
            <div data-aos="fade-up" className="mainContent grid">
                {
                    Data.map(({imgSrc, grade, location, destTitle})=>(
                        <div className="singleDestination">
                        <div className="destImage">
                            <img src={imgSrc} alt="" />
                            <div className="overlayInfo">
                                <h3>{destTitle}</h3>
                                <p>
                                    {grade}
                                </p>
                                <BsArrowRightShort className='icon'/>
                            </div>
                        </div>
    
                         <div className="destFooter">
                            <div className="number">
                                01
                            </div>
                            <div className="destText flex">
                                <h6>{location}</h6>
                                <span className='flex'>
                                    <span className="dot">
                                        <BsDot className='icon'/>
                                    </span>
                                    Dot
                                </span>
                            </div>
                         </div>
                    </div>
                    ))
                }
               
            </div>
            
        </div>
        
    </section>
  )
}

export default Popular