import React, { Fragment, useEffect } from "react"
import {
  Menu,
  Person,
  TrendingUp,
  Web,
  Equalizer,
  School,
  Mail,
  Description,
} from "@material-ui/icons"

import M from "materialize-css"

//assets
import resumePdf from "../../assets/docs/resume.pdf"

//scss
import NavStyle from "./SmallScreenNav.module.scss"

const SmallScreenNav = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav")
    const instance = M.Sidenav.init(elems, {})
  }, [])

  return (
    <Fragment>
      <nav className={`${NavStyle.wrapper} hide-on-med-and-up z-depth-1`}>
        <div className={`${NavStyle.brand} brand-logo`}>
          <a
            aria-label="Toggle visibility of the mobile navbar"
            href="#main"
            className="teal-text sidenav-close"
          >
            Sanu Dutta
          </a>
          <div className="brown-text light">Full Stack Developer</div>
        </div>
        <button
          style={{ backgroundColor: "#FFF", border: "none" }}
          data-target="side-menu"
          className={`${NavStyle.menu} sidenav-trigger teal-text`}
        >
          <Menu style={{ fontSize: 45 }} />
        </button>
      </nav>

      <ul className="sidenav" id="side-menu" style={{ width: "200px" }}>
        <li className={NavStyle.bold}>
          <a
            className="waves-effect waves-dark teal-text sidenav-close"
            href="#about"
          >
            <Person style={{ fontSize: 30 }} />
            <span>About</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a
            href="#experience"
            className="waves-effect waves-dark cyan-text sidenav-close"
          >
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
          <a
            href="#skills"
            className="waves-effect waves-dark purple-text sidenav-close"
          >
            <Equalizer style={{ fontSize: 30 }} />
            <span>Skills</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a
            href="#edu"
            className="waves-effect waves-dark orange-text sidenav-close"
          >
            <School style={{ fontSize: 30 }} />
            <span>Education</span>
          </a>
        </li>
        <li className={NavStyle.bold}>
          <a
            href="#contact"
            className="waves-effect waves-dark brown-text sidenav-close"
          >
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
    </Fragment>
  )
}

export default SmallScreenNav
