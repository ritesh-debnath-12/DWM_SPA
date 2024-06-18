import { useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function Hero() {
  const comp_hero = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([".hero-title", ".hero-content"], {
        opacity: 0,
        duration: 3,
        x: "+=100",
      })
    }, comp_hero)
    return () => ctx.revert()
  }, [])
    return (
      <div className="hero" ref={comp_hero}>
        <p className="hero-title">Domestic Waste....</p>
        <p className="hero-content">Improper waste disposal affects the</p>
        <p className="hero-content">overall cleanliness and hygiene of our</p>
        <p className="hero-content">neighborhoods and country.</p>
      </div>
    );
  }