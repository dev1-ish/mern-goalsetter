const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')

// add a resource (imp server.js) - controller f(x):
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)


module.exports = router