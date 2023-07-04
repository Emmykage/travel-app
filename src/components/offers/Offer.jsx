import React, { useEffect } from 'react'
import './offer.scss'

import Aos from 'aos'

import 'aos/dist/aos.css'
 
import { BsArrowRight } from 'react-icons/bs'
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from "react-icons/md"
import {FaWifi} from 'react-icons/fa'
import img1 from "../../Assets/upview.webp"
const offers = [{
    id: 1,
    imgSrc: img1,
    destTitle: "Abuja",
    location: "maitama",
    price: '$2,452'

},
{
    id: 1,
    imgSrc: img1,
    destTitle: "Abuja",
    location: "maitama",
    price: '$2,452'

},
{
    id: 1,
    imgSrc: img1,
    destTitle: "Abuja",
    location: "maitama",
    price: '$2,452'

},
{
    id: 1,
    imgSrc: img1,
    destTitle: "Abuja",
    location: "maitama",
    price: '$2,452'

}]
const Offer = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
  return (
    <section className='offer container section'>
        <div className="secContainer">
            <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                <h2 className="secTitle">
                    Special Offers
                </h2>
                <p>
                        From historical cities to natural spectaculars, come see the best of the world!

                </p>
            </div>
            <div className="mainContent grid">
                {
                    offers.map(({id, imgSrc, setTitle, location, price})=> (
                        <div data-aos="fade-up" data-aos-duration="2000" className="singleOffer">
                    <div className="destImage">
                        <img src={imgSrc} alt="image name" />
                        <span className='discount'>
                            30% Off
                        </span>
                    </div>
                    <div className="offerBody">
                        <div className="price flex">
                            <h4>
                                $1000
                            </h4>
                            <span className='status'>
                                For Rent
                            </span>

                        </div>
                        <div className="amenities flex">
                            <div className=" singleAmenity flex">
                                <MdKingBed className="icon" />
                                <small>2 Beds</small>
                            </div>
                            <div className=" singleAmenity flex">
                                <MdBathtub className="icon" />
                                <small>2 Bath</small>
                            </div>
                            <div className=" singleAmenity flex">
                                <FaWifi className="icon" />
                                <small>wi-fi</small>
                            </div>
                            <div className=" singleAmenity flex">
                                <MdAirportShuttle className="icon" />
                                <small>2 Shuttle</small>
                            </div>
                            <div className=" singleAmenity flex">
                                <MdKingBed className="icon" />
                                <small>2 Beds</small>
                            </div>
                        </div>
                        <div className="location flex">
                            <MdLocationOn className='icon'/>
                            <small>450 Vine 310, London</small>
                        </div>
                        <button className="btn flex">
                            View Details
                            <BsArrowRight className='icon'/>
                        </button>
                    </div>
                          
                </div>

                    ))
                }
                
            </div>
        </div>  

        
    </section>
  )
}

export default Offer