const express = require('express')
const app = express()
const throwLog = require('ionic-error-logger')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
const passportBundle = require('./passport.js')

const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const beerRouter = require('./routers/beer.js')
const breweryRouter = require('./routers/brewery.js')
const authenticationRouter = require('./routers/authentication.js')

const config = require('./config/config.json')
const port = config.backend.port
const dbAddress = config.backend.dbAddress
const dbUsername = config.backend.dbUsername
const dbPassword = config.backend.dbPassword
const log = console.log

const User = require('./models/user.js')
app.use('/client', express.static(`${__dirname}/public`))

const sessionsMiddleware = [
	cookieParser(),
	cookieSession({
		secret: config.backend.sessionsSecretKey,
		maxAge: 1000 * 60 * 15 // 15 minutes
	}),
	passportBundle.initialize(), 
	passportBundle.session(),
	(req, res, next) => {

		if (!req.isAuthenticated()) return res.json({status: 'notLoggedIn'})
		next()
	}
]
app.use(
	'/authenticate', 
	bodyParser.json(), 
	cookieParser(),
	cookieSession({secret: config.backend.sessionsSecretKey}),
	passportBundle.initialize(), 
	passportBundle.session(), 
	authenticationRouter
)

app.use('/api/beer', ...sessionsMiddleware, beerRouter)
app.use('/api/brewery', ...sessionsMiddleware, breweryRouter)
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
	

