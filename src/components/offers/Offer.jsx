import React, { useEffect } from 'react'
import './offer.scss'

import Aos from 'aos'

import 'aos/dist/aos.css'
 
import { BsArrowRight } from 'react-icons/bs'
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from "react-icons/md"
import {FaWifi} from 'react-icons/fa'
import img1 from "../../Assets/upview.webp"
import img2 from "../../Assets/beautiful-tropical-beach-sea-with-umbrella-chair-around-swimming-pool-hotel-resort-travel-vacattion.avif"
import img3 from "../../Assets/forest_house.jpg"
// import img5 from "../../Assets/vertical-beach-resort-panorama-charis-with-table-lounge-chill-area-on-wooden-deck-close-to-sea-tropical-hotel-luxury-travel-vacation-scenery.jpg"
// import img4 from "../../Assets//istockphoto-1248210756-612x612.jpg"
import img6 from "../../Assets/Rewanda-the-retreat-pool-and.jpg"

const offers = [{
    id: 1,
    imgSrc: img1,
    destTitle: "450 Vine 310, London",
    location: "London",
    price: '$2,452'

},
{
    id: 2,
    imgSrc: img2,
    destTitle: "GrapeVine crescent Masselle",
    location: "Paris",
    price: '$1,000'

},
{
    id: 3,
    imgSrc: img3,
    destTitle: "St Alexandra beach Resort",
    location: "Instanble",
    price: '$2,211'

},
{
    id: 4,
    imgSrc: img6,
    destTitle: "KN 29 Street Kiyovu, Kigali Rwanda",
    location: "Rewanda",
    price: '$3,000'

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
                    offers.map(({id, imgSrc, destTitle, price})=> (
                        <div data-aos="fade-up" data-aos-duration="2000" className="singleOffer" key={id}>
                    <div className="destImage">
                        <img src={imgSrc} alt={imgSrc} />
                        <span className='discount'>
                            30% Off
                        </span>
                    </div>
                    <div className="offerBody">
                        <div className="price flex">
                            <h4>
                                {price}
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
                            <small>{destTitle}</small>
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