class ValidationFields {
    username: string
    email: string 
    password: string
    confirmPassword: string
}

class Validator {
    validatePassword(password: string, confirmPassword: string) : boolean {
        return (password === confirmPassword) && password.length > 6
    }
    validateEmail(email: string) : boolean {
        return true
    }

    validateUsername(username: string) : boolean {
        return username.length <= 15 && username.length > 0
    }
    
    isButtonDisabled(fields: ValidationFields) {
        return !(this.validateEmail(fields.email) && this.validateUsername(fields.username) && this.validatePassword(fields.password, fields.confirmPassword))
    }
}

export default Validator