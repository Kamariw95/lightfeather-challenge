import React from "react"

import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import '../styles/index.css'

const IndexPage = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
    <div className="main-container">
      <div className="container left-container">
        <div className="gatsby-img">
          <Image />
        </div>
      </div>
      <div className="container right-container">
        <div className="sign-up-form">
          <div className="sign-up-row">
            <label className="container-label">Username</label>
            <input className="sign-up-input" type="text"/>
          </div>
          <div className="sign-up-row">
            <label className="container-label">Email</label>
            <input className="sign-up-input" type="text"/>
          </div>
          <div className="sign-up-row">
            <label className="container-label">Password</label>
            <input className="sign-up-input" type="password"/>
          </div>
          <div className="sign-up-row">
            <label className="container-label">Confirm Password</label>
            <input className="sign-up-input" type="password"/>
          </div>
          <div className="button-row">
            <button className="submit-button" disabled={true}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
