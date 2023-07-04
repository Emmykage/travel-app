import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import { SiYourtraveldottv } from 'react-icons/si'
import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <div className=" secContainer container grid">
            <div className="logoDiv">
                <div className="footerLogo">
                    <a className="logo">
                        <h1  className='flex'>

                           
                            <SiYourtraveldottv className="icon"/>
                            Dot
                            </h1>

                    </a>

                </div>
                <div className='socials flex'>
                <ImFacebook className="icon"/>
                <BsTwitter className="icon"/>
                <AiFillInstagram className="icon"/>


            </div>
            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                Information
                </span>
                <li>
                    <a href="#">Destination</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Travels & Conditions</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </div>
            <div className="footerLinks">
                <span className="linkTitle">

                    Helpful Links
                </span>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">Travel</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                Contact us

                </span>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">Travel</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                Information
                </span>
                <li>
                    <a href="#">Destination</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Travels & Conditions</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                Contact us
                </span>
                <span className='phone'>+2347064334160</span>
                <span className='email'>vortech@gmail.com</span>

            </div>
            
          
        </div>
    </div>
  )
}

export default Footer