const getJSON = require('get-json')
const breweryDbApiKey = require('../config/config.json').backend.breweryDbApiKey
module.exports = function (endpoint, parameters = null) {
	let parametersString = ''
	if (parameters) {
		for (parameter of Object.keys(parameters)) {
			parametersString += `&${parameter}=${parameters[parameter]}`
		}
	}
	console.log(`http://api.brewerydb.com/v2/${endpoint}?key=${breweryDbApiKey}${parametersString}`)
	return new Promise( (resolve, reject) => 
		getJSON(
			`http://api.brewerydb.com/v2/${endpoint}?key=${breweryDbApiKey}${parametersString}`, 
			(err, apiResponse) => {
				if (err) return reject(err)
				resolve(apiResponse)
			}
		)
	)
}
