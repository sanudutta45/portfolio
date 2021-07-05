import React, { Fragment, useEffect } from "react"
import M from "materialize-css"
import { Helmet } from "react-helmet"
import {useStaticQuery,graphql} from "gatsby"

//scss
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import "../Styles/_global.scss"
import HomeStyle from "../Styles/index.module.scss"

//components
import LargeScreenNav from "../containers/LargeScreenNav/LargeScreenNav"
import SmallScreenNav from "../containers/SmallScreenNav/SmallScreenNav"
import IntroBanner from "../containers/IntroBanner/IntroBanner"
import About from "../containers/About/About"
import Experience from "../containers/Experience/Experience"
import Skills from "../containers/Skills/Skills"
import Education from "../containers/Education/Education"
import Contact from "../containers/Contact/Contact"
import Projects from "../containers/Projects/Projects"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const elems = document.querySelectorAll(".scrollspy")
    M.ScrollSpy.init(elems, { throttle: 30 })
  }, [])
  return (
    <Fragment className={HomeStyle.wrapper}>
      <Helmet>
        <title>Portfolio | {data.site.siteMetadata.title}</title>
      </Helmet>
      <LargeScreenNav />
      <SmallScreenNav />
      <main className={HomeStyle.main}>
        <IntroBanner />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </Fragment>
  )
}
