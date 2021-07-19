import React from "react"
import { MoreVert, Close, Launch, GitHub } from "@material-ui/icons"

//assets
import RestroAppImg from "../../assets/images/e-menu.png"
import MyDriveAppImg from "../../assets/images/my-drive.png"
import SwrmlabsImg from "../../assets/images/swrmlabs.png"
import FirstWaveImg from "../../assets/images/firstwave.png"
import CliffEyeImg from "../../assets/images/cliffeye.png"
import AmazonCloneImg from "../../assets/images/amazon.png"

//components
import Title from "../../components/SectionHeader/SectionHeader"

//scss
import Style from "./Projects.module.scss"

const Projects = () => {
  return (
    <div id="projects" className={`${Style.wrapper} scrollspy`}>
      <Title>Projects</Title>
      <div className={`container ${Style.containerWrapper}`}>
        <div className="row">
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  src={RestroAppImg}
                  alt="screenshot of retro app"
                  className="activator"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text">
                  Restro (e-menu)
                  <MoreVert className={`right ${Style.inline}`} />
                </span>
                <p>
                  A digital restaurent food menu for digital India Initiative.
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">
                  Accomplishments
                  <Close className={`right ${Style.inline}`} />
                </span>

                <ul className={Style.ul}>
                  <li>QR Code Scanner</li>
                  <li>Search with debouncing</li>
                  <li>Materialize Design</li>
                  <li>Pagination</li>
                  <li>Node js backend</li>
                </ul>
                <div className="card-action">
                  <a
                    aria-label="visit restro web app"
                    href=""
                    target="_blank"
                    data-position="top"
                    data-tooltip="view online"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <Launch />
                  </a>

                  <a
                    aria-label="open restro web app source code in github repo"
                    href="https://github.com/sanudutta45/restro-app"
                    target="_blank"
                    data-position="top"
                    data-tooltip="view source"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <GitHub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  src={MyDriveAppImg}
                  alt="screenshot of my-drive web app"
                  className="activator"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text">
                  my-Drive
                  <MoreVert className={`right ${Style.inline}`} />
                </span>
                <p>A lite version of google drive.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">
                  Accomplishments
                  <Close className={`right ${Style.inline}`} />
                </span>

                <ul className={Style.ul}>
                  <li>User authentication</li>
                  <li>User authorization</li>
                  <li>Recursive routing</li>
                  <li>Expressjs backend</li>
                  <li>MongoDB database</li>
                  <li>File uploading/downloading</li>
                </ul>
                <div className="card-action">
                  <a
                    aria-label="visit my-drive web app"
                    href=""
                    target="_blank"
                    data-position="top"
                    data-tooltip="view online"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <Launch />
                  </a>

                  <a
                    aria-label="open my-drive web app source code in github repo"
                    href="https://github.com/sanudutta45/myDrive"
                    target="_blank"
                    data-position="top"
                    data-tooltip="view source"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <GitHub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  src={SwrmlabsImg}
                  alt="screenshot of swrmlabs portfolio"
                  className="activator"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text">
                  SWRMLabs' Portfolio
                  <MoreVert className={`right ${Style.inline}`} />
                </span>
                <p>Responsive SWRMLabs' portfolio page</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">
                  Accomplishments
                  <Close className={`right ${Style.inline}`} />
                </span>

                <ul className={Style.ul}>
                  <li>Responsive design</li>
                  <li>Bootstrap CSS</li>
                  <li>Gatsby</li>
                </ul>
                <div className="card-action">
                  <a
                    aria-label="visit swrmlabs portfolio web app"
                    href="https://swrmlabs.io/"
                    target="_blank"
                    data-position="top"
                    data-tooltip="view online"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <Launch />
                  </a>

                  <a
                    aria-label="open my-drive web app source code in github repo"
                    href=""
                    target="_blank"
                    data-position="top"
                    data-tooltip="view source"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <GitHub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  src={FirstWaveImg}
                  alt="screenshot of firstwave isp"
                  className="activator"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text">
                  Firstwave ISP
                  <MoreVert className={`right ${Style.inline}`} />
                </span>
                <p>Landing page for Firstwave Internet Service Provider.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">
                  Accomplishments
                  <Close className={`right ${Style.inline}`} />
                </span>

                <ul className={Style.ul}>
                  <li>Responsive design</li>
                  <li>Bootstrap CSS</li>
                  <li>Gatsby</li>
                  <li>Lazy loading image</li>
                </ul>
                <div className="card-action">
                  <a
                    aria-label="visit firstwave isp web app"
                    href="http://firstwave.co.in/"
                    target="_blank"
                    data-position="top"
                    data-tooltip="view online"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <Launch />
                  </a>

                  <a
                    aria-label="open firstwave isp web app source code in github repo"
                    href="https://github.com/sanudutta45/firstservice"
                    target="_blank"
                    data-position="top"
                    data-tooltip="view source"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <GitHub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  src={CliffEyeImg}
                  alt="screenshot of cliffeye"
                  className="activator"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text">
                  Cliffeye's Portfolio
                  <MoreVert className={`right ${Style.inline}`} />
                </span>
                <p>Portfolio of Cliffeye data analytic service.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">
                  Accomplishments
                  <Close className={`right ${Style.inline}`} />
                </span>

                <ul className={Style.ul}>
                  <li>Responsive design</li>
                  <li>Materialize CSS</li>
                  <li>Gatsby</li>
                  <li>Lazy loading image</li>
                </ul>
                <div className="card-action">
                  <a
                    aria-label="visit cliffeye web app"
                    href=""
                    target="_blank"
                    data-position="top"
                    data-tooltip="view online"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <Launch />
                  </a>

                  <a
                    aria-label="open cliffeye web app source code in github repo"
                    href=""
                    target="_blank"
                    data-position="top"
                    data-tooltip="view source"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <GitHub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  src={AmazonCloneImg}
                  alt="screenshot of amazon-clone"
                  className="activator"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text">
                  Amazon's clone
                  <MoreVert className={`right ${Style.inline}`} />
                </span>
                <p>Clone of e-commerce website amazon.com</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">
                  Accomplishments
                  <Close className={`right ${Style.inline}`} />
                </span>

                <ul className={Style.ul}>
                  <li>Responsive design</li>
                  <li>Tailwind CSS</li>
                  <li>React.js</li>
                  <li>React Context API</li>
                  <li>Stripe payment gateway</li>
                </ul>
                <div className="card-action">
                  <a
                    aria-label="visit amazon-clone web app"
                    href="https://clone-56a19.web.app/"
                    target="_blank"
                    data-position="top"
                    data-tooltip="view online"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <Launch />
                  </a>

                  <a
                    aria-label="open amazon-clone web app source code in github repo"
                    href="https://github.com/sanudutta45/amazon-clone"
                    target="_blank"
                    data-position="top"
                    data-tooltip="view source"
                    className={`btn-floating btn-large waves-effect waves-light brown tooltipped ${Style.iconFlex}`}
                  >
                    <GitHub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
