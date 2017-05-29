
const expect = require('chai').expect
const request = require('supertest')
const config = require('../config/config.json')


const hostname = config.backend.hostname
const port = config.backend.port
const api = '/api/beer/'



describe('/api/beer/:id', () => {
	const id = 'PLACEHOLDER'
	let responseStatus, responseContentType, responseBody, responseObject
	before(done => {
		//Authentication
		done()
	})
	describe('sent request', () => {
		it('should be able to be sent', done => {
			request(`http://${hostname}:${port}`)
				.get(api + id)
				.send()
				.end( (err, res) => {
					if (err) throw err
					responseStatus = res.statusCode
					responseContentType = res.get('Content-Type')
					responseBody = res.body
					done()
				})
		})
	})
	describe('received response', done => {
		it('should return status code 200', done => {
			expect(responseStatus).to.be.equal(200)
		})
		it('should have Content-Type: application/json', done => {
			expect(responseContentType).to.be.equal('application/json')
		})
		it('should be parseable JSON', done => {
			responseObject = JSON.parse(responseBody)
		})
		it('should return object', done => {
			expect(responseObject).to.be.an('object')
		})
		it('should return object with property \'name\'', done => {
			expect(responseObject).to.have.property('name')
		})
	})
})