const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const { emptyRegister, checkPassword, emptyLogin } = require('../utils/errorHandler');
const generateToken = require('../utils/generateToken');
const Favorite = require("./favoriteModel")


const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    isActive:{
        type: Boolean,
        default: true
    },
    favorite:{
        type: mongoose.Schema.Types.ObjectId,
    }
}, { timestamps: true })


userSchema.statics.register = async function(firstname, lastname, email, password){
    let errors = {firstname: "", lastname: "", email: "", password: ""}
    errors = emptyRegister(firstname, lastname, email, password, errors)

    if(!(isEmail(email)) && !errors.email){
        errors.email = "Email is not valid!"
    }
    if(!errors.password){
        errors = checkPassword(password, errors)
    }
    if(await this.findOne({email: email}) && !errors.email){
        errors.email = "Email Already Registered!"
    }


    if(errors.firstname || errors.lastname || errors.email || errors.password){
        return errors
    }
    else{
        try{
            const salt = await bcrypt.genSalt()
            const hash = await bcrypt.hash(password, salt)
            const favorite = await Favorite.create({})
            const user = await this.create({firstname, lastname, email, password: hash, favorite: favorite._id})
            return user
        }
        catch(e){
            return e.message
        }
    }

}

userSchema.statics.login = async function(email, password){
    let errors = { email: "", password: "", credentials: "", active: ""}
    errors = emptyLogin(email, password, errors)

    if(!(isEmail(email)) && !errors.email){
        errors.email = "Email is not valid!"
    }
    if(errors.email || errors.password){
        return errors
    }
    else{
        try {
            const user = await this.findOne({email: email})
            if(!user || !(await bcrypt.compare(password, user.password))){
                errors.credentials = "Invalid Credentials!"
                return errors
            }
            else if(!user.isActive){
                errors.active = "User no longer Active!"
                return errors
            }
            else{
                const token = generateToken(user._id)
                return { isAdmin: user.isAdmin , firstname: user.firstname, id: user._id, token: token}
            }
        } catch (error) {
            return error.meassage
        }
    }
}

module.exports = mongoose.model('users', userSchema)


