const express = require('express')
const states = require('./states/states.routes')

const project = require('../constants/project')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: project.message
  })
})
router.use('/states', states)

module.exports = router