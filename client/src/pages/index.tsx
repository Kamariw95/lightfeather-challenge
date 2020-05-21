import React from "react"
import { Link } from "gatsby"
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
        <div className="index-container purple-bkgrnd">
          <SignUpForm />
          <Link className="extra-link" to="/slightly-better-design">Slightly better design here...</Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
