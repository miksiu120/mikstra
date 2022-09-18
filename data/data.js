const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
mongoose
	.connect('mongodb+srv://miksiu120:goodpassword@mikstradata.riebnir.mongodb.net/?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('our db was connected')
	})
	.catch(err => {
		console.log(err)
		console.log('error')
	})

const Post = mongoose.model('Post', {
	login: {
		type: String,
	},
	post: {
		type: String,
	},
})

const createPost = async data => {
	console.log('wykonanie')
	try {
		const user = new Post(data)
		await user.save()
		console.log(getPosts())
	} catch (error) {
		console.log(error)
	}
}

const post = {
	login: 'tester',
	post: 'Słuchajcie, słuchajcie, mieszkańcy Khorinis! Na rozkaz wielmożnego lorda Hagena ogłasza się co następuje',
}

const getPosts = async () => {
	try {
		return await Post.find({})
	} catch (err) {
		console.log(err)
	}
}
const posts = getPosts()

module.exports = { posts, createPost }
