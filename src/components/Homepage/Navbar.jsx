import { useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import NavBarImage from "/images/website-icon.png";

export default function NavBar() {
  const comp_nav = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".nav-img", {
        rotate: -360,
        duration: 3,
      })
    }, comp_nav)
    return () => ctx.revert()
  }, [])
    return (
      <nav className="nav" ref={comp_nav}>
        <div className="nav-left">
          <img src={NavBarImage} alt="WebsiteImg" className="nav-img"/>
          <p>Swachya Sangram</p>
        </div>
        <div className="nav-right">
          <a href="#">
            <p>Home</p>
          </a>
          <a href="#">
            <p>About</p>
          </a>
          <a href="#">
            <p>Contact Us</p>
          </a>
          <a href="#">
            <p>Donate</p>
          </a>
        </div>
      </nav>
    );
  }