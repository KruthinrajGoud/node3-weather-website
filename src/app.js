const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Kruthinraj Goud S'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Kruthinraj Goud S'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help me',
        name: 'Kruthinraj Goud S',
        message: 'Message me for help!'
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a address'
        })
    }

    res.send({
        forecast: 'Its raining',
        location: req.query.address
    })
})

app.get('/help/*', (req, res) => {
    res.send('404', {
        title: '404',
        name: 'Kruthinraj Goud S',
        errorMessage: 'Help article not found'

    })
})

app.get('*', (req, res) => {
    res.send('404', {
        title: '404',
        name: 'Kruthinraj Goud S',
        errorMessage: 'Page not found'

    })
})

app.listen(port, () => {
    console.log('Server is up on port' + port + '.')
})