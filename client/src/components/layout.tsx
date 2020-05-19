/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"

import "../styles/components/layout.css"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
