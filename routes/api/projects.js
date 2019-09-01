const router = require('express').Router()
const Project = require('../../models/Project');

// @route   GET api/projects
// @desc    Get All Projects
// @access  Public
router.get('/', (req, res) => {
  Project.find()
         .then(project => res.json(project))
})

module.exports = router
