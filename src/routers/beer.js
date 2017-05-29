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
			err => {
				res.json({status: 'failure'})
				throwLog(req.originalUrl, err, true)
			}
		)
		return null
	}
	delete req.query.random
	apiRequest(`beers`, req.query).then(
		data => {res.json(data)},
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

router.get('/:id', (req, res) => {
	const id = req.params.id
	apiRequest(`beer/${id}`).then(
		data => res.json(data),
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

router.get('/:id/variations', (req, res) => {
	const id = req.params.id
	apiRequest(`beer/${id}/variations`).then(
		data => {res.json(data)},
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

router.get('/:id/socialAccounts', (req, res) => {
	const id = req.params.id
	apiRequest(`beer/${id}/socialaccounts`).then(
		data => {res.json(data)},
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

router.get('/:id/ingredients', (req, res) => {
	const id = req.params.id
	apiRequest(`beer/${id}/ingredients`).then(
		data => {res.json(data)},
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

router.get('/:id/ingredients/details', (req, res) => {
	const id = req.params.id
	Promise.all([
		apiRequest(`beer/${id}/hops`).then(
			data => data,
			err => throwLog(`api/beer/${id}/ingredients`, err, true)
		),
		apiRequest(`beer/${id}/ingredients`).then(
			data => data,
			err => throwLog(`api/beer/${id}/ingredients`, err, true)
		)
	]).then(
		responses => {
			responses[0].data = responses[0].data || []
			responses[1].data = responses[1].data || []
			res.json({
				message: 'Reqiuest Successful',
				status: 'success',
				data: responses[0].data.concat(responses[1].data)
			})
		},
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

router.get('/:id/breweries', (req, res) => {
	const id = req.params.id
	apiRequest(`beer/${id}/breweries`).then(
		data => {res.json(data)},
		err => {
			res.json({status: 'failure'})
			throwLog(req.originalUrl, err, true)
		}
	)
})

module.exports = router