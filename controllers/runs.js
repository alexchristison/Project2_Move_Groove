const run = require('../models/run')
const Run = require('../models/run')

// READ index 
function index(req, res, next) {
    Run.find({ })
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
    run.findById(req.params.id)
    .then(run => {
        res.render('runs/show', {
            Run,
            title: 'Run Details'
        })
    })
    .catch(next)
}

module.exports = {
    index,
    newRun,
    create,
    show
}