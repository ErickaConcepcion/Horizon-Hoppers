const express = require('express')
const path = require('path')
const adventureCategories = require('./public/assets/data/adventureCategories')
const offersData = require('./public/assets/data/offersData')
const carouselData = require('./public/assets/data/carouselData')
const itinerary = require('./public/assets/data/tourItinerary')
const places = require('./public/assets/data/destinationsData')
const expressLayout = require('express-ejs-layouts')
const app = express()

app.use(expressLayout)
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('layout', './layouts/master-layout.ejs')

app.get('/', (req, res)=> {
  res.render('pages/landing-page.ejs', {adventureCategories, offersData, carouselData, places})
})

app.get('/tours', (req, res) => {
  let placeholder = [];

  places.forEach((place) => {
    place.tours.forEach((specific) => {
      placeholder.push(specific)
    })
  })

  res.render('pages/tours.ejs', {itinerary, tourCardData: placeholder, showTourPlan: false })
})

app.get('/destination', (req, res)=> {
  res.render('pages/destination.ejs', {destinations: places})
})

app.get('/tours/:place', (req, res) => {
  const requestedPlace = req.params.place;
  const place = places.find(item => item.country.toLowerCase() === requestedPlace.toLowerCase());

  if (!place) {
    return res.status(404).send('Place not found');
  }

  res.render('pages/tours.ejs', {itinerary: place.itinerary, tourCardData: place.tours, showTourPlan: true });
})

app.get('/booking', (req, res)=> {
    res.render('pages/booking.ejs')
})

app.get('/details/:place/:id', (req, res) => {
  const requestedId = req.params.id;
  const requestedPlace = req.params.place;

  const place = places.find(item => item.country.toLowerCase() === requestedPlace.toLowerCase());

  const tour = place.tours.find(tour => tour.id === Number(requestedId));

  if (!place) {
    return res.status(404).send('Place not found');
  }

  res.render('pages/tour-details.ejs', {tour, place})
})


app.listen(3000, ()=> {
    console.log('listening on port 3000')
})