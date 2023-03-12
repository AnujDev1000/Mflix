const mongoose = require('mongoose')
const User = require("../models/userModel")
const Favorite = require("../models/favoriteModel")

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.login( email, password )
    if(!user.errors){
        res.status(200).json(user)
    }
    else{
        res.status(404).json(user)
    }
}

const registerUser = async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    const user = await User.register(firstname, lastname, email, password);
    if(!user.errors){
        res.status(200).json(user);
    }
    else{
        res.status(404).json(user);
    }
    
}

const getSingleUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findOne({_id: id});
        if(user){
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    const session = await mongoose.startSession();
    await session.startTransaction()
    try {
        const user = await User.findOneAndDelete({_id: id}, { session: session });
        const favorite = await Favorite.findOneAndDelete({_id: user.favorite}, { session: session });

        if(user && favorite){
            await session.commitTransaction()
            await session.endSession()
            res.status(200).json(user)
        }
        else{
            await session.abortTransaction()
            await session.endSession()
            res.status(404).json({ error: "fail" })
        }
    } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        res.status(404).json({error: error.message})
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findOneAndUpdate({_id: id}, req.body, { new: true });
        if(user){
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        if(user){
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}



module.exports = { loginUser, registerUser, getUsers, getSingleUser, updateUser, deleteUser }