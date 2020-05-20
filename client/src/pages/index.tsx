import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../styles/index.css'

interface IState {
  fields: Object;
  errors: Object;
}

class IndexPage extends React.Component<IState> {
  readonly state = {
    fields: {},
    errors: {}
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

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
            <div className="sign-up-form">
              <div className="sign-up-row">
                <label className="container-label">Username</label>
                <input className="sign-up-input" name="username" maxLength={15} type="text" onChange={this.handleChange}/>
              </div>
              <div className="sign-up-row">
                <label className="container-label">Email</label>
                <input className="sign-up-input" name="email" type="email" onChange={this.handleChange}/>
              </div>
              <div className="sign-up-row">
                <label className="container-label">Password</label>
                <input className="sign-up-input" name="password" type="password" onChange={this.handleChange}/>
              </div>
              <div className="sign-up-row">
                <label className="container-label">Confirm Password</label>
                <input className="sign-up-input" name="confirm-password" type="password" onChange={this.handleChange}/>
              </div>
              <div className="button-row">
                <button className="submit-button" disabled={false}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
