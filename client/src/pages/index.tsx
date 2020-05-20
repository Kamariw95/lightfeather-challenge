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
        <div className="main-container purple-bkgrnd">
          <SignUpForm />
        </div>
        <Link to="/slightly-better-design">Slightly better design here...</Link>
      </Layout>
    )
  }
}

export default IndexPage
