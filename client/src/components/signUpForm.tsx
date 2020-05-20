import React from "react"
import Validator from "../utils/validator"
import SignUpRow from "./signUpRow";

import '../styles/components/signUpForm.css'

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
            <SignUpRow
                label="Username"
                inputName="username"
                maxLength={15}
                inputType="text"
                handleBlur={this.handleBlur}
                handleChange={this.handleChange}
                showError={this.state.showUsernameError}
                errorMessage={"Please enter a correct username."}
            />

            <SignUpRow
                label="Email"
                inputName="email"
                inputType="email"
                handleBlur={this.handleBlur}
                handleChange={this.handleChange}
                showError={this.state.showEmailError}
                errorMessage={"Please enter a correct email."}
            />
            
            <SignUpRow
                label="Password"
                inputName="password"
                inputType="password"
                handleBlur={this.handleBlur}
                handleChange={this.handleChange}
                showError={this.state.showPasswordError}
                errorMessage={"Please enter a password."}
            />

            <SignUpRow
                label="Confirm Password"
                inputName="confirmPassword"
                inputType="password"
                handleBlur={this.handleBlur}
                handleChange={this.handleChange}
                showError={this.state.showConfirmPasswordError}
                errorMessage={"Please confirm your password."}
            />
            
            <div className="button-row">
                <button className="submit-button" disabled={this.state.buttonDisabled}>Submit</button>
            </div>
        </div>
    )
  }
}

export default SignUpForm
