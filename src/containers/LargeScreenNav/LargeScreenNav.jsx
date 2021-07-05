import React from "react"
import {
  Person,
  TrendingUp,
  Web,
  Equalizer,
  School,
  Mail,
  Create,
  Description,
} from "@material-ui/icons"

//assets
import resumePdf from "../../assets/docs/resume.pdf"

//style
import NavStyle from "./LargeScreenNav.module.scss"

// const divChildren = () => {
//   return (
//     <Fragment>
//       <h3>Sanu Dutta</h3>
//       <div>Full Stack Developer</div>
//     </Fragment>
//   )
// }
const LargeScreenNav = () => {
  return (
    <nav className={`${NavStyle.navWrapper} hide-on-small-only`}>
      <ul className={`${NavStyle.nav} z-depth-2`}>
        <li className={NavStyle.logo}>
          <a
            aria-label="Navigation to the beginning of the page"
            href="#intro"
            className=" teal-text"
          >
            <h3>
              Sanu
              <br />
              Dutta
              <span className="brown-text light">Full Stack Developer</span>
            </h3>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a
            aria-label="Navigate to the Skills section"
            className="waves-effect waves-dark teal-text"
            href="#about"
          >
            <Person style={{ fontSize: 30 }} />
            <span>About</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a href="#experience" className="waves-effect waves-dark cyan-text">
            <TrendingUp style={{ fontSize: 30 }} />
            <span>Experience</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a href="#projects" className="waves-effect waves-dark indigo-text">
            <Web style={{ fontSize: 30 }} />
            <span>Projects</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a href="#skills" className="waves-effect waves-dark purple-text">
            <Equalizer style={{ fontSize: 30 }} />
            <span>Skills</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a href="#edu" className="waves-effect waves-dark orange-text">
            <School style={{ fontSize: 30 }} />
            <span>Education</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a href="#contact" className="waves-effect waves-dark brown-text">
            <Mail style={{ fontSize: 30 }} />
            <span>Contact</span>
          </a>
        </li>
        {/* <li className={NavStyle.bold}>
          <a
            href="#blog"
            className="waves-effect waves-dark yellow-text text-darken-2"
          >
            <Create style={{ fontSize: 30 }} />
            <span>Blog</span>
          </a>
        </li> */}
        <li className={NavStyle.bold}>
          <a
            href={resumePdf}
            target="_blank"
            className="waves-effect waves-dark grey-text text-darken-3"
          >
            <Description style={{ fontSize: 30 }} />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default LargeScreenNav
