import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


// Create your personalized movie and TV show collection with our 'My Watchlist' feature. Save your favorite titles for later and never miss a must-watch moment again!
// git add . && git commit -m "COMMIT" && git push origin main