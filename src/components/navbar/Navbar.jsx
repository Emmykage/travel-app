import React, { useState } from 'react'
import "./navbar.scss"
import {SiYourtraveldottv} from "react-icons/si"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)

    const showNav =()=> {
        setActive('navBar activeNavbar')
    }
    const removeNav = ()=> {
        setActive('navBar')
    }
  return (
    <section className='navBarSection'>
        <div className={transparent}>
            <div className="logoDiv">
                <div className="logo">
                    <h1> <SiYourtraveldottv className="icon"/>Dot</h1>
                </div>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#Home" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#Products" className="navLink">Products</a>
                    </li> <li className="navItem">
                        <a href="#Resources" className="navLink">Resources</a>
                    </li> <li className="navItem">
                        <a href="#Contact" className="navLink">Contact</a>
                    </li> <li className="navItem">
                        <a href="Blog" className="navLink">Blog</a>
                    </li>
                    <div className="headerBtns flex">
                        <button className="btn loginBtn">
                            <a href="#login">Login</a>
                        </button>
                    <button className="btn ">
                        <a href='#sign_up'>Sign up</a>
                    </button>
                    </div>
                </ul>
                <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>


        </div>

    </section>
  )
}

export default Navbar