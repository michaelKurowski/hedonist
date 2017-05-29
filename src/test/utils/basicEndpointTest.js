/*
	Basic test that every endpoint shouls pass
*/

const expect = require('chai').expect
const request = require('supertest')
const config = require('../../config/config.json')

const address = config.backend.hostname + ':' + config.backend.port + '/'

module.exports = function (requestData, expectedResponse, describe, it) {
	const id =''
	const {endpoint, httpMethod, body} = requestData
	const {expectedCode, expectedParsingOutputType, expectedProperies} = expectedResponse
	describe(address + endpoint, () => {
		let responseStatus, responseContentType, responseBody, responseObject
		before(done => {
			//Authentication
			done()
		})
		describe('sent request', () => {
			it('should be able to be sent', done => {
				request(address)
					[httpMethod](endpoint + id)
					.send(body)
					.end( (err, res) => {
						if (err) throw err
						responseStatus = res.statusCode
						responseContentType = res.get('Content-Type')
						responseBody = res.text
						done()
					})
			})
		})
		describe('received response', done => {
			it(`comes with status code ${expectedCode}`, done => {
				expect(responseStatus).to.be.equal(expectedCode)
				done()
			})
			it('has Content-Type: application/json; charset=utf-8', done => {
				expect(responseContentType).to.be.equal('application/json; charset=utf-8')
				done()
			})
			it('is parseable JSON', done => {
				responseObject = JSON.parse(responseBody)
				done()
			})
			it(`parses to ${expectedParsingOutputType} type` , done => {
				expect(responseObject).to.be.an(expectedParsingOutputType)
				done()
			})
			if (typeof expectedParsingOutputType === 'object') {
				for (property of expectedProperies) {
					it(`parses to object with property '${property}'`, done => {
						expect(responseObject).to.have.property(property)
						done()
					})
				}
			}
		})
	})
}