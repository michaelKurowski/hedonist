const express = require('express')
const router = express.Router()
const throwLog = require('ionic-error-logger')
const apiRequest = require('../utils/beerDbAPI.js')

//Querrying
router.get('/', (req, res) => {
	const id = req.params.id
	if (req.query.random) {
		apiRequest(`beer/random`).then(
			data => res.json(data),
			err => throwLog('api/beer/' + id, err, true)
		)
		return null
	}
	delete req.query.random
	apiRequest(`beers`, req.query).then(
		data => {res.json(data)},
		err => throwLog('api/beers' + id, err, true)
	)
})

router.get('/:id', (req, res) => {
	const id = req.params.id
	apiRequest(`beer/${id}`).then(
		data => res.json(data),
		err => throwLog('api/beer/' + id, err, true)
	)
})

router.get('/:id/variants', (req, res) => {

})

router.get('/:id/socialAccounts', (req, res) => {

})

router.get('/:id/ingredients', (req, res) => {

})

router.get('/:id/ingredients/details', (req, res) => {

})

router.get('/:id/breweries', (req, res) => {

})

module.exports = router