import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import AwarenessImage from "/images/awareness_image.jpg";
import { CardWithImgAndTitleAsHeader } from "../layout/Card-Template";
import IncentiveImage from "/images/incentive.svg";
import InfrastructureImage from "/images/infrastructure.svg";
import EducationImage from "/images/education.svg";
import WasteOfficerImage from "/images/waste_officer.svg";


export default function ProjectDetails() {
  const comp_proj_data = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline()
        t1.from([".project-details-left, .project-details-right"], {
            opacity: 0,
            duration: 3,
            delay: 0.5,
            scrollTrigger: ".project-details-left",
        }).add("together").from(".project-details-left", {
            x: "-=100",
            duration: 1,
            delay: 1,
        }, "together").from(".project-details-right", {
            x: "+=100",
            duration: 1, 
        }, "together+=1")
      }, comp_proj_data)
      return () => ctx.revert()
    }, [])
    return (
      <div className="project-details" ref={comp_proj_data}>
        <div className="project-details-left">
          <img src={AwarenessImage} alt="Awareness_Image" />
          <div className="project-details-content-left-title">
            <p>Our Project</p>
          </div>
          <div className="project-details-content-left-content">
            <p>
              <span>Societal Development:</span> which will 
            </p>
              <p>involve awareness campaigns</p>
            <p>and training workshops for</p>
            <p>the people in the waste community</p>
            <p>
              We will also promote educational campaigns
            </p>
            <p>to raise awareness about</p>
            <p>the importance of proper waste disposal.</p>
  
            <p>
              <span>Technical Development:</span> which will 
            </p>
              <p>involve a web application and a Waste Card.</p>
            <p>
              We propose solutions that address
            </p>
               <p>the lack of initiative for proper</p>
              <p>waste segregation.</p>
            <p>We aim to implement a neighborhood</p>
            <p> waste collection system</p>
            <p>by collaborating with local authorities so that</p>
            <p>
              both <span>YOU</span> and <span>MOTHER NATURE</span> benefits!
            </p>
          <div className="project-details-content-left-content-signup-btn">
              <button class="button-88" role="button">SIGN UP!</button>
          </div>
          </div>
        </div>
        <div className="project-details-right">
          <CardWithImgAndTitleAsHeader
            img={IncentiveImage}
            title="Incentives"
            content_1="We have devised methods"
            content_2="that will see that you profit"
            content_3="while also saving our home"
            content_4="in this vast vast universe!"
            style={{transform: "rotate(5deg) translateX(-5em)"}}
          />
          <CardWithImgAndTitleAsHeader
            img={InfrastructureImage}
            title="Infrastructure"
            content_1="With the technology of today"
            content_2="we have created ways that will"
            content_3="allow you to contribute at"
            content_4="the comfort of your home!"
            style={{transform: "rotate(-5deg) translateX(5em)"}}
          />
          <CardWithImgAndTitleAsHeader
            img={EducationImage}
            title="Education"
            content_1="It pains us that cases regarding"
            content_2="injury due to mismanagement of waste"
            content_3="always exist. We are here"
            content_4="to put an end to that!"
            style={{transform: "rotate(5deg) translateX(-5em)"}}
          />
          <CardWithImgAndTitleAsHeader
            img={WasteOfficerImage}
            title="Waste Officers"
            content_1="Our W agents are always"
            content_2="working round the clock"
            content_3="to help you and our home!"
            style={{transform: "rotate(-5deg) translateX(5em)"}}
          />
        </div>
      </div>
    );
  }