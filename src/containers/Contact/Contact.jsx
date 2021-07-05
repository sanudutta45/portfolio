import React from "react"

//component
import Title from "../../components/SectionHeader/SectionHeader"

//icons
import { Email, GitHub, LinkedIn } from "@material-ui/icons"

//scss
import Style from "./Contact.module.scss"

const Contact = () => {
  return (
    <div id="contact" className={`${Style.wrapper} scrollspy`}>
      <Title>Contact</Title>
      <div className={`container ${Style.containerWrapper}`}>
        <p>
          <a
            aria-label="Email Sanu"
            href="mailto:sanuduttajs@gmail.com"
            data-position="top"
            data-tooltip="Email Sanu"
            className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.centerIcon}`}
          >
            <Email fontSize="large" />
          </a>
          <a
            aria-label="Email Sanu"
            href="mailto:sanuduttajs@gmail.com"
            className={`${Style.hoverLine} teal-text`}
          >
            sanuduttajs@gmail.com
          </a>
        </p>
        <p>
          <a
            aria-label="View Sanu on Github"
            href="https://github.com/sanudutta45"
            target="_blank"
            data-position="top"
            data-tooltip="View Sanu on Github"
            className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.centerIcon}`}
          >
            <GitHub fontSize="medium" />
          </a>
          <a
            aria-label="View Sanu on Github"
            href="https://github.com/sanudutta45"
            target="_blank"
            className={`${Style.hoverLine} teal-text`}
          >
            github.com/sanudutta45
          </a>
        </p>

        <p>
          <a
            aria-label="View Sanu on Linkedin"
            href="https://www.linkedin.com/in/sanu-dutta-0067"
            target="_blank"
            data-position="top"
            data-tooltip="View Sanu on Linkedin"
            className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.centerIcon}`}
          >
            <LinkedIn fontSize="medium" />
          </a>
          <a
            aria-label="View Sanu on Linkedin"
            href="https://www.linkedin.com/in/sanu-dutta-0067"
            target="_blank"
            className={`${Style.hoverLine} teal-text`}
          >
            linkedin.com/in/sanu-dutta
          </a>
        </p>
      </div>
    </div>
  )
}
export default Contact
