const express = require('express')
const router = express.Router()
const {getGoals, setGoals, deleteGoals, putGoals} = require('../controllers/goalController')


router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(putGoals)


module.exports = router