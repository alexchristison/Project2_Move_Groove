// const music = require ('../models/music')
const Run = require('../models/run')

// READ index
function index(req,res, next) {
    musicSchema.find({ user: req.user._id})
    .then(music => {
        res.render('music/index', {
            music,
            title: "My Run Music"
        })
    })
    .catch.next
}

// renders a form to intake user input info for the music
function newMusic(req, res) {
    res.render('music/new', { title: 'New Music'})
}

// CREATE
function create(req, res, next) {
    req.body.user = req.user._id
    Music.create(req.body)
    .then(() => res.redirect('/runs'))
    .catch(next)
}

module.exports = {
    index,
    newMusic,
    create
}