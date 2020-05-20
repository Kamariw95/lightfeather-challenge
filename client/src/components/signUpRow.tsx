import React from "react"

import '../styles/components/signUpRow.css'

interface IProps {
    label: string
    inputName: string
    inputType: string
    showError: boolean
    errorMessage: string
    handleChange: (e: any) => void
    handleBlur: (e: any) => void
    maxLength?: number 
}


class SignUpRow extends React.Component<IProps, {}> {
  render() {
    let maxLength = this.props.maxLength ? this.props.maxLength : 999

    return (
        <div className="sign-up-row">
            <label className="container-label">{this.props.label}</label>
            <input className="sign-up-input" name={this.props.inputName} maxLength={maxLength} type={this.props.inputType} onBlur={this.props.handleBlur} onChange={this.props.handleChange}/>
        {this.props.showError && <p className="error-message">{this.props.errorMessage}</p>}
        </div>
    )
  }
}

export default SignUpRow
