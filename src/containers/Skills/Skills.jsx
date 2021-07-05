import React from "react"

//component
import Title from "../../components/SectionHeader/SectionHeader"

//assets
import ReactLogo from "../../assets/images/react.png"
import HtmlLogo from "../../assets/images/html5.png"
import Css3Logo from "../../assets/images/css3.png"
import BootstrapLogo from "../../assets/images/bootstrap.png"
import MaterializeLogo from "../../assets/images/materialize.png"
import SassLogo from "../../assets/images/sass.png"
import JavaScriptLogo from "../../assets/images/javascript.png"
import NodeJsLogo from "../../assets/images/nodejs.png"
import GatsbyLogo from "../../assets/images/gatsby.png"
import ExpressLogo from "../../assets/images/expressjs.png"
import PostgresLogo from "../../assets/images/postgresql.png"
import mongodbLogo from "../../assets/images/mongodb.png"
import WebPackLogo from "../../assets/images/webpack.png"

//scss
import Style from "./Skills.module.scss"

const Skills = () => {
  return (
    <div id="skills" className={`${Style.wrapper} scrollspy`}>
      <Title>Skills</Title>
      <div className="container">
        <div className={`card ${Style.cardWrapper}`}>
          <div className="card-content">
            <h4 className="brown-text light">HTML</h4>
            <div className={`row ${Style.rowWrapper}`}>
              <div className="col s4 m2">
                <img
                  src={HtmlLogo}
                  alt=""
                  className="responsive-img"
                  height="50"
                  width="auto"
                />
                HTML 5
              </div>
              <div className="col s4 m2">
                <img src={ReactLogo} alt="" className="responsive-img" />
                JSX
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardWrapper}`}>
          <div className="card-content">
            <h4 className="brown-text light">CSS</h4>
            <div className={`row ${Style.rowWrapper}`}>
              <div className="col s4 m2">
                <img
                  src={Css3Logo}
                  alt=""
                  className="responsive-img"
                  height="50"
                  width="auto"
                />
                CSS3
              </div>
              <div className="col s4 m2">
                <img src={SassLogo} alt="" className="responsive-img" />
                SASS
              </div>
              <div className="col s4 m2">
                <img src={BootstrapLogo} alt="" className="responsive-img" />
                Bootstrap
              </div>
              <div className="col s4 m2">
                <img src={MaterializeLogo} alt="" className="responsive-img" />
                Materialize
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardWrapper}`}>
          <div className="card-content">
            <h4 className="brown-text light">Javascript</h4>
            <div className={`row ${Style.rowWrapper}`}>
              <div className="col s4 m2">
                <img
                  src={ReactLogo}
                  alt=""
                  className="responsive-img"
                  height="50"
                  width="auto"
                />
                React
              </div>
              <div className="col s4 m2">
                <img src={GatsbyLogo} alt="" className="responsive-img" />
                Gatsby
              </div>
              <div className="col s4 m2">
                <img src={JavaScriptLogo} alt="" className="responsive-img" />
                Javascript
              </div>
              <div className="col s4 m2">
                <img src={NodeJsLogo} alt="" className="responsive-img" />
                Node
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardWrapper}`}>
          <div className="card-content">
            <h4 className="brown-text light">Back-End</h4>
            <div className={`row ${Style.rowWrapper}`}>
              <div className="col s4 m2">
                <img
                  src={ExpressLogo}
                  alt=""
                  className="responsive-img"
                  height="50"
                  width="auto"
                />
                Express
              </div>
              <div className="col s4 m2">
                <img src={mongodbLogo} alt="" className="responsive-img" />
                MongoDB
              </div>
              <div className="col s4 m2">
                <img src={PostgresLogo} alt="" className="responsive-img" />
                PostgresSQL
              </div>
            </div>
          </div>
        </div>

        <div className={`card ${Style.cardWrapper}`}>
          <div className="card-content">
            <h4 className="brown-text light">Build Tools</h4>
            <div className={`row ${Style.rowWrapper}`}>
              <div className="col s4 m2">
                <img
                  src={WebPackLogo}
                  alt=""
                  className="responsive-img"
                  height="50"
                  width="auto"
                />
                Webpack
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
