import React from "react"

//scss
import Style from "./SectionHeader.module.scss"

const SectionHeader = ({ children }) => {
  return <h3 className={`${Style.header} white-text teal`}>{children}</h3>
}

export default SectionHeader
