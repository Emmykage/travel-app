import React from 'react'
import {  BsArrowRightShort } from "react-icons/bs"
import img from '../../Assets/forest_house.jpg'

import './blog.scss'

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
  return (
    <section className='blog container section'>B
    <div className="setContainer">
        <div className="secIntro">
            <h2 className="secTitle">

                Our Best Blog
            </h2>
            <p>
                An insight to the incredible experience in the world

            </p>
        </div>
        <div className="mainContainer grid">
            {
                Posts.map(({id, postImage, title, desc})=> (
                    <div key={id} className="singlePost grid">
                <div className="imgDiv">
                    <img src={postImage} alt="image name" />
                </div>
                <div className="postDetails">
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {desc}
                    </p>

                </div>
                <a href="" className='flex'>
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