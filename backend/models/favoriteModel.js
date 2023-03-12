const mongoose = require("mongoose")

const favoriteSchema = mongoose.Schema({
    movies: [],
    shows: []
}, { timestamps: true })

module.exports = mongoose.model("favorites", favoriteSchema)
