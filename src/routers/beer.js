const express = require('express')
const router = express.Router()
const throwLog = require('ionic-error-logger')
const getJSON = require('get-json')
const apiKey = require('../config/config.json').backend.breweryDbApiKey

//Querrying
router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {
	const id = req.params.id
	getJSON(
		`http://api.brewerydb.com/v2/beer/${id}?key=${apiKey}`, 
		(err, apiResponse) => new Promise( (resolve, reject) => 
			(err) ? reject(err) : resolve(apiResponse)
		).then( data => {
			res.set('Content-Type', 'application/json')
			res.send(data)
		},
			err => {
				throwLog('api/beer/' + id, err, true)
			}
		)
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