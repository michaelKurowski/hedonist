const express = require('express')
const router = express.Router()
const throwLog = require('ionic-error-logger')
const apiRequest = require('../utils/beerDbAPI.js')


router.get('/:id', (req, res) => {
	const id = req.params.id
	apiRequest(`brewery/${id}`).then(
		data => res.json(data),
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})
router.get('/:id/beers', (req, res) => {
	const id = req.params.id
	console.log(id)
	apiRequest(`brewery/${id}/beers`).then(
		data => res.json(data),
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

module.exports = router