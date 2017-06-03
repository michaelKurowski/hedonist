const breweryDbApiKey = require('../config/config.json').backend.breweryDbApiKey
const http = require('http')
module.exports = function (endpoint, parameters = null) {

	let parametersString = ''
	console.log('new rq', parameters)
	if (parameters) {
		for (parameter of Object.keys(parameters)) {
			parametersString += `&${parameter}=${parameters[parameter]}`
		}
	}
	const reqOptions = {
		host: 'api.brewerydb.com',
		port: '80',
		path: `/v2/${endpoint}?key=${breweryDbApiKey}${parametersString}`,
		method: 'GET'
	}

	console.log(parametersString)
	return new Promise( (resolve, reject) => 
		http.request(reqOptions, 
			response => {
				let buffer = ''
				response.setEncoding('utf8')
				response.on('data', data => buffer += data)
				response.on('end', data => resolve(JSON.parse(buffer)))
					.on('error', err => reject(err))
			}
		).end()
	)
}
