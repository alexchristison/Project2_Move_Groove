const express = require('express')
const router = express.Router()

const runCtrl = require('../controllers/runs')
const musicCtrl = require('../controllers/music')

// localhost:3000/runs/
router.get('/', runCtrl.index)
router.get('/new', runCtrl.newRun)
router.post('/', runCtrl.create)

router.get('/:id', runCtrl.show)
router.get('/:id/edit', runCtrl.updateRunForm)
router.put('/:id', runCtrl.update)
router.delete('/:id', runCtrl.deleteRun)

// get route to display 'add songs' to playlist page ('/runs/addSongs/:id)
router.get('/:runId/addMusic', musicCtrl.newMusic);
// get route needs a controller that displays one song and all the music 
// put route to actually add songs to playlist (:runId/addSong/:musicId)
// put route needs controller to find run by id and pushes the musicId into the array
router.put('/:runId/newMusic/:musicId', musicCtrl.newMusic)
// might be nice to have a route that adds a new piece of music and pushes it to a run playlist

module.exports = router