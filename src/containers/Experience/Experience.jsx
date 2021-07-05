import React from "react"

//component
import Title from "../../components/SectionHeader/SectionHeader"

//assets
import SwrmLogo from "../../assets/images/swrmlabs-logo.svg"
import ArrowLogo from "../../assets/images/arrow-electronic.svg"

//scss
import Style from "./Experience.module.scss"

const Experience = () => {
  return (
    <div id="experience" className={`${Style.wrapper} scrollspy`}>
      <Title>Experience</Title>
      <div className={`container`}>
        <div className={`card ${Style.cardWrapper}`}>
          <div className={`card-content ${Style.contentWrapper}`}>
            <div className={`${Style.headerWrapper} row`}>
              <div className="col s12 m2 center-align">
                <img
                  src={ArrowLogo}
                  alt="logo"
                  width="150"
                  height="50"
                  style={{ background: "black" }}
                />
              </div>
              <div className="col s12 m10">
                <p>
                  <span>
                    <a
                      href="https://www.arrow.com/"
                      target="_blank"
                      className="teal-text hoverline"
                    >
                      Logistics
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className={`brown-text ${Style.role}`}>Software Engineer</div>
            <p>
              <em className={Style.greyText}>
                Provide guidance, find solutions and connect people with
                technology that makes life better.
              </em>
            </p>
            <h6>Develop Product</h6>
            <ul>
              <li>
                Woked with Warehouse management team to build Warehouse
                management Receiving web GUI.
              </li>
              <li>
                Lead front-end development, creating and documenting the web GUI
                flow.
              </li>
              <li>
                Woked on database migration for migrating mongoDB to oracle.
              </li>
              <li>Writing REST API's in Hapi framework.</li>
              <li>Tools: React, JS, HTML, Sass, JSX, PostgresSQL, Nodejs</li>
            </ul>
          </div>
          <div className={`card-action ${Style.action}`}>
            <span>Feb 2021 - Present | Bengaluru, India</span>
          </div>
        </div>

        <div className={`card ${Style.cardWrapper}`}>
          <div className={`card-content ${Style.contentWrapper}`}>
            <div className={`${Style.headerWrapper} row`}>
              <div className="col s12 m2 center-align">
                <img src={SwrmLogo} alt="logo" width="auto" height="50" />
              </div>
              <div className="col s12 m10">
                <p>
                  <span>
                    <a
                      href="https://swrmlabs.io"
                      target="_blank"
                      className="teal-text hoverline"
                    >
                      Distributed file storage
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className={`brown-text ${Style.role}`}>Software Developer</div>
            <p>
              <em className={Style.greyText}>
                Decentralized blockchain-powered content distribution and
                delivery network provide quality CDN service.
              </em>
            </p>
            <h6>Develop Product</h6>
            <ul>
              <li>
                Contribute core features across entire stack (15k+ lines of
                code, 200+ pulls)
              </li>
              <li>
                Lead front-end development, creating and documenting app-wide
                design system
              </li>
              <li>
                Oversee transtion from page-based styles to modular component
                styles
              </li>
              <li>Guide best practices around accessible, semantic UI/UX</li>
              <li>Tools: React, JS, HTML, Sass, JSX, PostgresSQL, Nodejs</li>
            </ul>
          </div>
          <div className={`card-action ${Style.action}`}>
            <span>Apr 2020 - Feb 2021 | Bengaluru, India</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
