const express = require('express')
const router = express.Router()
const data = require('../data/data')

router.get('/', (req, res, next) => {
	data.posts.then(responce => {
		console.log(responce)
		res.json(responce)
	})
})

module.exports = router
