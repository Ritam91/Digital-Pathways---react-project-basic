import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Services() {
  return (
    <div >
        <Carousel  infiniteLoop
        autoPlay
       // showArrows={false} to remove arrows from carousel
       // showStatus={false} to remove page 1of2 and more
       // showThumbs={false}to remove pages preview
        interval={2000}>

            <div>
                <img src={img1} alt="item-1" />
                <p className='legend'>Full Stack</p>
            </div>

            <div>
                <img src={img2} alt="item-1" />
                <p className='legend'>Machine Learning</p>
            </div>


        </Carousel>
    </div>
  )
}
