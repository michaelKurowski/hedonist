const express = require('express')
const app = express()
const config = require('./config/config.json')
const throwLog = require('ionic-error-logger')
const log = console.log
const chalk = require('chalk')
const bodyParser = require('body-parser')
const port = config.backend.port


app.use(bodyParser.json())
app.use('/client', express.static(`${__dirname}/public`))


app.listen(port, () => {
	throwLog('Init', 'App is running')
	log(chalk.green('App is running'))
})
