import React from 'react'
import './about.scss'
import img1 from "../../Assets/mountain.png"
import img2 from '../../Assets/customer_service png_4425165.png'
import img3 from '../../Assets/pngtree-tourist-girl-png-image_7215501.png'
import vid from '../../Assets/MpapeCrushedRock.mp4'
const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img1} alt="" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being
            </p>
          </div>
          <div className="singleItem">
            <img src={img2} alt="" />
            <h3>2000+ Customer</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being
            </p>
          </div>
          <div className="singleItem">
            <img src={img3} alt="" />
            <h3>1000+ Hiking</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being
            </p>
          </div>

        </div>
        
        <div className="videoCard container">
           <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful House experiennce</h2>
              <p>
                The Adventure subranking is based on an equally weighted average of scores from five country

              </p>
            </div>

            <div className="cardvideo">
              <video src={vid} autoPlay loop muted type="video/mp4"></video>
            </div>
           </div>
        </div>
      </div>
        
    </section>
  )
}

export default About