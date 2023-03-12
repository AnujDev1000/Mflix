const mongoose = require('mongoose')
const Favorite = require("../models/favoriteModel")

const getFavorites = async (req, res) => {

    try {
        const favorites = await Favorite.find()
        if(favorites){
            res.status(200).json(favorites)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getSingleFavorite = async (req, res) => {
    const { id } = req.params

    try {
        const favorites = await Favorite.findOne({ _id: id})
        if(favorites){
            res.status(200).json(favorites)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const addFavoriteMovie = async (req, res) => {
    const { id } = req.params

    try {
        const favorites = await Favorite.findOne({_id: id})
        favorites.movies.push(req.body)
        favorites.save()

        if(favorites){
            res.status(200).json(favorites)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const addFavoriteShow = async (req, res) => {
    const { id } = req.params

    try {
        const favorites = await Favorite.findOne({_id: id})
        favorites.shows.push(req.body)
        favorites.save()

        if(favorites){
            res.status(200).json(favorites)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const deleteFavoriteMovie = async (req, res) => {
    const { id } = req.params

    try {
        const favorites = await Favorite.findOne({_id: id})
        favorites.movies = favorites.movies.filter(movie => movie.id !== req.body.id)
        await favorites.save()

        if(favorites){
            res.status(200).json(favorites)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const deleteFavoriteShow = async (req, res) => {
    const { id } = req.params

    try {
        const favorites = await Favorite.findOne({_id: id})
        favorites.shows = favorites.shows.filter(show => show.id !== req.body.id)
        await favorites.save()

        if(favorites){
            res.status(200).json(favorites)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = { getFavorites, addFavoriteMovie, addFavoriteShow, deleteFavoriteShow, deleteFavoriteMovie, getSingleFavorite }
