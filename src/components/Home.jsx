import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Digital Pathways </h1>
          <p> Solution to your all problems </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Explore limitless innovation at Digital Pathways. Navigate the
            digital landscape, access insights, and join a vibrant tech
            community. Your journey to excellence begins here.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At Digital Pathways, we are a dedicated collective of
            forward-thinkers and tech enthusiasts who navigate the ever-evolving
            landscape of digital innovation. Our platform serves as a guiding
            light for individuals, businesses, and creators seeking to explore
            new horizons in the digital realm. With a strong commitment to
            fostering growth and knowledge, we pave the way for discovering new
            avenues of technology-driven possibilities. Digital Pathways is more
            than just a website – it's a journey, a hub of insights, resources,
            and connections that empower you to traverse the intricate web of
            digital opportunities. Whether you're an aspiring developer, a
            seasoned entrepreneur, or a curious mind, join us in embarking on a
            transformative journey along the boundless Digital Pathways. Welcome
            to a community where exploration knows no bounds – welcome to
            Digital Pathways.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
