const music = require('../models/music')
const Music = require('../models/music')
// const Run = require('../models/run')

// READ index
function index(req, res, next) {
    Music.find({user: req.user._id })
    .then(music => {
        res.render('music/index', {
            music,
            title: "My Music"
        })
    })
    .catch(next)
}

// renders a form to intake user input info for the music
function newMusic(req, res) {
    res.render('music/new', { title: 'New Music'})
}

// CREATE
function create(req, res, next) {
    req.body.user = req.user._id
    Music.create(req.body)
    .then(() => res.redirect('/music'))
    .catch(next)
}

// READ - show
function show(req, res, next) {
    // find a single music entry and render it to a page
    
    // in the params object there needs to be a key of id
    Music.findById(req.params.id)
    .then(music => {
        res.render('music/show', {
            music,
            title: 'Music Team Details'
        })
    })
    .catch(next)
}

// render a form to update a music entry
function updateMusicForm(req, res, next) {
    // find the music to update
    // then pass that music to correct view
    Music.findById(req.params.id)
        .then(music => {
            res.render('music/edit', {
                music,
                title: 'Music Edit Detail'
            })
        })
}

// UPDATE - crud
function update(req, res, next) {
    Music.findById(req.params.id)
    // if current signed in user doesn't own this music entry they shouldn't be able to update it
        .then(music => {
            // need to use .equals (not `===` which won't work here)
            console.log('this is music', music)
            console.log('this is user', req.user)
            if(!music.user.equals(req.user._id)) throw new Error('Unauthorized')
            
            // if the user matches should update with updateOne method
            return music.updateOne(req.body)
        })
        .then(() => {res.redirect(`/music/${req.params.id}`)})
        .catch(next)
}

// DELETE - crud
function deleteMusic(req, res, next) {
    Music.findById(req.params.id)
    .then(music => {
        if (!music.user.equals(req.user._id)) throw new Error('Unauthorized')

        return music.deleteOne()
    })
    .then(() => res.redirect('/music'))
    .catch(next)
}

module.exports = {
    index,
    newMusic,
    create,
    show,
    updateMusicForm,
    update,
    deleteMusic
}