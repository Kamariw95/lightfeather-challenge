class ValidationFields {
    username: string
    email: string 
    password: string
    confirmPassword: string
}

class Validator {
    isValidPassword(password: string, confirmPassword: string) : boolean {
        return !this.isPasswordEmpty(password) && (password === confirmPassword)
    }
    isValidEmail(email: string) : boolean {
        return true
    }

    isValidUsername(username: string) : boolean {
        return username.length <= 15 && username.length > 0
    }

    isPasswordEmpty(password: string) : boolean {
        return password.length == 0
    }
    
    isButtonDisabled(fields: ValidationFields) {
        return !(this.isValidEmail(fields.email) && this.isValidUsername(fields.username) && this.isValidPassword(fields.password, fields.confirmPassword))
    }
}

export default Validator