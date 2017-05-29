const express = require('express')
const app = express()
const throwLog = require('ionic-error-logger')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const beerRouter = require('./routers/beer.js')
const breweryRouter = require('./routers/brewery.js')

const config = require('./config/config.json')
const port = config.backend.port
const dbAddress = config.backend.dbAddress
const dbUsername = config.backend.dbUsername
const dbPassword = config.backend.dbPassword
const log = console.log

app.use(bodyParser.json())
app.use('/client', express.static(`${__dirname}/public`))
app.use('/api/beer', beerRouter)
app.use('/api/brewery', breweryRouter)
mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@${dbAddress}`).then(
	() => {
		throwLog('Init', 'Connected to database', true)
		app.listen(port, () => {
			throwLog('Init', 'App is running')
			log(chalk.green('App is running'))
		})
	},
	err => {
		throwLog('Init', 'Database connection issue ' + err, true)
		throw 'Database connection issue ' + err
	}
)
	

