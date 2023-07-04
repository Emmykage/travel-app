import React, { useEffect } from 'react'
import "./popular.scss"
import {BsArrowLeftShort, BsArrowRightShort, BsDot} from "react-icons/bs"
import img from "../../Assets/boy_voyage.jpg"
import img2 from "../../Assets/beautiful-tropical-beach-sea-with-umbrella-chair-around-swimming-pool-hotel-resort-travel-vacattion.avif"
import img3 from "../../Assets/14029416-illustration-of-palm-trees-on-desert-island.webp"
import img4 from "../../Assets/forest_house.jpg"
import Aos from 'aos'

import 'aos/dist/aos.css'
const Data = [{
    id:1,
    imgSrc: img2,
    destTitle: 'Dubai',
    location: 'Peru',
    grade: "Cultural Relax"
},
{
    id:2,
    imgSrc: img2,
    destTitle: 'Dubai',
    location: 'Peru',
    grade: "Cultural Relax"
},
{
    id:3,
    imgSrc: img,
    destTitle: 'Dubai',
    location: 'Peru',
    grade: "Cultural Relax"
},
{
    id:4,
    imgSrc: img4,
    destTitle: 'Dubai',
    location: 'Peru',
    grade: "Cultural Relax"
},
{
    id:1,
    imgSrc: img2,
    destTitle: 'Dubai',
    location: 'Peru',
    grade: "Cultural Relax"
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
                    Data.map((data)=>(
                        <div className="singleDestination">
                        <div className="destImage">
                            <img src={data.imgSrc} alt="" />
                            <div className="overlayInfo">
                                <h3>Some text</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consect
                                </p>
                                <BsArrowRightShort className='icon'/>
                            </div>
                        </div>
    
                         <div className="destFooter">
                            <div className="number">
                                01
                            </div>
                            <div className="destText flex">
                                <h6>london</h6>
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