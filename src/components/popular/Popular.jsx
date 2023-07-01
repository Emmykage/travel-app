import React from 'react'
import "./popular.scss"
import {BsArrowLeftShort, BsArrowRightShort, BsDot} from "react-icons/bs"
import img from "../../Assets/boy_voyage.jpg"

const Popular = () => {
  return (
    <section className='popular section container'>
        <div className="secContainer">
            <div className="secHeader flex">
                <div className="textDiv">
                    <h2 className="secTitle">

                        Popular Destination
                        
                     </h2>
                <p>from historic cities to natural specteculars, come see the best of the world</p>
                </div>
                <div className="iconsDiv flex">
                <BsArrowLeftShort className='icon leftIcon'/>
                <BsArrowRightShort className='icon rightIcon'/>

            </div>
            </div>
            <div className="mainContent grid">
                <div className="singleDestination">
                    <div className="destImage">
                        <img src={img} alt="" />
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
            </div>
            
        </div>
        
    </section>
  )
}

export default Popular