import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutImage from "/images/Waste-Collection.jpg";

export default function About() {
  const comp_about = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from([".about-left", ".about-right"], {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: ".about-left",
      }).add("together").from(".about-left", {
        x: "-=100",
        duration: 1,
        delay: 1,
        scrollTrigger: ".about-left",
      }, "together").from(".about-right", {
        x: "+=100",
        duration: 1,
        scrollTrigger: ".about-left",
      }, "together+=1")
    }, comp_about)
    return () => ctx.revert()
  }, [])
    return (
      <div className="about" ref={comp_about}>
        <div className="about-left">
          <img src={AboutImage} alt="About Image" />
        </div>
        <div className="about-right">
          <p className="about-title">About Swachya Sangram</p>
          <div className="about-content">
            <p>We the Swachya Sangram Team, have come up with a solution,</p>
            <p>that attempts to cull this issue at the base level </p>
            <p>
              by interacting directly with <span>YOU!</span>
            </p>
          </div>
          <div className="about-content-down">
            <p>...and that too using a few easy steps!</p>
            <p>
              <span>You are gonna love this...pinky promise :D</span>
            </p>
          </div>
          <div className="about-us-btn-box">
            <button className="about-us-btn" role="button">
              About Us &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }