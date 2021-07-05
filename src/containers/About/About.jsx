import React from "react"

//components
import Title from "../../components/SectionHeader/SectionHeader"

//scss
import Style from "./About.module.scss"
const About = () => {
  return (
    <div id="about" className="scrollspy">
      <Title>About</Title>
      <div className={`container flow-text ${Style.contentWrapper}`}>
        <blockquote className="brown-text">
          <h2 className={Style.blockquote}>
            Project-driven full stack developer with a passion for functional
            programming, collaboration and multi tasking.
          </h2>
        </blockquote>
        <p>
          I've always sought out opportunities and challenges that are
          meaningful to me. Although my professional path has taken many twists
          and turns — from a mechanical engineer, site engineer, to small
          bussiness — I've never stopped engaging my passion to help others and
          solve problems.
        </p>
        <p>
          As a web developer, I enjoy using my obsessive attention to detail, my
          unequivocal love for making things, and my mission-driven work ethic
          to literally change the world. That's why I'm excited to make a big
          impact at a high growth company.
        </p>

        <p>
          My latest experience has been focused on building single-page
          applications with JavaScript, React.js, Materialize, HTML/CSS,
          Node.js, PostgresSQL and MongoDB.
        </p>

        <p>
          <strong>Current Focus</strong>: React // Nodejs // Logistics
        </p>
      </div>
    </div>
  )
}

export default About
