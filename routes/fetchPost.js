const { json } = require('express')
const express = require('express')
const router = express.Router()
const data = require('../data/data')

router.post('/', (req, res, next) => {
	data.createPost(req.body)
	res.redirect(req.get('referer'))
})

module.exports = router
