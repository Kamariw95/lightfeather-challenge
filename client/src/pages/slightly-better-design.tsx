import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SignUpForm from "../components/signUpForm"

import '../styles/index.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Layout>
        <div className="main-container">
          <div className="container left-container">
            <div className="gatsby-img">
              <Image />
            </div>
          </div>
          <div className="container right-container">
              <SignUpForm />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
