const express = require('express')
const path = require('path')
const adventureCategories = require('./public/assets/data/adventureCategories')
const offersData = require('./public/assets/data/offersData')
const carouselData = require('./public/assets/data/carouselData')
const itinerary = require('./public/assets/data/tourItinerary')
const tourCardData = require('./public/assets/data/tourCardData')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('pages/landing-page.ejs', {adventureCategories, offersData, carouselData})
})

app.get('/tours', (req, res)=> {
    res.render('pages/tours.ejs', {itinerary, tourCardData})
})

app.get('/destination', (req, res)=> {
    res.render('pages/destination.ejs')
})


app.listen(3000, ()=> {
    console.log('listening on port 3000')
})