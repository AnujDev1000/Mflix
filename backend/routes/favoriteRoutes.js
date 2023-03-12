const express = require('express');
const favoriteRouter = express.Router();
const { getFavorites, getSingleFavorite, addFavoriteMovie, addFavoriteShow, deleteFavoriteShow, deleteFavoriteMovie } = require("../controller/favoriteController");
const requireAuth = require('../middleware/requireAuth');

favoriteRouter.use(requireAuth)

favoriteRouter.get("/get", getFavorites)
favoriteRouter.get("/get/:id", getSingleFavorite)
favoriteRouter.patch("/add/movie/:id", addFavoriteMovie)
favoriteRouter.patch("/add/tv/:id", addFavoriteShow)
favoriteRouter.patch("/delete/movie/:id", deleteFavoriteMovie)
favoriteRouter.patch("/delete/tv/:id", deleteFavoriteShow)

module.exports = favoriteRouter;