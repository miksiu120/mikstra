const express = require('express')
const router = express.Router()

router.get('/test', (req, res, next) => {
	res.send('api is working properly')
})

module.exports = router
