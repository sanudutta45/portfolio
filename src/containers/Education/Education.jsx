import React from "react"

//component
import Title from "../../components/SectionHeader/SectionHeader"

//scss
import Style from "./Education.module.scss"
const Education = () => {
  return (
    <div id="edu" className={`{Style.wrapper} scrollspy`}>
      <Title>Education</Title>
      <div className={`container ${Style.containerWrapper}`}>
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">BE in Mechanical</span>
                </p>
                <p className="brown-text">
                  Sathyabama University, Tamil Nadu, India
                </p>
                <p>
                  <strong className={Style.bold}>Year</strong> : 2013 - 2017
                </p>
                <p>
                  <strong className={Style.bold}>Cumulative GPA</strong> : 7.36 / 10
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">Intermediate</span>
                </p>
                <p className="brown-text">Pranab Vidhyapith,Nagaland, India</p>
                <p>
                  <strong className={Style.bold}>Year</strong> : 2011 - 2013
                </p>
                <p>
                  <strong className={Style.bold}>Percentage</strong> : 70 / 100
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">Matriculation</span>
                </p>
                <p className="brown-text">Assembly of God, Tamil Nadu, India</p>
                <p>
                  <strong className={Style.bold}>Year</strong> : 2006 - 2011
                </p>
                <p>
                  <strong className={Style.bold}>Percentage</strong> : 80 / 100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
