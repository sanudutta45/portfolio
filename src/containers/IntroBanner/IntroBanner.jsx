import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { LinkedIn, GitHub, Email } from "@material-ui/icons"

//scss
import BannerStyle from "./IntroBanner.module.scss"

const IntroBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "road-ahead.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 667, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="intro" className={`${BannerStyle.wrapper}`}>
      <div className={BannerStyle.sliderOverlay}></div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ width: "100%", height: "100%" }}
        imgStyle={{ objectFit: "cover" }}
      />
      <div className={`${BannerStyle.content}`}>
        <h1>Sanu Dutta</h1>
        <h2>Web Developer</h2>
        <ul>
          <li>
            <a
              href="https://github.com/sanudutta45"
              target="_blank"
              aria-label="Email Sanu"
            >
              <Email fontSize="large" />
            </a>
          </li>
          <li>
            <a
              aria-label="View Sanu on Linkedin"
              href="https://www.linkedin.com/in/sanu-dutta-0067"
              target="_blank"
            >
              <LinkedIn fontSize="large" />
            </a>
          </li>
          <li>
            <a
              aria-label="View Sanu on Github"
              href="https://github.com/sanudutta45"
              target="_blank"
            >
              <GitHub fontSize="large" />
            </a>
          </li>
        </ul>
        <a href="#about" aria-label="view portfolio" className={BannerStyle.btn}>
          Portfolio
        </a>
      </div>
    </div>
  )
}

export default IntroBanner
