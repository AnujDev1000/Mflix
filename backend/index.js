const express = require('express');
const mongoose = require('mongoose');
const favoriteRouter = require('./routes/favoriteRoutes');
const userRouter = require('./routes/userRoutes');
const cors = require('cors')
require('dotenv').config();

// express app
const app = express();

app.use(express.json());

app.use(cors())

app.use((req, res ,next) => {
    console.log(req.url, ":", req.method);
    next();
})


app.use("/api/users", userRouter)
app.use("/api/users/favorites", favoriteRouter)


mongoose.connect(process.env.DBURL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to Db \nListening to port " + process.env.PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })

// git add . && git commit -m "COMMIT" && git push origin main