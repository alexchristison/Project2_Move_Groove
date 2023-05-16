const run = require('../models/run')
const Run = require('../models/run')

// READ index 
function index(req, res, next) {
    Run.find({ user: req.user._id})
    .then(runs => {
        res.render('runs/index', {
            runs,
            title: "My Runs"
        })
    })
    .catch(next)
}

// renders a form to intake user input info for the run
function newRun(req, res) {
    res.render('runs/new', { title: 'New Run'})
}

//CREATE 
function create(req, res, next) {
    req.body.user = req.user._id
    Run.create(req.body)
    .then(() => res.redirect('/runs'))
    .catch(next)
}

//READ - show
function show(req, res, next) {
    Run.findById(req.params.id)
    .then(run => {
        res.render('runs/show', {
            run,
            title: 'Run Details'
        })
    })
    .catch(next)
}

// render a form to update a run
function updateRunForm(req, res, next) {
    // find the run to update
    // then pass that run to correct view
    Run.findById(req.params.id)
        .then(run => {
            res.render('runs/edit', {
                run,
                title: 'Run Edit Detail'
            })
        })
}

// UPDATE - crud
function update(req, res, next) {
    Run.findById(req.params.id)
    // if current signed in user doesn't own this run they shouldn't be able to update it
        .then(run => {
            // need to use .equals (not `===` which won't work here)
            console.log('this is run', run)
            console.log('this is user', req.user)
            // if(!run.user.id.equals(req.user._id)) throw new Error('Unauthorized')
            
            // if the user matches should update with updateOne method
            return run.updateOne(req.body)
        })
        .then(() => res.redirect(`/runs/${req.params.id}`))
        .catch(next)
}

// DELETE - crud
function deleteRun(req, res, next) {
    Run.findById(req.params.id)
    .then(run => {
        if (!run.user.equals(req.user._id)) throw new Error('Unauthorized')

        return run.deleteOne()
    })
    .then(() => res.redirect('/runs'))
    .catch(next)
}

module.exports = {
    index,
    newRun,
    create,
    show,
    updateRunForm,
    update,
    deleteRun
}