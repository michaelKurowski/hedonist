
const expect = require('chai').expect
const request = require('supertest')
const config = require('../config/config.json')


const hostname = config.backend.hostname
const port = config.backend.port

const id = 'PLACEHOLDER'


const endpoint = `http://${hostname}:${port}/api/beer/${id}`

describe('/api/beer/:id', () => {
	describe('sent request', () => {

	})
	describe('received response', done => {
		it('should return status code 200', done => {

		})
		it('should have Content-Type: application/json', done => {

		})
		it('should return object', done => {

		})
		it('should return object with property \'name\'', done => {

		})
	})
})