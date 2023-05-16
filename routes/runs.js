const express = require('express')
const router = express.Router()

const runCtrl = require('../controllers/runs')

// localhost:3000/runs/
router.get('/', runCtrl.index)
router.get('/new', runCtrl.newRun)
router.post('/', runCtrl.create)

router.get('/:id', runCtrl.show)
router.get('/:id/edit', runCtrl.updateRunForm)
router.put('/:id', runCtrl.update)
router.delete('/:id', runCtrl.deleteRun)

module.exports = router