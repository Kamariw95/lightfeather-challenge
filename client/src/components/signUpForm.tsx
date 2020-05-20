import React from "react"
import Validator from "../utils/validator"

import '../styles/index.css'

interface IState {
  fields: Object;
  buttonDisabled: boolean
  showUsernameError: boolean
  showEmailError: boolean
  showConfirmPasswordError: boolean
  showPasswordError: boolean
}

let validator = new Validator()

class SignUpForm extends React.Component<{}, IState> {
  readonly state = {
    fields: {
      "username": "",
      "email": "",
      "password": "",
      "confirmPassword": ""
    },
    buttonDisabled: true,
    showUsernameError: false,
    showEmailError: false,
    showConfirmPasswordError: false,
    showPasswordError: false,
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    let fieldname = e.target.name
    fields[fieldname] = e.target.value;
    this.setState({
      fields
    });

    this.state.buttonDisabled = validator.isButtonDisabled(fields)
  }

  handleBlur(e) {
    let fields = this.state.fields;
    let fieldname = e.target.name

    switch(fieldname) {
      case 'username':
        let showUsernameError = !(validator.isValidUsername(fields.username))
        this.setState({showUsernameError})
        break
      case 'email':
        let showEmailError = !(validator.isValidEmail(fields.email))
        this.setState({showEmailError})
        break
      case 'password':
        let showPasswordError = validator.isPasswordEmpty(fields.password)
        this.setState({showPasswordError})
        break
      case 'confirmPassword':
        let showConfirmPasswordError = validator.isPasswordEmpty(fields.confirmPassword)
        this.setState({showConfirmPasswordError})
        break
    }
  }

  render() {
    return (
        <div className="sign-up-form">
            <div className="sign-up-row">
                <label className="container-label">Username</label>
                <input className="sign-up-input" name="username" maxLength={15} type="text" onBlur={this.handleBlur} onChange={this.handleChange}/>
                {this.state.showUsernameError && <p className="error-message">Please enter a correct username.</p>}
            </div>
            
            <div className="sign-up-row">
                <label className="container-label">Email</label>
                <input className="sign-up-input" name="email" type="email" onBlur={this.handleBlur} onChange={this.handleChange}/>
                {this.state.showEmailError && <p className="error-message">Please enter a correct email.</p>}
            </div>
            
            <div className="sign-up-row">
                <label className="container-label">Password</label>
                <input className="sign-up-input" name="password" type="password" onBlur={this.handleBlur} onChange={this.handleChange}/>
                {this.state.showPasswordError && <p className="error-message">Please enter a password.</p>}
            </div>
            
            <div className="sign-up-row">
                <label className="container-label">Confirm Password</label>
                <input className="sign-up-input" name="confirmPassword" type="password" onBlur={this.handleBlur} onChange={this.handleChange}/>
                {this.state.showConfirmPasswordError && <p className="error-message">Please confirm your password.</p>}
            </div>
            
            <div className="button-row">
                <button className="submit-button" disabled={this.state.buttonDisabled}>Submit</button>
            </div>
        </div>
    )
  }
}

export default SignUpForm
