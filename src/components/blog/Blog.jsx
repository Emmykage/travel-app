import React, { useEffect } from 'react'
import {  BsArrowRightShort } from "react-icons/bs"
import img from '../../Assets/forest_house.jpg'

import './blog.scss'
import Aos from 'aos'

import 'aos/dist/aos.css'

const Posts =[{
    id: 1,
    postImage: img,
    desc: "The city of Nigeria is a heterogenous country in western africa, with coastlines on the atlantic ocean and mediterranean sea"

},
{
    id: 2,
    postImage: img,
    desc: "The city of Nigeria is a heterogenous country in western africa, with coastlines on the atlantic ocean and mediterranean sea"

}, {
    id: 3,
    postImage: img,
    desc: "The city of Nigeria is a heterogenous country in western africa, with coastlines on the atlantic ocean and mediterranean sea"

},
{
    id: 4,
    postImage: img,
    desc: "The city of Nigeria is a heterogenous country in western africa, with coastlines on the atlantic ocean and mediterranean sea"

}]

const Blog = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
  return (
    <section className='blog container section'>B
    <div className="setContainer">
        <div className="secIntro">
            <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">

                Our Best Blog
            </h2>
            <p data-aos="fade-up" data-aos-duration="2500">
                An insight to the incredible experience in the world

            </p>
        </div>
        <div className="mainContainer grid">
            {
                Posts.map(({id, postImage, title, desc})=> (
                    <div data-aos="fade-up" data-aos-duration="2000" key={id} className="singlePost grid">
                <div className="imgDiv">
                    <img src={postImage} alt={postImage} />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="postDetails">
                    <h3>
                        {title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="4000">
                        {desc}
                    </p>

                </div>
                <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4000">
                Read More

                    <BsArrowRightShort className='icon'/>
                </a>

            </div>
                ))
            }
        </div>
    </div>
    </section>
  )
}

export default Blog