import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { CardWithImgAndTitleAsHeader } from "../layout/Card-Template";
import CleanlinessImage from "/images/cleanliness.svg";
import AwareImage from "/images/aware.svg";
import TechnologyImage from "/images/technology.svg";

export default function OurPrograms() {
    const comp_programs = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.from(".our-programs-content", {
            opacity: 0,
            x: "+=100",
            duration: 3,
            scrollTrigger: ".our-programs-content"
        })
      }, comp_programs)
      return () => ctx.revert()
    }, [])
    return (
    <div className="our-programs" ref={comp_programs}>
      <div className="our-programs-title">Our Programs</div>
      <div className="our-programs-content">
        <CardWithImgAndTitleAsHeader 
            img={CleanlinessImage}
            title="Cleanliness"
            content_1="We have devised methods"
            content_2="that will see that you profit"
            content_3="while also saving our home"
            content_4="in this vast vast universe!"
            style={{background: "rgb(65,33,0)", background: "linear-gradient(0deg, rgba(65,33,0,1) 29%, rgba(150,75,0,1) 100%)"}}
        />
        <CardWithImgAndTitleAsHeader 
            img={AwareImage}
            title="Awareness"
            content_1="We have devised methods"
            content_2="that will see that you profit"
            content_3="while also saving our home"
            content_4="in this vast vast universe!" 
            style={{background: "rgb(65,33,0)", background: "linear-gradient(0deg, rgba(65,33,0,1) 29%, rgba(150,75,0,1) 100%)"}}
        />
        <CardWithImgAndTitleAsHeader
            img={TechnologyImage}
            title="Technology"
            content_1="We have devised methods"
            content_2="that will see that you profit"
            content_3="while also saving our home"
            content_4="in this vast vast universe!"
            style={{background: "rgb(65,33,0)", background: "linear-gradient(0deg, rgba(65,33,0,1) 29%, rgba(150,75,0,1) 100%)"}}
        />
      </div>
    </div>
    );
  }