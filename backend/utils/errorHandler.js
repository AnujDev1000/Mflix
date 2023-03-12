const emptyRegister = (firstname, lastname, email, password, errors) => {
    if(!firstname){
        errors.firstname = "Firstname required!"
    }
    if(!lastname){
        errors.lastname = "Lastname required!"
    }
    if(!email){
        errors.email = "Email required!"
    }
    if(!password){
        errors.password = "Password required!"
    }

    return errors
}


const emptyLogin = (email, password, errors) => {
    if(!email){
        errors.email = "Email required!"
    }
    if(!password){
        errors.password = "Password required!"
    }

    return errors
}


// const checkFormat = (password) => {
//     const errors = []
    
//     return errors
// }

const checkPassword = (password, errors) => {
    if(password.length < 8){
        errors.password = "Password more than 8 characters!"
    }
    // errors = errors.concat(checkFormat(password))
    return errors
}

module.exports = { emptyRegister, emptyLogin, checkPassword }